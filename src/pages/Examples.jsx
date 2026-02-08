import { motion } from 'framer-motion';
import { ExternalLink, Github, Layout, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const examples = [
  {
    title: "Bite",
    description: "A production-ready launcher app (Spotlight/Raycast alternative). Features local file search, system commands, and calculator. Full source available.",
    tags: ['Any Framework', 'File System', 'Python'],
    repoUrl: `${import.meta.env.BASE_URL}bite`,
    icon: `${import.meta.env.BASE_URL}examples/bite/bite.png`,
    image: `${import.meta.env.BASE_URL}examples/bite/screenshot.png`,
    featured: true,
    buttonText: "View Case Study",
    buttonIcon: <Layout size={16} />,
    isInternal: true
  },
  {
    title: "Agentic",
    description: "The Ultimate Desktop AI Assistant. A local-first powerhouse with 70+ tools, deep system integration, and a stunning glassmorphism UI. Built on Pytron-kit.",
    tags: ['AI/LLM', 'Ollama', 'Web Tech'],
    repoUrl: "https://ghua8088.github.io/Agentic/",
    icon: `${import.meta.env.BASE_URL}examples/Agentic/logo.png`,
    image: `${import.meta.env.BASE_URL}examples/Agentic/screenshot.png`,
    featured: true,
    buttonText: "Explore Project",
    buttonIcon: <ExternalLink size={16} />
  },
  {
    title: "Requests Studio",
    description: "A professional API client for testing and interaction. Desktop alternative built on Pytron-kit with a Python backend and modern web frontend.",
    tags: ['API Client', 'Python Requests', 'Web Tech'],
    repoUrl: `${import.meta.env.BASE_URL}requests-studio`,
    icon: `${import.meta.env.BASE_URL}examples/RequestsStudio/logo.ico`,
    image: `${import.meta.env.BASE_URL}examples/RequestsStudio/screenshot.png`,
    featured: true,
    buttonText: "View Details",
    buttonIcon: <Layout size={16} />,
    isInternal: true
  },
  {
    title: "PyDash",
    description: "A modern system monitor and task manager. Features real-time graphs, process management, and a custom frameless window.",
    tags: ['System Monitor', 'Real-time', 'Python'],
    repoUrl: `${import.meta.env.BASE_URL}pydash`,
    icon: `${import.meta.env.BASE_URL}examples/pydash/logo.png`,
    image: `${import.meta.env.BASE_URL}examples/pydash/screenshot.png`,
    featured: true,
    buttonText: "View Case Study",
    buttonIcon: <Layout size={16} />,
    isInternal: true
  },
  {
    title: "TerminateCode",
    description: "An experimental, lightweight IDE built with Pytron-kit. Features Monaco Editor, file system operations, and a VS Code-like experience.",
    tags: ['IDE', 'Monaco', 'Web Tech'],
    repoUrl: `${import.meta.env.BASE_URL}terminate-code`,
    icon: `${import.meta.env.BASE_URL}examples/terminatecode/logo.png`,
    image: `${import.meta.env.BASE_URL}examples/terminatecode/screenshot.png`,
    featured: true,
    buttonText: "View Case Study",
    buttonIcon: <Layout size={16} />,
    isInternal: true
  }
];

export default function Examples() {
  return (
    <div className="main-content">
      <SEO
        title="Showcase | Pytron-kit"
        description="Explore professional desktop applications built with Pytron-kit. From system utilities to AI assistants."
      />
      
      {/* Header Section */}
      <section className="container" style={{ paddingTop: '5rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-lobster" style={{ fontSize: '4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
            Showcase
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Discover how developers are building the next generation of desktop applications with Pytron-kit.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '2.5rem'
        }}>
          {examples.map((example, index) => (
            <ExampleCard key={example.title} {...example} index={index} />
          ))}
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid var(--border-color)',
          borderRadius: '2rem',
          padding: '4rem 2rem',
          textAlign: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <PlusCircle size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 700 }}>Built with Pytron-kit?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            We'd love to feature your project here. Submit your application to our community showcase.
          </p>
          <a href="https://github.com/Ghua8088/pytron/discussions" target="_blank" className="btn btn-secondary" style={{ padding: '0.8rem 2.5rem' }}>
            Submit Project
          </a>
        </div>
      </section>
    </div>
  );
}

function ExampleCard({ title, description, tags, repoUrl, icon, image, featured, buttonText = "View Repository", buttonIcon = <Github size={16} />, isInternal = false, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="feature-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        overflow: 'hidden',
        height: '100%'
      }}
    >
      {/* Thumbnail */}
      <div style={{
        height: '220px',
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
        borderBottom: '1px solid var(--border-color)'
      }}>
        {image ? (
          <img 
            src={image} 
            alt={title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              opacity: 0.8,
              transition: 'transform 0.5s ease'
            }} 
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-hover)' }}>
            <Layout size={48} color="var(--border-color)" />
          </div>
        )}
        
        {featured && (
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'var(--primary-color)',
            color: '#000',
            padding: '0.3rem 0.8rem',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          {icon && (
            <img src={icon} alt="" style={{ width: '32px', height: '32px', borderRadius: '6px' }} />
          )}
          <h3 style={{ fontSize: '1.4rem', margin: 0, fontWeight: 700, letterSpacing: '-0.02em' }}>{title}</h3>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
          {description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              background: 'rgba(255,255,255,0.04)',
              padding: '0.2rem 0.7rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              border: '1px solid var(--border-color)'
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        {isInternal ? (
          <Link
            to={repoUrl.replace(import.meta.env.BASE_URL, '/')}
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {buttonIcon} <span style={{ marginLeft: '0.5rem' }}>{buttonText}</span>
          </Link>
        ) : (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {buttonIcon} <span style={{ marginLeft: '0.5rem' }}>{buttonText}</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}