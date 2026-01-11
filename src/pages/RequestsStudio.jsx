import { motion } from 'framer-motion';
import { Send, Database, Code, Terminal, Globe, Menu, Bell, Monitor, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RequestsStudioPage() {
    return (
        <div style={{
            background: '#020203',
            minHeight: '100vh',
            color: '#fff',
            overflowX: 'hidden',
            position: 'relative'
        }}>
            {/* Insane Background Gradient Layer */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
                background: `
                    radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 40%),
                    radial-gradient(circle at 100% 0%, rgba(34, 211, 238, 0.1) 0%, transparent 40%),
                    radial-gradient(circle at 50% 50%, rgba(15, 15, 20, 1) 0%, rgba(2, 2, 3, 1) 100%)
                `,
                pointerEvents: 'none'
            }} />

            {/* Mesh Gradient Accents */}
            <div style={{
                position: 'fixed',
                top: '20%',
                left: '-10%',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
                filter: 'blur(120px)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'fixed',
                bottom: '-10%',
                right: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(34, 211, 238, 0.05) 0%, transparent 70%)',
                filter: 'blur(120px)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Hero Section */}
                <section style={{
                    padding: '8rem 2rem 4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ width: '100%', maxWidth: '1100px' }}
                    >
                        <div style={{ marginBottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={`${import.meta.env.BASE_URL}examples/RequestsStudio/Requests-studio-banner.png`}
                                alt="Requests Studio"
                                style={{
                                    width: '100%',
                                    maxWidth: '1000px',
                                    height: 'auto',
                                    display: 'block'
                                }}
                            />
                        </div>

                        <p style={{
                            fontSize: '1.4rem',
                            maxWidth: '800px',
                            color: '#94a3b8',
                            margin: '0 auto 3rem',
                            lineHeight: 1.6,
                            fontWeight: 450
                        }}>
                            An modern, extensible desktop API client built with Pytron-kit. <br />
                            Powered by <span style={{ color: '#a78bfa' }}>Python</span> logic and <span style={{ color: '#22d3ee' }}>React</span> interface.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <a href="https://github.com/Ghua8088/Requests-Studio" target="_blank" className="btn-primary" style={{
                                padding: '1rem 3rem',
                                borderRadius: '1rem',
                                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: 700,
                                boxShadow: '0 10px 40px rgba(139, 92, 246, 0.3)',
                                display: 'flex', alignItems: 'center', gap: '0.75rem',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <Github size={22} /> View on GitHub
                            </a>
                            <Link to="/docs" style={{
                                padding: '1rem 3rem',
                                borderRadius: '1rem',
                                background: 'rgba(255,255,255,0.03)',
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: 600,
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                Documentation
                            </Link>
                        </div>
                    </motion.div>
                </section>

                {/* Features Grid */}
                <section style={{ padding: '6rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem'
                    }}>
                        <FeatureCard
                            icon={<Send color="#8b5cf6" size={28} />}
                            title="Send HTTP Requests"
                            desc="Full support for GET, POST, PUT, DELETE, and other custom methods via the robust Python requests library."
                            accent="#8b5cf6"
                        />
                        <FeatureCard
                            icon={<Database color="#22d3ee" size={28} />}
                            title="Request Collections"
                            desc="Stay organized. Group your endpoints into collections and save them for instant access later."
                            accent="#22d3ee"
                        />
                        <FeatureCard
                            icon={<Code color="#f472b6" size={28} />}
                            title="Response Viewer"
                            desc="Analyze payloads with a dedicated JSON/XML viewer featuring theme-aware syntax highlighting."
                            accent="#f472b6"
                        />
                        <FeatureCard
                            icon={<Terminal color="#60a5fa" size={28} />}
                            title="Console Drawer"
                            desc="Real-time debugging. Monitor logs, headers, and raw network data in a slide-out console."
                            accent="#60a5fa"
                        />
                        <FeatureCard
                            icon={<Globe color="#34d399" size={28} />}
                            title="Smart Address Bar"
                            desc="Quickly input, modify, and manage request URLs with intelligent auto-suggestion and history."
                            accent="#34d399"
                        />
                        <FeatureCard
                            icon={<Menu color="#fbbf24" size={28} />}
                            title="Sidebar Navigation"
                            desc="A seamless, collapsible sidebar designed for intuitive collection management and multi-tasking."
                            accent="#fbbf24"
                        />
                        <FeatureCard
                            icon={<Bell color="#f87171" size={28} />}
                            title="Integrated Notifications"
                            desc="Get immediate feedback on request success, timeout, or backend errors with native-feel toasts."
                            accent="#f87171"
                        />
                        <FeatureCard
                            icon={<Monitor color="#a78bfa" size={28} />}
                            title="Native Cross-Platform"
                            desc="One codebase, every OS. Runs natively on Windows, macOS, and Linux with optimized performance."
                            accent="#a78bfa"
                        />
                    </div>
                </section>

                {/* Installation Guide */}
                <section style={{ padding: '8rem 2rem' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{
                            background: 'rgba(15, 15, 20, 0.5)',
                            padding: '4rem',
                            borderRadius: '3rem',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Get Started</h2>
                                <p style={{ color: '#64748b' }}>Scaffold and run the project locally with the Pytron CLI.</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#8b5cf6', fontWeight: 700 }}>01. Setup</h3>
                                    <CodeBlock code={`pytron install\nnpm install`} color="#8b5cf6" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#22d3ee', fontWeight: 700 }}>02. Run</h3>
                                    <CodeBlock code={`pytron run`} color="#22d3ee" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer style={{ padding: '6rem 2rem', textAlign: 'center', color: '#444' }}>
                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        Built with <Link to="/" style={{ color: '#8b5cf6', textDecoration: 'none', fontWeight: 600 }}>Pytron Kit</Link>
                    </p>
                </footer>
            </div>
        </div>
    );
}


function FeatureCard({ icon, title, desc, accent }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '3rem',
                borderRadius: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: `radial-gradient(circle at top right, ${accent}15, transparent 70%)`,
                zIndex: 0
            }} />
            <div style={{
                marginBottom: '2rem',
                background: 'rgba(255,255,255,0.03)',
                width: '64px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '1.25rem',
                border: `1px solid ${accent}40`,
                boxShadow: `0 8px 20px ${accent}20`
            }}>{icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700, color: '#f8fafc' }}>{title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>{desc}</p>
        </motion.div>
    )
}

function CodeBlock({ code, color }) {
    return (
        <pre style={{
            background: '#0a0a0c',
            padding: '1.5rem',
            borderRadius: '1.25rem',
            border: `1px solid ${color}30`,
            overflowX: 'auto',
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.95rem',
            lineHeight: 1.6,
            color: color,
            boxShadow: `0 10px 30px rgba(0,0,0,0.5)`
        }}>
            {code}
        </pre>
    )
}
