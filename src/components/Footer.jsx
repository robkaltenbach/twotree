import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Button from './UI/Button';
import './Footer.css';

const Footer = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);

    return (
        <footer id="contact" className="footer" ref={ref}>
            <div className="container">
                <div className={`footer-content fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                    <div className="footer-cta">
                        <h2>Ready to start your next project?</h2>
                        <p>
                            Let's turn your ideas into reality. Reach out to discuss your vision and how we can help.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.85rem', color: '#6B7280', marginBottom: '0.25rem' }}>EMAIL</span>
                                <a href="mailto:hello@twotree.dev" style={{ fontSize: '1.25rem', color: 'white' }}>hello@twotree.dev</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-input" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-input" placeholder="john@company.com" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-input" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <Button variant="primary" style={{ width: '100%' }}>Send Message</Button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Two Tree Creative. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#" className="social-link">Twitter</a>
                        <a href="#" className="social-link">LinkedIn</a>
                        <a href="#" className="social-link">GitHub</a>
                        <a href="#" className="social-link">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
