'use client';

import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
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
    );
};

export default Footer;
