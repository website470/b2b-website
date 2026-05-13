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
                        Partner with Connplex — India's fastest-growing<br />
                        multiplex franchise chain — and bring a <br />
                        world-class cinema experience to your city.
                    </p>
                    <div className="fra-hero-buttons" style={{ display: 'flex', gap: '15px', alignItems: 'center', marginTop: '10px' }}>
                        <Link href="#contact" className="fra-btn-solid" style={{ whiteSpace: 'nowrap', padding: '15px 30px' }}>Explore Franchise Opportunities  →</Link>
                        <Link href="#models" className="fra-btn-outline" style={{ background: 'transparent', color: '#fff', border: '1px solid #c19b62', padding: '15px 30px', borderRadius: '4px', fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>Talk to Our Franchise Team</Link>
                    </div>
                </div>
            </section>

            {/* Models */}
            <section className="fra-models-section" id="models">
                <div className="fra-section-heading">
                    <span className="fra-subtitle">FLEXIBLE MODELS</span>
                    <h2 style={{ fontSize: '2rem' }}>CHOOSE YOUR PATH TO OWNERSHIP</h2>
                    <div style={{ width: '40px', height: '2px', background: '#c19b62', margin: '15px auto' }}></div>
                </div>
                <div className="fra-models-grid" style={{ gridTemplateColumns: '1fr', gap: '50px' }}>
                    {[
                        {
                            title: "LUXURIANCE",
                            subtitle: "The full-scale luxury cinema franchise — built for maximum impact.",
                            idealFor: "Metro & Tier 1 markets",
                            description: [
                                "The Connplex Luxuriance is our flagship luxury cinema franchise format — a full-scale multiplex experience designed for high-footfall urban markets where audiences expect nothing less than world-class. With 4 to 6 premium auditoriums, recliner seating, Dolby Atmos sound, and a signature lobby experience, Luxuriance sets the benchmark for premium cinema in India.",
                                "Built across 12,000–14,000 sq ft, this format is engineered for developers and investors seeking a high-revenue cinema franchise anchor in malls, mixed-use developments, and large commercial properties in metro and Tier 1 markets."
                            ],
                            features: [
                                "Maximum screen count for higher content variety",
                                "Largest audience capacity — up to 300 seats",
                                "Signature lobby design with premium F&B",
                                "Strongest ROI potential in high-density markets"
                            ],
                            specs: [
                                { label: "Required Area", value: "12,000 – 14,000 sq ft", desc: "Built-up area" },
                                { label: "Screens", value: "4 – 6 Screens", desc: "Auditorium count" },
                                { label: "Seat Capacity", value: "Up to 300 Seats", desc: "Across all screens" },
                                { label: "Clear Height", value: "12 ft – 14 ft", desc: "Minimum ceiling height" }
                            ]
                        },
                        {
                            title: "SIGNATURE",
                            subtitle: "The perfect balance of luxury, scale, and investment efficiency.",
                            idealFor: "Tier 1 & strong Tier 2 cities",
                            description: [
                                "The Connplex Signature is the most versatile format in our cinema franchise portfolio — delivering the full Connplex luxury experience at a more accessible footprint and investment threshold. With 3 to 4 screens and seating for up to 250 guests, Signature is purpose-built for markets that demand quality without requiring the scale of a flagship multiplex.",
                                "Across 8,000–10,000 sq ft, this mid-scale multiplex franchise model suits established Tier 2 cities, premium high streets, and developers looking for a cinema franchise with a faster break-even and strong neighbourhood loyalty."
                            ],
                            features: [
                                "Optimal screen-to-footprint ratio",
                                "Full Connplex brand and technology standards",
                                "Up to 250 seats — right-sized for growing urban audiences",
                                "Faster break-even timeline compared to flagship format"
                            ],
                            specs: [
                                { label: "Required Area", value: "8,000 – 10,000 sq ft", desc: "Built-up area" },
                                { label: "Screens", value: "3 – 4 Screens", desc: "Auditorium count" },
                                { label: "Seat Capacity", value: "Up to 250 Seats", desc: "Across all screens" },
                                { label: "Clear Height", value: "12 ft – 14 ft", desc: "Minimum ceiling height" }
                            ]
                        },
                        {
                            title: "SMART",
                            subtitle: "The entry-level cinema franchise that opens every market.",
                            idealFor: "Tier 2, Tier 3 & emerging cities",
                            description: [
                                "The Connplex Smart is the most accessible format in our cinema franchise range — and the one changing the face of entertainment in India's underserved markets. With 2 to 4 screens, seating up to 200 guests, and a footprint starting at just 7,000 sq ft, the Smart model is the ideal mini multiplex franchise for Tier 2, Tier 3, and emerging cities where organised cinema has never existed.",
                                "This is where the biggest opportunities are. Low competition. High demand. A first-mover advantage that no other cinema franchise model in India currently addresses with this level of brand quality and technology at this scale."
                            ],
                            features: [
                                "Smallest footprint — ideal for compact commercial spaces",
                                "Lowest cinema franchise investment entry point",
                                "First-mover advantage in high-growth, low-competition markets",
                                "Same Connplex brand, technology, and content access as flagship"
                            ],
                            specs: [
                                { label: "Required Area", value: "7,000 – 10,000 sq ft", desc: "Built-up area" },
                                { label: "Screens", value: "2 – 4 Screens", desc: "Auditorium count" },
                                { label: "Seat Capacity", value: "Up to 200 Seats", desc: "Across all screens" },
                                { label: "Clear Height", value: "10 ft – 12 ft", desc: "Minimum ceiling height" }
                            ]
                        }
                    ].map((m, i) => (
                        <div className="fra-model-card" key={i} style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left', padding: '40px' }}>
                            <div className="model-header">
                                <h3 style={{ fontSize: '2rem', color: '#c19b62', marginBottom: '10px' }}>{m.title}</h3>
                                <p style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', marginBottom: '5px' }}>{m.subtitle}</p>
                                <span style={{ color: '#a0a0a0', fontSize: '0.9rem', fontStyle: 'italic' }}>Ideal for: {m.idealFor}</span>
                            </div>

                            <div className="model-body" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                                <div className="model-desc">
                                    {m.description.map((p, j) => <p key={j} style={{ fontSize: '0.95rem', color: '#ddd', marginBottom: '15px', lineHeight: 1.6 }}>{p}</p>)}
                                    <ul className="fra-features-list" style={{ marginTop: '20px' }}>
                                        {m.features.map((f, j) => (
                                            <li key={j} style={{ marginBottom: '10px', alignItems: 'flex-start' }}><svg viewBox="0 0 24 24" fill="none" stroke="#c19b62" width="20" height="20" style={{ marginRight: '10px', flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg> <span style={{ fontSize: '0.95rem' }}>{f}</span></li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="model-specs" style={{ background: 'rgba(0,0,0,0.3)', padding: '30px', borderRadius: '8px', border: '1px solid rgba(193, 155, 98, 0.1)', height: 'fit-content' }}>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>Technical Specifications</h4>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        {m.specs.map((s, j) => (
                                            <div key={j} className="spec-item">
                                                <span style={{ display: 'block', fontSize: '0.75rem', color: '#a0a0a0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>{s.label}</span>
                                                <strong style={{ display: 'block', fontSize: '1.1rem', color: '#c19b62', marginBottom: '3px' }}>{s.value}</strong>
                                                <span style={{ fontSize: '0.8rem', color: '#888' }}>{s.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="#contact" className="fra-btn-solid" style={{ display: 'inline-block', marginTop: '30px', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}>EXPLORE {m.title}</Link>
                                </div>
                            </div>
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
                            { val: "42+", lbl: "Cinemas Nationwide" },
                            { val: "10M+", lbl: "Happy Moviegoers" },
                            { val: "50+", lbl: "Cities Covered" },
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
