import React from 'react';
import { Star } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { testimonialsData } from '../data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
    const { ref, isVisible } = useScrollAnimation();

    if (testimonialsData.length === 0) return null;

    return (
        <section className="section testimonials-section" ref={ref} aria-labelledby="testimonials-heading">
            <div className="container">
                <h2 id="testimonials-heading" className="visually-hidden">What clients say</h2>
                <div className="testimonials-grid">
                    {testimonialsData.map((item) => (
                        <figure
                            className={`testimonial fade-in-section ${isVisible ? 'is-visible' : ''}`}
                            key={item.name}
                        >
                            <div className="testimonial-stars" aria-label="5 out of 5 stars">
                                {[0, 1, 2, 3, 4].map((i) => (
                                    <Star key={i} size={18} fill="currentColor" aria-hidden="true" />
                                ))}
                            </div>
                            <blockquote>
                                <p>“{item.quote}”</p>
                            </blockquote>
                            <figcaption>
                                <span className="testimonial-name">{item.name}</span>
                                {item.role && <span className="testimonial-role">{item.role}</span>}
                                {item.sourceUrl && (
                                    <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="testimonial-source">
                                        Review on {item.source}
                                    </a>
                                )}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
