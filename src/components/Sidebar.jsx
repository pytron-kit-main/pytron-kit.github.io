import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';

const links = [
  { title: 'Introduction', path: '/docs' },
  { title: 'Architecture', path: '/docs/architecture' },
  { title: 'Core Features', path: '/docs/features' },
  { title: 'Security (Shield)', path: '/docs/security' },
  { title: 'Binary Evolution', path: '/docs/binary-evolution' },
  { title: 'Virtual IPC (VAP)', path: '/docs/vap' },
  { title: 'CLI & Tools', path: '/docs/cli' },
  { title: 'Menus & Tray', path: '/docs/menus' },
  { title: 'Dependency Management', path: '/docs/dependency-management' },
  { title: 'Ecosystem', path: '/docs/ecosystem' },
  { title: 'Comparison', path: '/docs/comparison' },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-secondary)', margin: 0 }}>Documentation</h3>
          <button
            className="mobile-close-btn"
            onClick={onClose}
            style={{
              display: 'none', // Shown on mobile via CSS
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>
        {links.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            end={link.path === '/docs'}
            style={({ isActive }) => ({
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)',
              background: isActive ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
              fontSize: '0.95rem',
              fontWeight: isActive ? 600 : 400
            })}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

