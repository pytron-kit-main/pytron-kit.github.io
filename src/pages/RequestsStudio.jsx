import { motion } from 'framer-motion';
import { Send, Database, Code, Terminal, Globe, Menu, Bell, Monitor, Github, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Callout from '../components/Callout';

export default function RequestsStudioPage() {
    return (
        <div className="main-content">
            <SEO
                title="Requests Studio | Pytron-kit Showcase"
                description="Requests Studio is a professional API client for testing and interaction, built with Pytron-kit using Python Requests."
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
                            background: 'rgba(249, 115, 22, 0.1)',
                            border: '1px solid rgba(249, 115, 22, 0.2)',
                            padding: '0.4rem 1rem',
                            borderRadius: '2rem',
                            fontSize: '0.8rem',
                            color: 'var(--secondary-color)',
                            marginBottom: '2rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em'
                        }}>
                            CASE STUDY: API DEVELOPMENT
                        </div>

                        <h1 className="font-lobster" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>
                            Requests Studio
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            maxWidth: '750px',
                            color: 'var(--text-secondary)',
                            margin: '0 auto 3rem',
                            lineHeight: 1.6
                        }}>
                            A high-performance API client built with Pytron-kit. <br />
                            Combining the reliability of the Python <code>requests</code> library with a modern web interface.
                        </p>

                        <div style={{
                            width: '100%',
                            maxWidth: '1000px',
                            background: 'var(--surface-color)',
                            borderRadius: '1.5rem',
                            border: '1px solid var(--border-color)',
                            padding: '1rem',
                            marginBottom: '4rem',
                            boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)',
                            backdropFilter: 'blur(20px)'
                        }}>
                            <img
                                src={`${import.meta.env.BASE_URL}examples/RequestsStudio/Requests-studio-banner.png`}
                                alt="Requests Studio Banner"
                                style={{ width: '100%', borderRadius: '1rem', display: 'block' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <a href="https://github.com/Ghua8088/Requests-Studio" target="_blank" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem', background: 'var(--secondary-color)' }}>
                                <Github size={18} /> View Repository
                            </a>
                            <Link to="/docs" className="btn btn-secondary" style={{ padding: '0.8rem 2.5rem' }}>
                                Documentation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Implementation Details */}
            <section className="container" style={{ paddingBottom: '8rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.25rem', marginBottom: '2rem', fontWeight: 800 }}>Architecture Overview</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                        Requests Studio demonstrates how <strong>Pytron-kit</strong> can bridge complex Python-side network state with a reactive UI. It uses persistent Python sessions to manage authentication and cookies across requests.
                    </p>
                    
                    <Callout title="Native Performance" type="success">
                        By offloading request execution to a Python sub-process, Requests Studio avoids CORS issues and provides full access to system certificates and proxies.
                    </Callout>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container" style={{ paddingBottom: '8rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    <FeatureCard
                        icon={<Send size={24} />}
                        title="HTTP Methods"
                        desc="Support for GET, POST, PUT, DELETE using the industry-standard requests library."
                    />
                    <FeatureCard
                        icon={<Database size={24} />}
                        title="Collections"
                        desc="Organize and save your API requests in persistent collections."
                    />
                    <FeatureCard
                        icon={<Code size={24} />}
                        title="Syntax Highlighting"
                        desc="View and analyze formatted JSON, HTML, and XML responses."
                    />
                    <FeatureCard
                        icon={<Terminal size={24} />}
                        title="Debug Logs"
                        desc="Monitor raw request/response cycles in a dedicated console panel."
                    />
                </div>
            </section>

            <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
                <Link to="/examples" style={{ color: 'var(--secondary-color)', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
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
            <div style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>{icon}</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700 }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{desc}</p>
        </motion.div>
    )
}