'use client';

import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="global-footer-grid">
                <div className="footer-col footer-brand">
                    <div className="logo-box logo-footer">
                        <Image src="/logo.png" alt="Connplex Cinemas" width={150} height={50} style={{ objectFit: "contain" }} />
                    </div>
                    <p className="footer-desc">
                        A premium cinema network for advertising, experiential marketing, and brand events.
                    </p>
                </div>

                <div className="footer-col">

                    <ul className="footer-list">
                        <li><a href="#">Inverstors Section</a></li>
                        <li><a href="#">Apply For Franchise</a></li>
                        <li><a href="#">Franchisee Section</a></li>
                        <li><a href="#">CAPEX for Developer</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <ul className="footer-list">
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">News & Upcoming Promotions</a></li>
                        <li><a href="#">20 Minutes Franchise</a></li>
                        <li><a href="#">Gallery</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <ul className="footer-list">
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Advertise With Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <ul className="footer-list">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Legal Notice</a></li>
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