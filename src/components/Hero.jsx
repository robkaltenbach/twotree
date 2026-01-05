import React, { useState, useEffect } from 'react';
import { Lightbulb, MousePointer2, Code2, Rocket, Star } from 'lucide-react';
import Button from './UI/Button';
import './Hero.css';

const processSteps = [
    {
        icon: <Lightbulb size={32} />,
        step: 'Step 1',
        title: 'Discover',
        description: 'We dive deep to understand your goals, audience, and unique technical requirements.'
    },
    {
        icon: <MousePointer2 size={32} />,
        step: 'Step 2',
        title: 'Design',
        description: 'Crafting intuitive prototypes and high-fidelity visuals that perfectly align with your brand.'
    },
    {
        icon: <Code2 size={32} />,
        step: 'Step 3',
        title: 'Develop',
        description: 'Writing clean, scalable code using the latest technologies and industry best practices.'
    },
    {
        icon: <Rocket size={32} />,
        step: 'Step 4',
        title: 'Launch',
        description: 'Deploying your product with thorough testing and comprehensive ongoing support strategies.'
    }
];

const Hero = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % processSteps.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

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
                    <h1>Building Digital Products That Matter.</h1>
                    <p>
                        Expert web and app development services tailored for growing businesses.
                        We turn complex problems into elegant solutions.
                    </p>

                    <div className="flex gap-sm">
                        <a href="#contact" style={{ textDecoration: 'none' }}>
                            <Button variant="primary">Start a Project</Button>
                        </a>
                        <a href="#projects" style={{ textDecoration: 'none' }}>
                            <Button variant="outline">View Our Work</Button>
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <h3>Top 5%</h3>
                            <p>Creator</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="flex items-center gap-xs">
                                5.0 <Star size={24} fill="currentColor" className="text-primary" />
                            </h3>
                            <p>Satisfaction</p>
                        </div>
                        <div className="stat-item">
                            <h3>10+</h3>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>

                <div className={`hero-visual fade-in-section stagger-1 ${isLoaded ? 'is-visible' : ''}`}>
                    <div className="process-card-container">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`process-card ${getCardClass(index)}`}
                            >
                                <div className="process-icon-wrapper">
                                    <div className="process-icon">{step.icon}</div>
                                </div>
                                <div className="process-step-label">{step.step}</div>
                                <h4>{step.title}</h4>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
