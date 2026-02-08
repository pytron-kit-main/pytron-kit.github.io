import { NavLink } from 'react-router-dom';
import { X, BookOpen, Cpu, Shield, Zap, Terminal, Box, Layers, Repeat, GitCompare, Package } from 'lucide-react';

const sections = [
  {
    title: 'Getting Started',
    links: [
      { title: 'Introduction', path: '/docs', icon: BookOpen },
    ]
  },
  {
    title: 'Core Concepts',
    links: [
      { title: 'Architecture', path: '/docs/architecture', icon: Cpu },
      { title: 'Core Features', path: '/docs/features', icon: Zap },
      { title: 'Virtual IPC (VAP)', path: '/docs/vap', icon: Repeat },
      { title: 'CLI & Tools', path: '/docs/cli', icon: Terminal },
    ]
  },
  {
    title: 'Advanced',
    links: [
      { title: 'Security (Shield)', path: '/docs/security', icon: Shield },
      { title: 'Binary Evolution', path: '/docs/binary-evolution', icon: Layers },
      { title: 'Menus & Tray', path: '/docs/menus', icon: Box },
      { title: 'Dependency Management', path: '/docs/dependency-management', icon: Package },
      { title: 'Ecosystem', path: '/docs/ecosystem', icon: Package },
      { title: 'Comparison', path: '/docs/comparison', icon: GitCompare },
    ]
  }
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ 
            fontSize: '0.7rem', 
            fontWeight: 700, 
            textTransform: 'uppercase', 
            letterSpacing: '0.12em', 
            color: 'var(--text-muted)', 
            margin: 0 
          }}>
            Documentation
          </h3>
          <button
            className="mobile-close-btn"
            onClick={onClose}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {sections.map((section, idx) => (
          <div key={idx}>
            <h4 style={{ 
              fontSize: '0.75rem', 
              fontWeight: 600, 
              color: 'var(--text-primary)', 
              marginBottom: '1rem',
              paddingLeft: '0.5rem',
              letterSpacing: '-0.01em'
            }}>
              {section.title}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {section.links.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  end={link.path === '/docs'}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '8px',
                    color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 500 : 400,
                    transition: 'all 0.2s ease',
                    border: '1px solid transparent'
                  })}
                  className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
                >
                  {({ isActive }) => (
                    <>
                      <link.icon size={15} strokeWidth={isActive ? 2 : 1.5} />
                      {link.title}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

