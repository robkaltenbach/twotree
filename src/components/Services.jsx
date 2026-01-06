import React from 'react';
import {
    Code2,
    Smartphone,
    Palette,
    Wrench,
    LifeBuoy,
    Key
} from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Services.css';

const servicesData = [
    {
        title: 'Web Development',
        description: 'Custom websites built with modern frameworks like React and Next.js, optimized for performance and SEO.',
        icon: <Code2 size={28} />
    },
    {
        title: 'Mobile Apps',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
        icon: <Smartphone size={28} />
    },
    {
        title: 'UI / UX Design',
        description: 'User-centered design focused on clarity, usability, and real-world use.',
        icon: <Palette size={28} />
    },
    {
        title: 'App Repair',
        description: 'Rescuing stalled projects, fixing critical bugs, and modernizing legacy codebases to get products back on track.',
        icon: <Wrench size={28} />
    },
    {
        title: 'Maintenance',
        description: 'Ongoing support, security updates, and performance optimization.',
        icon: <LifeBuoy size={28} />
    },
    {
        title: 'Full Ownership',
        description: 'You own everything. All repositories, credentials, and assets are handed over at launch.',
        icon: <Key size={28} />
    }
];

const Services = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);

    return (
        <section id="services" className="section services-section" ref={ref}>
            <div className="container">
                <div className={`section-header fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                    <h2>Our Expertise</h2>
                    <p>Web, Mobile, and App Repair Services</p>
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
