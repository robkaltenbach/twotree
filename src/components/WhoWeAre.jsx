import React, { useRef, useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './WhoWeAre.css';

const WhoWeAre = () => {
    const { ref: sectionRef, isVisible } = useScrollAnimation();
    const cardRef = useRef(null);

    // Tilt State
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Increased rotation limits for "Go Nuts" effect
        const rotateX = ((y - centerY) / centerY) * -15; // Invert axis for natural tilt
        const rotateY = ((x - centerX) / centerX) * 15;

        setRotate({ x: rotateX, y: rotateY });

        // Glare position
        setGlare({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100,
            opacity: 1
        });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
        setGlare(prev => ({ ...prev, opacity: 0 }));
    };

    return (
        <section ref={sectionRef} className="section who-we-are-section">
            <div className="container">
                <div className="bio-content">
                    <div className={`bio-text ${isVisible ? 'animate' : ''}`}>
                        <h2>About</h2>
                        <p>
                            Work by <strong>Robert Kaltenbach</strong> under <strong>Two Tree Creative</strong> — shipped projects, how problems get framed, and what collaboration looks like on real builds. Open to <strong>freelance</strong>, <strong>full-time</strong>, and <strong>contract</strong> conversations when the fit is right; client engagements run through Two Tree.
                        </p>
                        <p>
                            Robert is a developer, designer, and operator with <strong>10+ years</strong> building software and running businesses. He owned multi-location companies and built the systems behind them — POS, loyalty, internal tools, and customer-facing apps. That background shows up as an insistence that software survive contact with reality, not just demo well.
                        </p>
                        <p>
                            Engagements focus on <strong>AI-first products, web and mobile apps, and rescue work</strong> on codebases that need a steady hand. The practice stays small and senior-led — no junior bench, no theater. <strong>Freelance availability</strong> opens when there's a clear problem and room to execute; <strong>employer and recruiter outreach</strong> is welcome for the right role. Use the contact form below either way.
                        </p>
                    </div>

                    <div className={`bio-image-wrapper ${isVisible ? 'animate' : ''}`}>
                        <div
                            className="tilt-card-container"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`
                            }}
                            ref={cardRef}
                        >
                            <div className="tilt-card-inner">
                                <img src="/robheadshot-tp.webp" alt="Robert Kaltenbach" className="rob-headshot-interactive" />
                                {/* Glare and accents */}
                                <div
                                    className="card-glare"
                                    style={{
                                        background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                                        opacity: glare.opacity
                                    }}
                                />
                                <div className="card-accent top-left" />
                                <div className="card-accent bottom-right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
