import React, { useState } from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Button from './UI/Button';
import './Footer.css';

const Footer = () => {
    const { ref: sectionRef, isVisible } = useScrollAnimation();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isSpotlightVisible, setIsSpotlightVisible] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        budget: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleMouseMove = (e) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleMouseEnter = () => {
        setIsSpotlightVisible(true);
    };

    const handleMouseLeave = () => {
        setIsSpotlightVisible(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', budget: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus('error');
            setErrorMessage('Network error. Please check your connection.');
        }
    };

    return (
        <footer
            id="contact"
            className="footer"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`spotlight-overlay ${isSpotlightVisible ? 'active' : ''}`}
                style={{
                    background: `radial-gradient(circle 450px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.3) 0%, rgba(124, 58, 237, 0.15) 30%, transparent 80%)`
                }}
            />
            <div className="container">
                <div className={`footer-content fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                    <div className="footer-cta">
                        <h2>Connect</h2>
                        <p>
                            Freelance inquiries, full-time opportunities, or anything in between — share what you're building, what's broken, what needs to ship, or the role you're hiring for. Messages get read directly; replies follow when there's a fit.
                        </p>

                        <div className="footer-contact-info">
                            <div>
                                <span className="label-tiny">EMAIL</span>
                                <a href="mailto:hello@twotree.dev" className="email-link">hello@twotree.dev</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <div className="contact-form">
                            {status === 'success' ? (
                                <div className="success-message">
                                    <div className="success-icon">🚀</div>
                                    <h3>Message Sent!</h3>
                                    <p>Thanks for reaching out. A reply will follow soon.</p>
                                    <Button variant="secondary" onClick={() => setStatus('idle')}>Send Another</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="contact-name">Name</label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            autoComplete="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-email">Email</label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            autoComplete="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            placeholder="john@company.com"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-budget">Project Budget <span className="optional-tag">(Optional)</span></label>
                                        <input
                                            type="text"
                                            id="contact-budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            placeholder="e.g. $5k - $10k"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-message">Message</label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            placeholder="Project, role, or opportunity — a few lines is enough"
                                            required
                                        ></textarea>
                                    </div>
                                    {status === 'error' && <p className="error-message-text">{errorMessage}</p>}
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        disabled={status === 'loading'}
                                        style={{ width: '100%' }}
                                    >
                                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p className="footer-availability">Available for freelance · Open to work</p>
                        <div className="footer-copyright-row">
                        <p>&copy; {new Date().getFullYear()} Robert Kaltenbach · Two Tree Creative</p>
                        <span className="chicago-flag" title="Made with ❤️ in Chicago">
                            <svg viewBox="0 0 300 200" width="24" height="16">
                                <rect width="300" height="200" fill="white" />
                                <rect width="300" height="33.3" y="33.3" fill="#41B6E6" />
                                <rect width="300" height="33.3" y="133.3" fill="#41B6E6" />
                                <g fill="#FF0000">
                                    <path d="M60 100l6 14 14-6-6-14 6-14-14 6z M60 100l-6-14-14 6 6 14-6 14 14-6z" transform="translate(0,0)" />
                                    <path d="M120 100l6 14 14-6-6-14 6-14-14 6z M120 100l-6-14-14 6 6 14-6 14 14-6z" transform="translate(0,0)" />
                                    <path d="M180 100l6 14 14-6-6-14 6-14-14 6z M180 100l-6-14-14 6 6 14-6 14 14-6z" transform="translate(0,0)" />
                                    <path d="M240 100l6 14 14-6-6-14 6-14-14 6z M240 100l-6-14-14 6 6 14-6 14 14-6z" transform="translate(0,0)" />
                                </g>
                            </svg>
                        </span>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="https://x.com/robkaltenbach" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="X (Twitter)">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/robkaltenbach" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/robkaltenbach" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="https://instagram.com/robkaltenbach" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="https://contra.com/robkaltenbach" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Contra">
                            <img src="/contra-logo.png" alt="Contra" className="social-logo-img" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
