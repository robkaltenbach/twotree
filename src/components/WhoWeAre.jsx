import React, { useRef, useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './WhoWeAre.css';

const WhoWeAre = () => {
    const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);
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
                        <h2>Built by Experience.</h2>
                        <p>
                            Two Tree Creative is a senior-led development studio focused on <strong>building, repairing, and shipping modern applications.</strong>
                        </p>
                        <p>
                            The studio is run by <strong>Robert Kaltenbach</strong>, a developer, designer, and operator with over a decade of experience building software and running real businesses. Before Two Tree, Robert owned and operated multi-location companies and built the systems behind them — from point-of-sale and loyalty platforms to internal tools and customer-facing apps. That background shapes the work here: software has to function in the real world, not just look good in theory.
                        </p>
                        <p>
                            Today, Two Tree helps founders and teams build web and mobile apps, repair unstable or unfinished products, and make clear decisions inside existing codebases about what to fix, rebuild, or remove. The studio is intentionally small and hands-on — no junior layers, no bloated process, <strong>just practical engineering and software that ships and stays shipped.</strong>
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
                                <img src="/robheadshot-tp.png" alt="Robert Kaltenbach" className="rob-headshot-interactive" />
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
