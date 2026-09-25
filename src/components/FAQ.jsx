import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { faqData } from '../data/faq';
import './FAQ.css';

const FAQ = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="faq" className="section faq-section" ref={ref}>
            <div className="container">
                <div className={`section-header fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                    <h2>Questions</h2>
                    <p>The short answers to what people usually ask first.</p>
                </div>

                {/* Native <details> so answers stay in the HTML and work without JavaScript */}
                <div className={`faq-list fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                    {faqData.map((item) => (
                        <details className="faq-item" key={item.question}>
                            <summary>
                                <h3>{item.question}</h3>
                                <span className="faq-icon" aria-hidden="true" />
                            </summary>
                            <p>{item.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
