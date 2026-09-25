import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Button from './UI/Button';
import './Projects.css';

const projectsData = [
    {
        title: 'Memory Loop',
        category: 'AI/Mobile',
        description: 'Turn daily learnings into long term memory by using the proven spaced-repetition approach.',
        tags: ['Cursor', 'Claude Code', 'OpenAI'],
        videoSrc: '/memory-loop.mp4',
        videoObjectFit: 'contain',
        projectUrl: 'https://contra.com/community/gLw2WMCp-boost-your-memory-retention-with-memory?r=robkaltenbach',
    },
    {
        title: 'Inbox Pilot',
        category: 'Web/Automation',
        description: 'AI-assisted Gmail triage: sort mail into lanes, draft replies, and optionally handle the same flow from Slack.',
        tags: ['Cursor', 'OpenAI', 'Slack'],
        videoSrc: '/inbox-pilot-demo.mp4',
        projectUrl: 'https://contra.com/community/Ssv9XlZs-streamline-team-emails-with-inbox-pilot?r=robkaltenbach',
    },
    {
        title: 'Quail - Social Media Template',
        category: 'Templates',
        description: 'A beautiful, mobile-first social media template built with Anything. Ready to customize and deploy.',
        tags: ['Anything', 'Canva'],
        imageSrc: '/quail-social-preview.png',
        imageAlt: 'Quail social template on three phone mockups',
        projectUrl: 'https://contra.com/community/Bd7qyYUE-remixable-social-network-template-fully?r=robkaltenbach',
    },
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
                                        />
                                    ) : project.videoSrc ? (
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
                                        <Button variant="primary">
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
