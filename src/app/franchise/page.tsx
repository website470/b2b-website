"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import './franchise.css';

const AnimatedNumber = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        const match = value.match(/^([^\d\.]*)([\d\.]+)([^\d\.]*)$/);
        if (!match) return;

        const target = parseFloat(match[2]);
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(easeOut * target);

            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isVisible, value, duration]);

    const match = value.match(/^([^\d\.]*)([\d\.]+)([^\d\.]*)$/);
    if (!match) return <span ref={ref}>{value}</span>;
    const prefix = match[1];
    const suffix = match[3];
    return <span ref={ref}>{prefix}{Math.floor(count)}{suffix}</span>;
};

const TestimonialSlider = () => {
    const [index, setIndex] = useState(0);
    const cards = [
        { name: "ROHIT MALHOTRA", text: "Partnering with Connplex was the best business decision. The support and brand value are unmatched.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "ANITA VERMA", text: "The technology, the experience, and the team – everything is world class. Highly recommended!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "KARAN SHARMA", text: "From setup to daily operations, Connplex made the entire journey smooth and profitable.", img: "https://randomuser.me/api/portraits/men/46.jpg" },
        { name: "VIKRAM RATHORE", text: "The operational model is so streamlined that it allows me to focus on growth. Truly a world-class partnership.", img: "https://randomuser.me/api/portraits/men/81.jpg" },
        { name: "PRIYA MEHTA", text: "Unbelievable ROI. Within the first year, we surpassed our financial projections. Connplex support is stellar.", img: "https://randomuser.me/api/portraits/women/11.jpg" },
        { name: "SANJAY DUTT", text: "Their technological integration and Dolby Atmos setup are best-in-class. Our audiences are absolutely in love.", img: "https://randomuser.me/api/portraits/men/90.jpg" }
    ];

    const getVisibleCount = () => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    };

    const nextSlide = () => {
        const visibleCount = getVisibleCount();
        const maxIndex = cards.length - visibleCount;
        setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        const visibleCount = getVisibleCount();
        const maxIndex = cards.length - visibleCount;
        setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [cards.length]);

    // Handle window resize to reset index if out of bounds
    useEffect(() => {
        const handleResize = () => {
            const visibleCount = getVisibleCount();
            const maxIndex = cards.length - visibleCount;
            setIndex(prev => Math.min(prev, maxIndex));
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [cards.length]);

    return (
        <div className="fra-slider-container">
            <button className="fra-slider-btn prev" onClick={prevSlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            
            <div className="slider-viewport">
                <div
                    className="fra-testimonials-track"
                    style={{ transform: `translateX(-${index * (100 / getVisibleCount())}%)` }}
                >
                    {cards.map((c, i) => (
                        <div className="fra-testimonial-card" key={i}>
                            <div className="fra-testimonial-card-inner">
                                <div style={{ fontSize: '4rem', color: '#c19b62', lineHeight: 1 }}>“</div>
                                <p style={{ fontStyle: 'italic', margin: '20px 0', opacity: 0.8 }}>{c.text}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', overflow: 'hidden' }}>
                                        <img src={c.img} alt={c.name} width="45" height="45" />
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#c19b62', fontSize: '0.9rem' }}>{c.name}</h4>
                                        <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>Connplex Partner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="fra-slider-btn next" onClick={nextSlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
        </div>
    );
};

export default function FranchisePage() {
    return (
        <div className="franchise-page">
            {/* Navbar Overlay */}
            <Header />

            {/* Hero */}
            <section className="fra-hero">
                <video className="fra-hero-video" autoPlay muted loop playsInline>
                    <source src="/img/franchise/top_video.mp4" type="video/mp4" />
                </video>
                <div className="fra-hero-overlay"></div>
                <div className="fra-hero-content">
                    <h1>OWN YOUR<br /><span className="fra-gold-text">OWN CINEMA</span></h1>
                    <p className="fra-hero-p">
                        Step into the future of entertainment with Connplex.<br />
                        Partner with India&apos;s most premium cinema brand<br />
                        and build a legacy of unforgettable experiences.
                    </p>
                    <Link href="#contact" className="fra-btn-solid">PARTNER WITH US →</Link>
                </div>
            </section>

            {/* Models */}
            <section className="fra-models-section">
                <div className="fra-section-heading">
                    <span className="fra-subtitle">FLEXIBLE MODELS</span>
                    <h2 style={{ fontSize: '2rem' }}>CHOOSE YOUR PATH TO OWNERSHIP</h2>
                    <div style={{ width: '40px', height: '2px', background: '#c19b62', margin: '15px auto' }}></div>
                </div>
                <div className="fra-models-grid">
                    {[
                        { id: "01", title: "MANAGED FRANCHISE", desc: "We manage operations, you earn hassle-free.", features: ["End-to-end management by Connplex", "Proven business model", "High ROI with low operational effort"] },
                        { id: "02", title: "OPERATING FRANCHISE", desc: "Run your cinema with our expertise and support.", features: ["Full operational control", "Complete training & support", "Marketing & technology backing"] },
                        { id: "03", title: "DEVELOPMENT FRANCHISE", desc: "Build your cinema, we&apos;ll handle the rest.", features: ["Investment in space & interiors", "Connplex manages setup & operations", "Premium brand, maximum returns"] }
                    ].map((m, i) => (
                        <div className="fra-model-card" key={i}>
                            <span className="fra-subtitle" style={{ fontSize: '0.7rem' }}>MODEL {m.id}</span>
                            <h3>{m.title}</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{m.desc}</p>
                            <ul className="fra-features-list">
                                {m.features.map((f, j) => (
                                    <li key={j}><svg viewBox="0 0 24 24" fill="none" stroke="#c19b62" width="16" height="16"><polyline points="20 6 9 17 4 12"></polyline></svg> {f}</li>
                                ))}
                            </ul>
                            <Link href="#contact" style={{ color: '#c19b62', fontSize: '0.9rem' }}>EXPLORE MODEL →</Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Partner */}
            <section className="fra-why-section">
                <div className="fra-why-grid">
                    <div>
                        <h2 style={{ fontSize: '2.5rem', lineHeight: 1.1 }}>WHY PARTNER WITH<br /><span className="fra-gold-text">CONNPLEX?</span></h2>
                        <p style={{ margin: '20px 0', opacity: 0.7 }}>Joining Connplex means more than just business – it&apos;s becoming a part of a legacy.</p>
                        <ul className="fra-features-list">
                            {["India&apos;s Most Premium Cinema Brand", "Cutting-edge Technology & Immersive Experience", "End-to-End Support & Training", "Proven Business Model with Strong ROI", "Marketing Power of a Trusted Brand"].map((item, i) => (
                                <li key={i} style={{ alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(193,155,98,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(193,155,98,0.05)' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c19b62" strokeWidth="1.5"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"></path></svg>
                                    </div>
                                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="fra-stats-grid">
                        {[
                            { val: "120+", lbl: "Cinemas Nationwide" },
                            { val: "25M+", lbl: "Happy Moviegoers" },
                            { val: "60+", lbl: "Cities Covered" },
                            { val: "98%", lbl: "Partner Satisfaction" }
                        ].map((s, i) => (
                            <div className="fra-stat-card" key={i}>
                                <div className="fra-stat-value"><AnimatedNumber value={s.val} /></div>
                                <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>{s.lbl}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="fra-testimonials">
                <div className="fra-section-heading">
                    <h2>VOICES OF <span className="fra-gold-text">OUR PARTNERS</span></h2>
                    <div style={{ width: '40px', height: '2px', background: '#c19b62', margin: '15px auto' }}></div>
                </div>
                <TestimonialSlider />
            </section>

            {/* Contact */}
            <section className="fra-contact-section" id="contact">
                <div className="fra-contact-left">
                    <Image src="/img/franchise/last_cta_image.png" alt="Interior" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="fra-contact-right">
                    <span className="fra-subtitle">TAKE THE FIRST STEP</span>
                    <h2 style={{ fontSize: '2.5rem', color: '#c19b62' }}>LET&apos;S BUILD TOGETHER</h2>
                    <p style={{ margin: '15px 0 35px 0', opacity: 0.7 }}>Fill in your details and our team will get in touch with you shortly.</p>
                    <form className="fra-form" onSubmit={(e) => { e.preventDefault(); alert('Enquiry submitted!'); }}>
                        <div className="fra-form-row">
                            <input type="text" className="fra-input" placeholder="Full Name" required />
                            <input type="email" className="fra-input" placeholder="Email Address" required />
                        </div>
                        <div className="fra-form-row">
                            <input type="tel" className="fra-input" placeholder="Phone Number" required />
                            <input type="text" className="fra-input" placeholder="City" required />
                        </div>
                        <select className="fra-input" required style={{ background: '#070707' }} defaultValue="">
                            <option value="" disabled>Preferred Franchise Model</option>
                            <option value="managed">Managed Franchise</option>
                            <option value="operating">Operating Franchise</option>
                            <option value="development">Development Franchise</option>
                        </select>
                        <textarea className="fra-input" placeholder="Message" rows={4}></textarea>
                        <button type="submit" className="fra-btn-solid">SUBMIT ENQUIRY →</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
