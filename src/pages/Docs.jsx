import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

// Content Components
import Introduction from './docs/Introduction';
import Architecture from './docs/Architecture';
import Features from './docs/Features';
import CLI from './docs/CLI';
import Ecosystem from './docs/Ecosystem';
import Comparison from './docs/Comparison';

export default function Docs() {
  return (
    <div className="docs-layout">
      <Sidebar />
      <main className="docs-content">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/features" element={<Features />} />
          <Route path="/cli" element={<CLI />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="*" element={<Navigate to="/docs" replace />} />
        </Routes>
      </main>
    </div>
  );
}
