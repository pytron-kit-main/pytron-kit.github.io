import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Box, Layers, Terminal, Package, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="main-content">
      {/* Hero Section */}
      <section style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Decorative ambient glue */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
          zIndex: -1,
          filter: 'blur(60px)'
        }} />

        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <motion.div variants={itemVariants}>
              <span style={{
                color: 'var(--secondary-color)',
                textTransform: 'uppercase',
                letterSpacing: '0.2rem',
                fontSize: '0.875rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                display: 'block'
              }}>
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Build <span style={{
                background: 'linear-gradient(135deg, var(--primary-color), #fff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 40px rgba(6, 182, 212, 0.4)'
              }}>Desktop Apps</span><br />
              with <span style={{
                color: 'var(--secondary-color)',
                textShadow: '0 0 40px rgba(249, 115, 22, 0.4)'
              }}>Web Speed</span>
            </motion.h1>

            <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 3rem', color: '#94a3b8' }}>
              The lightweight framework that bridges Python logic with modern web UIs.
              Zero friction, native performance.
            </motion.p>

            <motion.div variants={itemVariants} style={{ marginBottom: '3.5rem' }}>
              <InstallSnippet />
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/docs" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                Start Building <ArrowRight size={20} />
              </Link>
              <a href="https://pypi.org/project/pytron-kit/" target="_blank" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                View on PyPi
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Pytron?</h2>
          <p>Everything you need to ship professional desktop apps.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          <FeatureCard
            icon={<Zap color="var(--secondary-color)" size={32} />}
            title="Blazing Fast"
            desc="Direct bridge communication. Switch between WebView2, CEF, or PySide6 engines instantly."
            delay={0}
          />
          <FeatureCard
            icon={<Box color="var(--primary-color)" size={32} />}
            title="Native Packaging"
            desc="Professional installers for Windows, macOS, and Linux with full UTF-8 support."
            delay={0.1}
          />
          <FeatureCard
            icon={<Package color="#06b6d4" size={32} />}
            title="Dependency Manager"
            desc="Automated virtualenv and requirements management via the CLI."
            delay={0.2}
          />
          <FeatureCard
            icon={<Layers color="#a855f7" size={32} />}
            title="Frontend Agnostic"
            desc="Works with React, Vue, Svelte, or Next.js. Scaffold any project with a single command."
            delay={0.3}
          />
          <FeatureCard
            icon={<Terminal color="#22c55e" size={32} />}
            title="Intelligent CLI"
            desc="Built-in diagnostics with `pytron doctor` and an elegant Rich-powered interface."
            delay={0.4}
          />
        </div>
      </section>
    </div>
  );
}

function InstallSnippet() {
  const [copied, setCopied] = useState(false);
  const code = "pip install pytron-kit";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      background: 'rgba(10, 10, 10, 0.8)',
      padding: '0.75rem 0.75rem 0.75rem 1.5rem',
      borderRadius: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2rem',
      boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top glow line */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)',
        opacity: 0.5
      }} />

      <code style={{
        fontFamily: "'Fira Code', monospace",
        fontSize: '1.2rem',
        color: '#e2e8f0',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span style={{ color: 'var(--secondary-color)' }}>$</span>
        {code}
      </code>

      <button
        onClick={handleCopy}
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.5rem',
          cursor: 'pointer',
          color: copied ? '#22c55e' : '#94a3b8',
          transition: 'all 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title="Copy to clipboard"
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
      </button>
    </div>
  );
}

function FeatureCard({ icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{
        y: -10,
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
      }}
      style={{
        background: 'rgba(255, 255, 255, 0.01)', // Very subtle glass
        backdropFilter: 'blur(12px)',
        padding: '2.5rem',
        borderRadius: '1.5rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'border-color 0.3s'
      }}
    >
      <div style={{
        marginBottom: '1.5rem',
        background: 'rgba(255,255,255,0.05)',
        width: 'fit-content',
        padding: '1rem',
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', fontWeight: 600 }}>{title}</h3>
      <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
        {desc}
      </p>
    </motion.div>
  );
}
