"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import './contact.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Atmospheric Glows */}
      <div className="ct-glow ct-glow-left"></div>
      <div className="ct-glow ct-glow-right"></div>

      {/* Header Overlay */}
      <Header />

      {/* Hero */}
      <section className="ct-hero">
        <div className="ct-hero-content">
          <span className="ct-category-tag">CONTACT US</span>
          <h1 className="ct-main-heading">
            LET&apos;S CREATE<br />
            <span className="ct-gold-text">CINEMA IMPACT.</span>
          </h1>
          <div className="ct-hero-divider"></div>
          <p className="ct-hero-tagline">
            Whether you&apos;re a brand, agency, or business looking to advertise with us or explore partnership opportunities, we&apos;d love to hear from you. Our team is here to help you connect with the right audiences, in the right way.
          </p>
        </div>

      </section>

      {/* Main Grid */}
      <section className="ct-grid-section">
        <div className="ct-layout-grid">
          {/* Info Column */}
          <div className="ct-info-column">
            <h2 className="ct-section-heading">GET <span className="ct-gold-text">IN TOUCH</span></h2>
            <div className="ct-info-cards-stack">
              {[
                {
                  sub: "SALES ENQUIRIES",
                  link: "sales@theconnplex.com",
                  type: "email",
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                },
                {
                  sub: "PARTNERSHIP & COLLABORATION",
                  link: "partnerships@theconnplex.com",
                  type: "email",
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                },
                {
                  sub: "FRANCHISE SUPPORT",
                  link: "franchise@theconnplex.com",
                  type: "email",
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="1"></rect><path d="M4 14h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6z"></path><line x1="12" y1="10" x2="12" y2="14"></line><circle cx="6" cy="18" r="1.5"></circle><circle cx="18" cy="18" r="1.5"></circle></svg>
                },
                {
                  sub: "HEAD OFFICE",
                  link: "Connplex Pvt. Ltd., 601, Venus Atlantis Corporate Park, 100 Feet Rd, Prahlad Nagar, Ahmedabad, Gujarat 380015",
                  type: "address",
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                },
                {
                  sub: "CALL US",
                  link: "+91 92278 67744",
                  type: "tel",
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                }
              ].map((item, i) => (
                <div className="ct-info-card" key={i}>
                  <div className="ct-card-icon-container">
                    {item.icon}
                  </div>
                  <div className="ct-card-text">
                    <span className="ct-card-subtitle">{item.sub}</span>
                    {item.type === 'email' ? <a href={`mailto:${item.link}`} className="ct-card-link">{item.link}</a> :
                      item.type === 'tel' ? <a href={`tel:${item.link.replace(/\s/g, '')}`} className="ct-card-link">{item.link}</a> :
                        <p className="ct-card-address" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', margin: 0, fontWeight: 300 }}>{item.link}</p>}
                  </div>
                </div>
              ))}
              <div className="ct-info-card ct-glow-card">
                <div className="ct-card-icon-container">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                </div>
                <div className="ct-card-text">
                  <span className="ct-card-subtitle" style={{ color: 'var(--ct-gold-hover)' }}>LOOKING FOR CINEMA LOCATIONS?</span>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Call us or drop a message, our team will get back to you shortly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="ct-form-column">
            <h2 className="ct-section-heading">SEND US <span className="ct-gold-text">A MESSAGE</span></h2>
            <div className="ct-form-panel">
              <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                <div className="ct-form-row">
                  <input type="text" className="ct-input" placeholder="FULL NAME" required />
                  <input type="text" className="ct-input" placeholder="COMPANY / BRAND" required />
                </div>
                <div className="ct-form-row">
                  <input type="email" className="ct-input" placeholder="EMAIL ADDRESS" required />
                  <input type="tel" className="ct-input" placeholder="PHONE NUMBER" required />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <select className="ct-input" required defaultValue="">
                    <option value="" disabled>Select Enquiry Type</option>
                    <option value="cinema-advertising">Cinema Advertising</option>
                    <option value="franchise-opportunities">Franchise Opportunities</option>
                    <option value="partnership-collaboration">Partnerships & Brand Collaborations</option>
                  </select>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <textarea className="ct-input" style={{ minHeight: '140px', resize: 'none' }} placeholder="Write your message here..." rows={5} required></textarea>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                  <button type="submit" className="ct-submit-btn">SEND MESSAGE →</button>
                  <p style={{ fontSize: '12.5px', color: 'var(--ct-text-secondary)' }}>We usually respond within 24 hours.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
