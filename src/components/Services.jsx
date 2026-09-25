import React from 'react';
import {
    Code2,
    Smartphone,
    Palette,
    Wrench,
    LifeBuoy,
    Bot
} from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Services.css';

const servicesData = [
    {
        title: 'Web Development',
        description: 'Fast, maintainable web apps with React and modern stacks — performance and clarity baked in.',
        icon: <Code2 size={28} />
    },
    {
        title: 'Mobile Apps',
        description: 'Cross-platform, native-feeling mobile delivery with Expo and a stack matched to the timeline.',
        icon: <Smartphone size={28} />
    },
    {
        title: 'UI / UX Design',
        description: 'Interfaces built around real users — simple flows, strong defaults, and design ready to ship.',
        icon: <Palette size={28} />
    },
    {
        title: 'App Repair',
        description: 'Stalled builds, production fires, and tangled legacy code — untangled so the product can move again.',
        icon: <Wrench size={28} />
    },
    {
        title: 'Maintenance',
        description: 'Ongoing support: releases, security, performance — whatever keeps what shipped healthy.',
        icon: <LifeBuoy size={28} />
    },
    {
        title: 'AI Consulting',
        description: 'Practical AI strategy for teams: where automation fits, what to ship first, and how to roll it out safely.',
        icon: <Bot size={28} />
    }
];

const Services = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="services" className="section services-section" ref={ref}>
            <div className="container">
                <div className={`section-header fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                    <h2>Capabilities</h2>
                    <p>Web, mobile, AI-assisted product work, and rescue missions — freelance when the fit is right. The same track record applies whether you're hiring for a project or a full-time or contract role.</p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            className={`service-card fade-in-section ${isVisible ? 'is-visible' : ''}`}
                            key={index}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Services;
