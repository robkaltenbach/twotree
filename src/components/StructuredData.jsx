import React from 'react';
import { projectsData } from '../data/projects';

const SITE_URL = 'https://www.twotree.dev';

// Keep these in sync with the social links in Footer.jsx — they tell search
// engines and AI assistants that these profiles all belong to the same person.
const PROFILES = [
    'https://www.linkedin.com/in/robkaltenbach',
    'https://contra.com/robkaltenbach',
    'https://github.com/robkaltenbach',
    'https://x.com/robkaltenbach',
    'https://www.instagram.com/robkaltenbach',
];

const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            '@id': `${SITE_URL}/#person`,
            name: 'Robert Kaltenbach',
            alternateName: 'Rob Kaltenbach',
            url: `${SITE_URL}/`,
            image: `${SITE_URL}/robheadshot-tp.webp`,
            jobTitle: 'Full-Stack Engineer',
            description:
                'Chicago-based full-stack engineer and former multi-location business owner with 10+ years building software. Builds AI-first products, web and mobile apps, and rescues stalled or broken codebases. Available for freelance and open to full-time roles.',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Chicago',
                addressRegion: 'IL',
                addressCountry: 'US',
            },
            worksFor: { '@id': `${SITE_URL}/#business` },
            knowsAbout: [
                'AI product development',
                'React',
                'React Native',
                'Expo',
                'Node.js',
                'Supabase',
                'OpenAI API',
                'Claude Code',
                'Cursor',
                'App repair and rescue',
                'Point-of-sale systems',
                'Loyalty programs',
                'UI/UX design',
            ],
            sameAs: PROFILES,
        },
        {
            '@type': 'ProfessionalService',
            '@id': `${SITE_URL}/#business`,
            name: 'Two Tree Creative',
            url: `${SITE_URL}/`,
            logo: `${SITE_URL}/twotree.png`,
            image: `${SITE_URL}/og-image.jpg`,
            email: 'hello@twotree.dev',
            founder: { '@id': `${SITE_URL}/#person` },
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Chicago',
                addressRegion: 'IL',
                addressCountry: 'US',
            },
            areaServed: 'Worldwide',
            knowsAbout: ['Web development', 'Mobile app development', 'App repair', 'AI consulting', 'UI/UX design'],
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: 'Robert Kaltenbach — Two Tree Creative',
            publisher: { '@id': `${SITE_URL}/#person` },
        },
        {
            '@type': 'ItemList',
            name: 'Selected work',
            itemListElement: projectsData.map((project, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'CreativeWork',
                    name: project.title,
                    description: project.description,
                    genre: project.category,
                    keywords: project.tags?.join(', '),
                    url: project.projectUrl,
                    creator: { '@id': `${SITE_URL}/#person` },
                },
            })),
        },
    ],
};

// `<` is escaped so no string in the data can close the script tag early.
const json = JSON.stringify(structuredData).replace(/</g, '\\u003c');

const StructuredData = () => (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
);

export default StructuredData;
