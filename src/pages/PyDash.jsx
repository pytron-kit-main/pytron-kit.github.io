import { motion } from 'framer-motion';
import { Activity, Cpu, Database, Layout, Github, BarChart3, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Callout from '../components/Callout';
import CodeBlock from '../components/CodeBlock';

export default function PyDashPage() {
    return (
        <div className="main-content">
            <SEO
                title="PyDash | Pytron-kit Showcase"
                description="PyDash is a modern system monitor and task manager built with Pytron-kit using Python and modern web technologies."
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
                            CASE STUDY: SYSTEM UTILITIES
                        </div>

                        <h1 className="font-lobster" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                            PyDash
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            maxWidth: '750px',
                            color: 'var(--text-secondary)',
                            margin: '0 auto 3rem',
                            lineHeight: 1.6
                        }}>
                            A modern system monitor and task manager. <br />
                            Leveraging Python's system access with a high-performance reactive interface.
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
                                src={`${import.meta.env.BASE_URL}examples/pydash/screenshot.png`}
                                alt="PyDash Screenshot"
                                style={{ width: '100%', borderRadius: '1rem', display: 'block' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <a href="https://github.com/Ghua8088/pyDash" target="_blank" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem' }}>
                                <Github size={18} /> View Repository
                            </a>
                            <Link to="/docs" className="btn btn-secondary" style={{ padding: '0.8rem 2.5rem' }}>
                                Documentation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container" style={{ paddingBottom: '8rem' }}>
                <div style={{ maxWidth: '840px', margin: '0 auto' }}>
                    <div className="prose">
                        <h2 id="overview">Overview</h2>
                        <p>
                            PyDash is designed to provide real-time system insights with a minimal footprint. It serves as an excellent example of how to use <strong>Pytron-kit's state synchronization</strong> to stream high-frequency data from Python to a web-based frontend.
                        </p>

                        <Callout title="Learning Resource" type="info">
                            This project is highly recommended for developers looking to understand bidirectional state sync and handling frameless windows in Pytron-kit.
                        </Callout>

                        <h2 id="features">Features</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem', marginBottom: '4rem' }}>
                            <FeatureCard icon={<Activity size={20} />} title="Real-time Stats" desc="Live monitoring of CPU, Memory, and Disk usage." />
                            <FeatureCard icon={<BarChart3 size={20} />} title="Live Graphs" desc="Dynamic visual representation of system performance." />
                            <FeatureCard icon={<Layout size={20} />} title="Custom UI" desc="Frameless window design with a custom matte-black title bar." />
                            <FeatureCard icon={<XCircle size={20} />} title="Process Manager" desc="View and terminate system processes directly from the UI." />
                        </div>

                        <h2 id="setup">Setup & Installation</h2>
                        <p>Follow these steps to set up PyDash on your local machine:</p>
                        
                        <h3 style={{ fontSize: '1rem', marginTop: '2rem' }}>1. Environment Setup</h3>
                        <CodeBlock language="bash" code={`pip install -r requirements.txt`} />
                        
                        <h3 style={{ fontSize: '1rem', marginTop: '2rem' }}>2. Frontend Installation</h3>
                        <CodeBlock language="bash" code={`cd frontend
npm install`} />

                        <h2 id="running">Running the Application</h2>
                        <p>You can build the production frontend or run in development mode:</p>
                        
                        <h3 style={{ fontSize: '1rem', marginTop: '2rem' }}>Build and Run</h3>
                        <CodeBlock language="bash" code={`pytron build-frontend
pytron run`} />

                        <h3 style={{ fontSize: '1rem', marginTop: '2rem' }}>Hot-Reloading (Dev)</h3>
                        <CodeBlock language="bash" code={`pytron run --dev`} />
                    </div>
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
        <div style={{
            background: 'var(--surface-color)',
            border: '1px solid var(--border-color)',
            padding: '1.5rem',
            borderRadius: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
        }}>
            <div style={{ color: 'var(--primary-color)' }}>{icon}</div>
            <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>{title}</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{desc}</p>
        </div>
    )
}
