import { Routes, Route, Navigate } from 'react-router-dom';
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

export default function Docs() {
  return (
    <div className="docs-layout">
      <Sidebar />
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
      </main>
    </div>
  );
}
