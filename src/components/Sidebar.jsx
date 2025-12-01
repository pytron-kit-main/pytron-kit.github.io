import { NavLink } from 'react-router-dom';

const links = [
  { title: 'Introduction', path: '/docs' },
  { title: 'Architecture', path: '/docs/architecture' },
  { title: 'Core Features', path: '/docs/features' },
  { title: 'CLI & Tools', path: '/docs/cli' },
  { title: 'Ecosystem', path: '/docs/ecosystem' },
  { title: 'Comparison', path: '/docs/comparison' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Documentation</h3>
        {links.map(link => (
          <NavLink 
            key={link.path}
            to={link.path}
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
