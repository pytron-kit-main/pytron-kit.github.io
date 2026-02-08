import { motion } from 'framer-motion';
import { Search, Command, Zap, Download, Terminal, Layers, Github, Cpu, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import Callout from '../components/Callout';

export default function BitePage() {
    const [release, setRelease] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/repos/Ghua8088/py-cast/releases/latest')
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                if (data && data.assets && data.assets.length > 0) {
                    const asset = data.assets.find(a => a.name.endsWith('.exe')) || data.assets[0];
                    setRelease({ url: asset.browser_download_url, version: data.tag_name });
                }
            })
            .catch(() => { });
    }, []);

    return (
        <div className="main-content">
            <SEO
                title="Bite Showcase | Pytron-kit"
                description="Bite is an extensible launcher for developers built with Pytron-kit. Search files, run scripts, and control your system."
            />

            {/* Hero Section */}
            <section className="hero-section" style={{ minHeight: 'auto', padding: '6rem 2rem' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <div style={{
                            background: 'rgba(6, 182, 212, 0.1)',
                            border: '1px solid rgba(6, 182, 212, 0.2)',
                            padding: '0.4rem 1rem',
                            borderRadius: '2rem',
                            fontSize: '0.8rem',
                            color: 'var(--primary-color)',
                            marginBottom: '2rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em'
                        }}>
                            CASE STUDY: PRODUCTIVITY
                        </div>

                        <h1 className="font-lobster" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                            Bite Launcher
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            maxWidth: '700px',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem',
                            lineHeight: 1.6
                        }}>
                            An intelligent, extensible launcher for developers. <br />
                            Search files, execute scripts, and manage your system from a single bar.
                        </p>

                        <div style={{
                            width: '100%',
                            maxWidth: '900px',
                            background: 'var(--surface-color)',
                            borderRadius: '1.5rem',
                            border: '1px solid var(--border-color)',
                            padding: '1rem',
                            marginBottom: '4rem',
                            boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)',
                            backdropFilter: 'blur(20px)'
                        }}>
                            <img
                                src={`${import.meta.env.BASE_URL}examples/bite/bite-banner.png`}
                                alt="Bite Banner"
                                style={{ width: '100%', borderRadius: '1rem', display: 'block' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <a href="https://github.com/Ghua8088/py-cast" target="_blank" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem' }}>
                                <Github size={18} /> View Repository
                            </a>
                            {release && (
                                <a href={release.url} className="btn btn-secondary" style={{ padding: '0.8rem 2.5rem' }}>
                                    <Download size={18} /> Download {release.version}
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Implementation Details */}
            <section className="container" style={{ paddingBottom: '8rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 800 }}>How it's built</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                        Bite leverages <strong>Pytron-kit's native bridge</strong> to perform high-speed file system indexing in Python while maintaining a 60FPS blurred interface using modern web technologies.
                    </p>
                    
                    <Callout title="Technical Highlight" type="info">
                        The application uses a <strong>Zero-Copy binary bridge</strong> to stream file icons from the OS directly to the frontend without any Base64 encoding overhead.
                    </Callout>

                    <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <FeatureCard 
                            icon={<Cpu size={24} />} 
                            title="Python Core" 
                            desc="Handles heavy tasks like regex file searching, system power commands, and custom script execution." 
                        />
                        <FeatureCard 
                            icon={<Layout size={24} />} 
                            title="Web UI" 
                            desc="A minimalist, keyboard-driven interface with instant feedback and smooth animations." 
                        />
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container" style={{ paddingBottom: '8rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Capabilities</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <FeatureCard icon={<Search />} title="Deep File Search" desc="Recursively search directories instantly. Supports Regex patterns for power users." />
                    <FeatureCard icon={<Command />} title="System Control" desc="Sleep, Shutdown, Lock, or toggle Dark Mode directly from the keyboard." />
                    <FeatureCard icon={<Terminal />} title="Scriptable" desc="Add your own Python scripts as shortcuts. If it runs in Python, it runs in Bite." />
                    <FeatureCard icon={<Download />} title="Self Updating" desc="Auto-updates in the background so you are always on the latest version." />
                    <FeatureCard icon={<Layers />} title="Clipboard History" desc="Never lose a snippet again. Search and paste from your last 50 copies." />
                    <FeatureCard icon={<Zap />} title="Instant Calculator" desc="Evaluate complex math expressions directly in the search bar." />
                </div>
            </section>

            <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
                <Link to="/examples" style={{ color: 'var(--primary-color)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <Layout size={18} /> Back to Showcase
                </Link>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="feature-card"
            style={{ padding: '2.5rem' }}
        >
            <div style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>{icon}</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700 }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{desc}</p>
        </motion.div>
    )
}