import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Button from './UI/Button';
import LazyVideo from './UI/LazyVideo';
import { projectsData } from '../data/projects';
import './Projects.css';

const Projects = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="projects" className="section projects-section" ref={ref}>
            <div className="container">
                <div className={`section-header fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                    <div className="flex justify-between items-end" style={{ gap: '2rem', flexWrap: 'wrap' }}>
                        <div>
                            <h2>Selected work</h2>
                            <p>Representative shipped work across products and platforms — each card links to a full case study on Contra.</p>
                        </div>
                        <a
                            href="https://contra.com/robkaltenbach/work?r=robkaltenbach"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            More on Contra
                        </a>
                    </div>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project, index) => {
                        const isSoon = project.comingSoon;
                        const media = (
                            <>
                                <div className="project-image">
                                    {project.imageSrc ? (
                                        <img
                                            className="project-static-img"
                                            src={project.imageSrc}
                                            alt={project.imageAlt ?? ''}
                                            loading="lazy"
                                        />
                                    ) : project.videoSrc ? (
                                        <LazyVideo
                                            className="project-video"
                                            src={project.videoSrc}
                                            poster={project.posterSrc}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: project.videoObjectFit ?? 'cover',
                                                objectPosition: project.videoObjectPosition ?? 'center'
                                            }}
                                        />
                                    ) : project.placeholder ? (
                                        <div className="project-placeholder project-placeholder-pending">
                                            <span className="project-placeholder-label">Preview coming soon</span>
                                        </div>
                                    ) : (
                                        <div className="project-placeholder" style={{ background: project.imageColor }}>
                                            <span style={{ color: 'white', fontSize: '1.2rem' }}>{project.title} Preview</span>
                                        </div>
                                    )}
                                    <div className="project-overlay">
                                        <Button variant="primary" as="span">
                                            {isSoon ? 'Coming soon' : 'View Case Study'}
                                        </Button>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <div className="project-tags">
                                        {project.tags?.map(tag => (
                                            <span className="tag" key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </>
                        );

                        return (
                            <div
                                className={`project-card fade-in-section ${isVisible ? 'is-visible' : ''} ${isSoon ? 'project-card-soon' : ''}`}
                                key={project.title}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                {isSoon ? (
                                    <div className="project-card-inner" style={{ display: 'block' }}>
                                        {media}
                                    </div>
                                ) : (
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-card-inner"
                                        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                                    >
                                        {media}
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
