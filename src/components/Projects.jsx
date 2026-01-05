import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Button from './UI/Button';
import './Projects.css';

const projectsData = [
    {
        title: 'Lofi Holiday Player',
        category: 'App Development',
        description: 'A cozy, interactive holiday-themed music player designed to create the perfect relaxed ambiance.',
        tags: ['OpenAI', 'Suno AI', 'Cursor', 'React'],
        videoSrc: '/lofi-xozy.mp4',
        projectUrl: 'https://contra.com/community/cmjj0tuhw00003b6sjfbks9do?r=robkaltenbach'
    },
    {
        title: 'iris AI POS',
        category: 'AI / Mobile',
        description: 'A mobile-first AI point-of-sale system using real-time object detection and LLMs to automate inventory and tickets.',
        tags: ['Tempo', 'Supabase', 'Roboflow', 'Expo'],
        videoSrc: '/iris-pos.mp4',
        projectUrl: 'https://contra.com/community/cmj13zg4y0000356qk15l5zhh?r=robkaltenbach'
    },
    {
        title: 'Enchanted Storybook',
        category: 'AI / Creative',
        description: 'An AI-powered story creator where young readers shape tales through choices and their own drawings.',
        tags: ['Builder.io', 'OpenAI', 'Adobe Photoshop'],
        videoSrc: '/enchanted-storybook.mp4',
        projectUrl: 'https://contra.com/community/cmi98on280000356wqrr01398?r=robkaltenbach'
    },
    {
        title: 'Boomboxr',
        category: 'Mobile / Gaming',
        description: 'A head-to-head music trivia game featuring satisfying swipes, curated packs, and competitive progression.',
        tags: ['Anything', 'Expo', 'Photoshop'],
        videoSrc: '/boomboxr.mp4',
        projectUrl: 'https://contra.com/community/cmhur750t00002a6plzwwcc9b?r=robkaltenbach'
    },
    {
        title: 'Tempanion',
        category: 'Mobile / Desktop',
        description: 'An iOS and Windows companion app that streams real-time PC hardware stats to your phone, saving screen space.',
        tags: ['Cursor', 'Expo', 'Supabase'],
        videoSrc: '/tempanion2.webm',
        projectUrl: 'https://contra.com/community/cmhkxnnmi00012a6g819y1y76?r=robkaltenbach'
    },
    {
        title: 'Elara Loyalty',
        category: 'SaaS / Mobile',
        description: 'A data-first loyalty and rewards system designed by small businesses, for small businesses.',
        tags: ['Anything', 'Cursor', 'Supabase', 'Expo'],
        videoSrc: '/elara-loyalty.mp4',
        projectUrl: 'https://contra.com/community/cmhkxmc3400002a6gt3uk4du6?r=robkaltenbach'
    },
];

const Projects = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);

    return (
        <section id="projects" className="section projects-section" ref={ref}>
            <div className="container">
                <div className={`section-header fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                    <div className="flex justify-between items-end" style={{ gap: '2rem', flexWrap: 'wrap' }}>
                        <div>
                            <h2>Featured Work</h2>
                            <p>We take pride in every project we ship.</p>
                        </div>
                        <a href="https://contra.com/robkaltenbach/work?r=robkaltenbach" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <Button variant="primary">View All Projects</Button>
                        </a>
                    </div>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div
                            className={`project-card fade-in-section ${isVisible ? 'is-visible' : ''}`}
                            key={index}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                <div className="project-image">
                                    {project.videoSrc ? (
                                        <video
                                            className="project-video"
                                            src={project.videoSrc}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    ) : (
                                        <div className="project-placeholder" style={{ background: project.imageColor }}>
                                            <span style={{ color: 'white', fontSize: '1.2rem' }}>{project.title} Preview</span>
                                        </div>
                                    )}
                                    <div className="project-overlay">
                                        <Button variant="primary">View Case Study</Button>
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
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
