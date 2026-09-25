import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, MousePointer2, Code2, Rocket, Star, ArrowRight } from 'lucide-react';
import Button from './UI/Button';
import './Hero.css';

const processSteps = [
    {
        icon: <Lightbulb size={32} />,
        step: 'Step 1',
        title: 'Discover',
        description: 'Goals, constraints, and what “done” looks like — for users and for the business — get clear first.'
    },
    {
        icon: <MousePointer2 size={32} />,
        step: 'Step 2',
        title: 'Design',
        description: 'Flows and visuals are shaped to be straightforward to build and solid to use in the real world.'
    },
    {
        icon: <Code2 size={32} />,
        step: 'Step 3',
        title: 'Develop',
        description: 'Shipping means maintainable code and modern tooling — AI where it earns its place, humans where judgment matters.'
    },
    {
        icon: <Rocket size={32} />,
        step: 'Step 4',
        title: 'Launch',
        description: 'Launch includes testing and handoff you can rely on, with support available for what comes next.'
    }
];

const Hero = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef(null);

    // Tilt State
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

    useEffect(() => {
        // Deferred a frame so the prerendered markup hydrates before the fade-in starts.
        const frame = requestAnimationFrame(() => setIsLoaded(true));
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % processSteps.length);
        }, 4000);

        return () => {
            cancelAnimationFrame(frame);
            clearInterval(interval);
        };
    }, []);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotate({ x: rotateX, y: rotateY });
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

    const getCardClass = (index) => {
        if (index === activeStep) return 'active';
        if (index === (activeStep - 1 + processSteps.length) % processSteps.length) return 'prev';
        if (index === (activeStep + 1) % processSteps.length) return 'next';
        return 'hidden';
    };

    return (
        <section className="hero">
            <div className="container hero-content">
                <div className={`hero-text fade-in-section ${isLoaded ? 'is-visible' : ''}`}>
                    <p className="hero-eyebrow">Robert Kaltenbach · Full-stack engineer · Chicago</p>
                    <h1>Redesigning how work gets done using AI</h1>
                    <p>
                        From internal tools to customer-facing systems, the focus is AI-first solutions that reduce manual work and improve consistency.
                        <br />
                        <strong>Available for freelance</strong> and <strong>open to work</strong>
                    </p>

                    <div className="hero-cta-group">
                        <Button variant="primary" href="#contact">Get in touch</Button>
                        <Button variant="outline" href="#projects">See selected work</Button>
                    </div>

                    <a
                        href="https://contra.com/robkaltenbach?r=robkaltenbach"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-stats-container"
                    >
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-item-inner">
                                    <span className="stat-value">Top 1%</span>
                                    <p>Creator</p>
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-item-inner">
                                    <span className="stat-value flex items-center gap-xs">
                                        5.0 <Star size={24} fill="currentColor" className="text-primary" />
                                    </span>
                                    <p>Satisfaction</p>
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-item-inner">
                                    <span className="stat-value">10+</span>
                                    <p>Years Experience</p>
                                </div>
                            </div>
                            <div className="stat-item expert-stat">
                                <div className="stat-item-inner">
                                    <div className="expert-badge-minimal">
                                        <img src="/anything-logo.png" alt="Anything" className="expert-logo-small" />
                                        <div className="expert-text">
                                            <span className="stat-value">Anything</span>
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="stat-arrow">
                                <ArrowRight size={32} />
                            </div>
                        </div>
                    </a>
                </div>

                <div className={`hero-visual fade-in-section stagger-1 ${isLoaded ? 'is-visible' : ''}`}>
                    <div
                        className="process-card-container"
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        {processSteps.map((step, index) => {
                            const isSlotActive = index === activeStep;
                            return (
                                <div
                                    key={index}
                                    className={`process-card ${getCardClass(index)}`}
                                    style={isSlotActive ? {
                                        transform: `translate3d(0, -50%, 0) rotateX(${rotate.x - 3}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`
                                    } : {}}
                                >
                                    <div className="card-glass-layer" />
                                    <div className="process-icon-wrapper">
                                        <div className="process-icon">{step.icon}</div>
                                    </div>
                                    <div className="process-step-label">{step.step}</div>
                                    <span className="process-card-title">{step.title}</span>
                                    <p>{step.description}</p>

                                    {/* Glare effect */}
                                    {isSlotActive && (
                                        <div
                                            className="card-glare"
                                            style={{
                                                background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.2) 0%, transparent 60%)`,
                                                opacity: glare.opacity
                                            }}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Hero;
