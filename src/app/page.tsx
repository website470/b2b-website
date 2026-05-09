"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const apps = [
  { name: "Connflix", bg: "#1a0000", icon: "▶", color: "#e53935" },
  { name: "Conntube", bg: "#0d0d0d", icon: "📺", color: "#aaa" },
  { name: "Connmusic", bg: "#0d0d0d", icon: "♪", color: "#fff" },
  { name: "Connevents", bg: "#111", icon: "🎭", color: "#ccc" },
  { name: "Connplay", bg: "#0d0d0d", icon: "▷", color: "#fff" },
  { name: "Connkids", bg: "#0a0a2a", icon: "👦", color: "#7eb8f7" },
  { name: "Connsports", bg: "#001a00", icon: "🎽", color: "#4caf50" },
  { name: "Connlive", bg: "#1a000a", icon: "⦿", color: "#e91e63" },
  { name: "Connnews", bg: "#0a0a0a", icon: "📰", color: "#90caf9" },
  { name: "Conngames", bg: "#0a001a", icon: "🎮", color: "#ce93d8" },
];

const movies = [
  {
    src: "/movie_poster_action_1778065539049.png",
    alt: "The Last Horizon",
    title: "THE LAST HORIZON",
    genre: "Action • Sci-Fi",
    rating: "8.9"
  },
  {
    src: "/movie_poster_scifi_1778065566530.png",
    alt: "Nebula Echoes",
    title: "NEBULA ECHOES",
    genre: "Sci-Fi • Adventure",
    rating: "9.2"
  },
  {
    src: "/movie_poster_fantasy_1778065585485.png",
    alt: "The Golden Kingdom",
    title: "THE GOLDEN KINGDOM",
    genre: "Fantasy • Epic",
    rating: "8.7"
  },
];

const slides = [
  {
    src: "/img/LUX.jpeg",
    alt: "Luxury Cinema Lounge",
    eyebrow: "PREMIUM LOUNGERS",
    title: "Luxury Cinema\nExperience",
    tags: "Recliners · Gourmet F&B · VIP Service",
    desc: "Plush leather recliners, curated menus and white-glove service.\nHost premieres, VIP screenings and private events in true luxury.",
  },
  {
    src: "/img/SIG.jpeg",
    alt: "Signature Screen",
    eyebrow: "SIGNATURE SCREENS",
    title: "Signature\nExperience",
    tags: "Immersive Audio · 4K Projection · Premium Seating",
    desc: "World-class projection and Dolby Atmos audio in a curated setting.\nThe perfect stage for brand premieres and exclusive screenings.",
  },
  {
    src: "/img/SMART.jpeg",
    alt: "Smart Cinema",
    eyebrow: "SMART CINEMAS",
    title: "Smart Cinema\nNetworks",
    tags: "Digital Ads · Real-time Analytics · Targeted Reach",
    desc: "Leverage programmatic advertising across our smart screen network.\nTrack impressions, dwell time and conversions in real time.",
  },
];

const cases = [
  {
    tag: "EXPERIENTIAL",
    src: "/case_experiential.png",
    title: "Brand Activations",
    desc: "Bringing brands to life in premium cinema lobbies."
  },
  {
    tag: "CONFERENCE",
    src: "/case_conference.png",
    title: "Corporate Events",
    desc: "Professional conferences in a cinematic setting."
  },
  {
    tag: "ON-SCREEN MEDIA",
    src: "/case_onscreen.png",
    title: "On-Screen Media",
    desc: "Captivating audiences with high-impact visuals."
  }
];

const Counter = ({ target, isVisible, suffix = "", decimals = 0 }: { target: number, isVisible: boolean, suffix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }
    let start = 0;
    const end = target;
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = end * progress;

      if (frame === totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(currentCount);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <span>{count.toFixed(decimals)}{suffix}</span>;
};

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [currentCase, setCurrentCase] = useState(0);
  const [caseAnimating, setCaseAnimating] = useState(false);
  const [isWhyVisible, setIsWhyVisible] = useState(false);
  const whyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWhyVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (whyRef.current) observer.observe(whyRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  // Auto-advance case studies
  useEffect(() => {
    const timer = setInterval(() => {
      goToCase((currentCase + 1) % cases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentCase]);

  function goTo(idx: number) {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  }

  function goToCase(idx: number) {
    if (caseAnimating || idx === currentCase) return;
    setCaseAnimating(true);
    setTimeout(() => {
      setCurrentCase(idx);
      setCaseAnimating(false);
    }, 500);
  }

  const slide = slides[current];

  return (
    <>
      <header className="header">
        <div className="logo-box">
          <Image src="/logo.png" alt="Connplex Cinemas" width={180} height={60} style={{ objectFit: "contain" }} />
        </div>
        <nav className="nav-links">
          <a href="#" className="nav-link">Solutions</a>
          <a href="#" className="nav-link">Why Connplex</a>
          <a href="#" className="nav-link">Case Studies</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
        <button className="btn-primary">Partner With Us</button>
      </header>

      {/* ── HERO ── */}
      <main className="hero">
        <div className="hero-bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source src="/video/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="hero-bg-overlay"></div>
        </div>

        <h1 className="hero-title">
          Cinema Spaces<br />
          <span className="text-gold">for Brands.</span>
        </h1>

        <p className="hero-subtitle">Launch. Engage. Convert on the Big Screen.</p>

        <div className="hero-actions">
          <button className="btn-secondary">
            Partner With Us <span>&rarr;</span>
          </button>
          <button className="btn-outline">Explore Venues</button>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <h3 className="feature-title">High Footfall</h3>
            <p className="feature-desc">Daily premium audience</p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">Premium Screens</h3>
            <p className="feature-desc">200+ across India</p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">Measurable Impact</h3>
            <p className="feature-desc">Verified engagement</p>
          </div>
        </div>
      </main>

      {/* ── SECTION 1: THE CONNPLEX SUITE ── */}
      <section className="suite-section">
        <div className="suite-header">
          <div className="suite-left">
            <p className="suite-eyebrow">THE CONNPLEX SUITE</p>
            <h2 className="suite-title">
              15&nbsp;apps. <span>One ecosystem.</span>
            </h2>
          </div>
          <button className="suite-scroll-btn">Scroll →</button>
        </div>

        <div className="apps-scroll-wrapper">
          <div className="apps-track">
            {apps.map((app) => (
              <div className="app-card" key={app.name}>
                <div className="app-icon-circle" style={{ background: app.bg }}>
                  <span style={{ fontSize: "2.5rem" }}>{app.icon}</span>
                </div>
                <p className="app-name">{app.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PREMIUM LOUNGERS SLIDESHOW ── */}


      <section className="lounger-section">

        {/* Slide images stacked, crossfade */}
        {slides.map((s, i) => (
          <div
            key={s.src}
            className="lounger-bg"
            style={{ opacity: i === current ? 1 : 0, transition: "opacity 0.7s ease" }}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              style={{ objectFit: "cover" }}
              priority={i === 0}
            />
            <div className="lounger-overlay"></div>
          </div>
        ))}

        <div
          className="lounger-content"
          style={{ opacity: animating ? 0 : 1, transition: "opacity 0.4s ease" }}
        >
          <p className="lounger-eyebrow">{slide.eyebrow}</p>
          <h2 className="lounger-title">
            {slide.title.split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h2>
          <p className="lounger-tags">{slide.tags}</p>
          <p className="lounger-desc">
            {slide.desc.split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>
        </div>

        <div className="lounger-nav">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`lounger-dot${i === current ? " lounger-dot-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            >
              <span className="lounger-dot-line"></span>
              <span className="lounger-dot-num">{i + 1}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="products-section">
        <div className="products-header">
          <p className="products-eyebrow">OUR PRODUCTS</p>
          <h2 className="products-title">
            A platform built <span>for</span><br />
            <span className="products-title-muted">every screen.</span>
          </h2>
        </div>

        <div className="products-grid">
          <div className="product-card product-card-dark">
            <p className="product-name">Connflix</p>
            <p className="product-tagline">Stream cinema-grade originals.</p>
            <div className="product-actions">
              <Link href="/connflix">
                <button className="product-btn-circle">Explore</button>
              </Link>
            </div>
            <div className="product-image-wrap">
              <Image src="/echoes_of_the_abyss.png" alt="Connflix app" fill style={{ objectFit: "cover", objectPosition: "top" }} />
            </div>
          </div>

          <div className="product-card product-card-light">
            <p className="product-name product-name-dark">Conntube</p>
            <p className="product-tagline product-tagline-dark">Your channel. Your audience.</p>
            <div className="product-actions">
              <span className="product-learn">Learn more</span>
              <Link href="/conntube">
                <button className="product-btn-circle product-btn-circle-dark">Explore</button>
              </Link>
            </div>
            <div className="product-image-wrap">
              <Image src="/conntube_mockup_new.png" alt="Conntube app" fill style={{ objectFit: "cover", objectPosition: "top" }} />
            </div>
          </div>

          <div className="product-card product-card-light">
            <p className="product-name product-name-dark">Connmusic</p>
            <p className="product-tagline product-tagline-dark">Sound that moves you.</p>
            <div className="product-actions">
              <span className="product-learn">Learn more</span>
              <Link href="/connmusic">
                <button className="product-btn-circle product-btn-circle-dark">Explore</button>
              </Link>
            </div>
            <div className="product-image-wrap">
              <Image src="/connmusic_mockup.png" alt="Connmusic app" fill style={{ objectFit: "cover", objectPosition: "top" }} />
            </div>
          </div>

          <div className="product-card product-card-dark">
            <p className="product-name">Connevents</p>
            <p className="product-tagline">Live events, ticketed in seconds.</p>
            <div className="product-actions">
              <Link href="/connevents">
                <button className="product-btn-circle">Explore</button>
              </Link>
            </div>
            <div className="product-image-wrap">
              <Image src="/connevents_new_mockup.png" alt="Connevents app" fill style={{ objectFit: "cover", objectPosition: "top" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="why-section" ref={whyRef}>

        <div className="why-image-wrapper">
          <div className="why-bg-layer">
            <Image
              src="/assets/cinema_bg.png"
              alt="Luxury Cinema Background"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className={`why-popcorn-layer ${isWhyVisible ? "animate-up" : ""}`}>
            <Image
              src="/assets/popcorn.png"
              alt="Popcorn Bucket"
              width={600}
              height={600}
              className="why-popcorn-bucket"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="why-image-overlay">
            <div className="why-image-content">
              <div className="why-logo-wrap">
                <Image src="/logo.png" alt="Connplex Cinemas" width={300} height={100} style={{ objectFit: "contain" }} />
              </div>
              <h3 className="why-image-text">Where cinema becomes an experience.</h3>
              <div className="why-image-btns">
                <button className="why-btn why-btn-gold">Learn more</button>
                <button className="why-btn why-btn-outline">Buy now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="why-stats">
          <div className="why-stat">
            <span className="why-stat-num">
              <Counter target={50} isVisible={isWhyVisible} suffix="M+" />
            </span>
            <span className="why-stat-label">Annual Footfall</span>
          </div>
          <div className="why-stat">
            <span className="why-stat-num">
              <Counter target={200} isVisible={isWhyVisible} suffix="+" />
            </span>
            <span className="why-stat-label">Premium Screens</span>
          </div>
          <div className="why-stat">
            <span className="why-stat-num">Tier 1 &amp; 2</span>
            <span className="why-stat-label">Cities Covered</span>
          </div>
          <div className="why-stat">
            <span className="why-stat-num">
              <Counter target={2.5} isVisible={isWhyVisible} suffix=" hrs" decimals={1} />
            </span>
            <span className="why-stat-label">Avg. Engagement</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CASE STUDIES ── */}
      <section className="cases-section">
        <div className="cases-header">
          <div>
            <p className="cases-eyebrow">CASE STUDIES</p>
            <h2 className="cases-title">
              Work that moved <span>audiences.</span>
            </h2>
          </div>
          <div className="cases-nav">
            <button
              className="cases-nav-btn"
              onClick={() => goToCase((currentCase - 1 + cases.length) % cases.length)}
            >←</button>
            <button
              className="cases-nav-btn"
              onClick={() => goToCase((currentCase + 1) % cases.length)}
            >→</button>
          </div>
        </div>

        <div className="cases-slider">
          <div className={`cases-track ${caseAnimating ? "fade-out" : ""}`}>
            <div className="case-slide">
              <span className="case-tag">{cases[currentCase].tag}</span>
              <div className="case-image-wrap">
                <Image
                  src={cases[currentCase].src}
                  alt={cases[currentCase].title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="case-info-overlay">
                <h3 className="case-info-title">{cases[currentCase].title}</h3>
                <p className="case-info-desc">{cases[currentCase].desc}</p>
              </div>
            </div>
          </div>

          <div className="cases-indicators">
            {cases.map((_, i) => (
              <div
                key={i}
                className={`case-dot ${i === currentCase ? "active" : ""}`}
                onClick={() => goToCase(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="movies-section">
        <div className="movies-header">
          <h2 className="movies-title">
            <span className="movies-title-strong">Latest Releases</span>{" "}
            <span className="movies-title-muted">now screening.</span>
          </h2>
          <button className="movies-view-all">View All Movies →</button>
        </div>

        <div className="movies-grid" role="list">
          {movies.map((m) => (
            <div className="movie-card" key={m.title} role="listitem">
              <Image
                src={m.src}
                alt={m.alt}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="movie-card-overlay">
                <div className="movie-info">
                  <div className="movie-rating">
                    <span className="star">★</span> {m.rating}
                  </div>
                  <h3 className="movie-card-title">{m.title}</h3>
                  <p className="movie-card-genre">{m.genre}</p>
                  <button className="movie-book-btn">Book Tickets</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="partner-section">
        <div className="partner-content">
          <p className="partner-eyebrow">LET&apos;S PARTNER</p>
          <h2 className="partner-title">
            Let&apos;s build <span className="text-gold">high-impact</span><br />
            brand experiences.
          </h2>
          <p className="partner-subtitle">
            Tell us about your brand, your audience, and what you want them<br />
            to feel.
          </p>
          <div className="partner-action">
            <button className="btn-get-touch">Get in Touch</button>
          </div>
          <p className="partner-footer">
            partners@connplex.com &bull; Response within 24 hours
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <div className="logo-box logo-footer">
              <Image src="/logo.png" alt="Connplex Cinemas" width={150} height={50} style={{ objectFit: "contain" }} />
            </div>
            <p className="footer-desc">
              A premium cinema network for advertising, experiential marketing, and brand events.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">SOLUTIONS</h4>
            <ul className="footer-list">
              <li><a href="#">Brand Launches</a></li>
              <li><a href="#">Corporate Events</a></li>
              <li><a href="#">Private Screenings</a></li>
              <li><a href="#">On-Screen Advertising</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">VENUES</h4>
            <ul className="footer-list">
              <li><a href="#">Mumbai</a></li>
              <li><a href="#">Delhi NCR</a></li>
              <li><a href="#">Bengaluru</a></li>
              <li><a href="#">Tier 2 Network</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">INSIGHTS</h4>
            <ul className="footer-list">
              <li><a href="#">Audience Research</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Industry Reports</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">CONTACT</h4>
            <ul className="footer-list">
              <li><a href="#">Partner With Us</a></li>
              <li><a href="#">Media Enquiries</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="mailto:partners@connplex.com">partners@connplex.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Connplex Cinemas. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
