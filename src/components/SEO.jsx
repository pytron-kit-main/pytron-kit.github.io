import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, image }) => {
    const { pathname } = useLocation();
    const domain = 'https://pytron-kit.github.io';
    // Ensure trailing slash for directory-like structure consistency
    const cleanPath = pathname === '/' ? '' : pathname.endsWith('/') ? pathname : `${pathname}/`;
    const canonical = `${domain}${cleanPath}`;
    const defaultTitle = 'Pytron-kit : Modern Python Desktop Apps';
    const defaultDescription = 'Build cross-platform desktop applications with Python and web technologies. Pytron is lightweight, fast, and frontend framework agnostic.';
    const defaultKeywords = 'python, desktop app, electron alternative, gui, webview, react, vue, pytron';
    const defaultImage = `${domain}/pytron-banner.png`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title ? `${title} | Pytron` : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonical} />
            <meta property="twitter:title" content={title || defaultTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;
