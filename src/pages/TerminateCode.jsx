import { motion } from 'framer-motion';
import { Code, FolderTree, Terminal, Puzzle, Paintbrush, Github, Layout, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Callout from '../components/Callout';
import CodeBlock from '../components/CodeBlock';

export default function TerminateCodePage() {
    return (
        <div className="main-content">
            <SEO
                title="TerminateCode | Pytron-kit Showcase"
                description="TerminateCode is an experimental, lightweight IDE built with Pytron-kit using Monaco Editor and Python."
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
                            background: 'rgba(56, 189, 248, 0.1)',
                            border: '1px solid rgba(56, 189, 248, 0.2)',
                            padding: '0.4rem 1rem',
                            borderRadius: '2rem',
                            fontSize: '0.8rem',
                            color: 'var(--primary-color)',
                            marginBottom: '2rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em'
                        }}>
                            CASE STUDY: DEVELOPER TOOLS
                        </div>

                        <h1 className="font-lobster" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                            TerminateCode
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            maxWidth: '750px',
                            color: 'var(--text-secondary)',
                            margin: '0 auto 3rem',
                            lineHeight: 1.6
                        }}>
                            An experimental, lightweight IDE built with Pytron-kit. <br />
                            Providing a modern, VS Code-like experience through the power of Python and Monaco Editor.
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
                                src={`${import.meta.env.BASE_URL}examples/terminatecode/screenshot.png`}
                                alt="TerminateCode Screenshot"
                                style={{ width: '100%', borderRadius: '1rem', display: 'block', opacity: 0.9 }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <a href="https://github.com/Ghua8088/TerminateCode" target="_blank" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem' }}>
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
                    <Callout title="Experimental Project" type="warning">
                        TerminateCode is a proof-of-concept and is currently in early development. Expect bugs and frequent updates as we refine the core editor experience.
                    </Callout>

                    <div className="prose">
                        <h2 id="why-pytron">Why Pytron-kit?</h2>
                        <p>
                            TerminateCode demonstrates the framework's ability to handle complex, high-performance desktop requirements:
                        </p>
                        <ul>
                            <li><strong>Python Backend:</strong> Manages heavy operations like file system indexing, integrated terminal streams, and language server protocols.</li>
                            <li><strong>Modern Frontend:</strong> Utilizes the Monaco Editor (the same engine powering VS Code) for a responsive and feature-rich editing experience using modern web technologies.</li>
                            <li><strong>Efficiency:</strong> Eliminates the overhead of a full browser bundle by leveraging the system's native webview.</li>
                        </ul>

                        <h2 id="features">Features & Roadmap</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem', marginBottom: '4rem' }}>
                            <FeatureCard icon={<Code size={20} />} title="Text Editing" desc="Powered by Monaco Editor with full syntax highlighting." />
                            <FeatureCard icon={<FolderTree size={20} />} title="File Explorer" desc="Native file system navigation and management." />
                            <FeatureCard icon={<Terminal size={20} />} title="Integrated Terminal" desc="Run system commands directly within the IDE." />
                            <FeatureCard icon={<Puzzle size={20} />} title="Extension Support" desc="Planned Python-based extension architecture." />
                        </div>

                        <h2 id="getting-started">Getting Started</h2>
                        <p>To run TerminateCode locally, follow these installation steps:</p>
                        
                        <h3 style={{ fontSize: '1rem', marginTop: '2rem' }}>1. Clone and Install</h3>
                        <CodeBlock language="bash" code={`git clone https://github.com/Ghua8088/TerminateCode.git
cd TerminateCode
pip install -r requirements.txt`} />
                        
                        <h3 style={{ fontSize: '1rem', marginTop: '2rem' }}>2. Frontend Setup</h3>
                        <CodeBlock language="bash" code={`cd frontend
npm install
cd ..`} />

                        <h3 style={{ fontSize: '1rem', marginTop: '2rem' }}>3. Run in Development Mode</h3>
                        <CodeBlock language="bash" code={`pytron run --dev`} />

                        <Callout title="Pro Tip" type="info">
                            Use <code>pytron package --installer</code> to generate a professional Windows installer (NSIS) for your project instantly.
                        </Callout>
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
