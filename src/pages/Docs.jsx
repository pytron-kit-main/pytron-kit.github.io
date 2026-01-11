import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { PanelLeftOpen } from 'lucide-react';
import Sidebar from '../components/Sidebar';

// Content Components
import Introduction from './docs/Introduction';
import Architecture from './docs/Architecture';
import Features from './docs/Features';
import Security from './docs/Security';
import VAP from './docs/VAP';
import CLI from './docs/CLI';
import Ecosystem from './docs/Ecosystem';
import Comparison from './docs/Comparison';
import DependencyManagement from './docs/DependencyManagement';
import Menus from './docs/Menus';
import BinaryEvolution from './docs/BinaryEvolution';
import DocNavigation from '../components/DocNavigation';

export default function Docs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="docs-layout">
      {/* Mobile Sidebar Toggle */}
      <button
        className="mobile-sidebar-toggle"
        onClick={toggleSidebar}
        style={{
          display: 'none', // Hidden by default, shown via media query
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          background: 'var(--primary-color)',
          color: 'black',
          border: 'none',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          boxShadow: '0 4px 20px rgba(6, 182, 212, 0.4)',
          zIndex: 1001,
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <PanelLeftOpen size={24} />
      </button>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Dark Overlay when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 999,
            backdropFilter: 'blur(4px)'
          }}
        />
      )}

      <main className="docs-content">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/features" element={<Features />} />
          <Route path="/security" element={<Security />} />
          <Route path="/vap" element={<VAP />} />
          <Route path="/cli" element={<CLI />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/binary-evolution" element={<BinaryEvolution />} />
          <Route path="/dependency-management" element={<DependencyManagement />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="*" element={<Navigate to="/docs" replace />} />
        </Routes>
        <DocNavigation />
      </main>
    </div>
  );
}
