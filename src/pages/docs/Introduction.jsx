export default function Introduction() {
  return (
    <div className="prose">
      <h1>Introduction to Pytron</h1>
      <p>
        Pytron-Kit is a state-of-the-art, high-performance framework for building cross platform applications using Python for the backend and modern web technologies (React, Vue, Svelte, etc.) for the frontend.
        It provides a professional developer experience with a focus on speed, small distribution sizes, and cross-platform consistency.
      </p>
      <h2>Quick Start</h2>
      <p>
        Install the Pytron CLI to start building:
      </p>
      <div style={{ margin: '2rem 0' }}>
        <code style={{
          background: 'rgba(0,0,0,0.3)',
          padding: '1rem 2rem',
          borderRadius: '0.5rem',
          fontSize: '1.1rem',
          border: '1px solid var(--border-color)',
          fontFamily: 'monospace',
          color: 'var(--primary-color)',
          display: 'block',
          width: 'fit-content'
        }}>
          pip install pytron-kit
        </code>
      </div>

      <h2>The Pytron Advantage</h2>
      <ul>
        <li><strong>No Local Server:</strong> No HTTP overhead or port conflicts. Direct bridge communication for maximum security and speed.</li>
        <li><strong>Native Packaging:</strong> One-command packaging into executables and professional installers (NSIS/DMG/Deb).</li>
        <li><strong>Modern CLI:</strong> A polished, color-coded CLI with built-in system diagnostics (<code>pytron doctor</code>).</li>
      </ul>

      <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--primary-color)', marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 0 }}>Built with Pytron</h3>
        <p>
          Experience the flagship: <strong>Agentic</strong>. The ultimate desktop AI assistant with 70+ tools and deep system integration, fully powered by the Pytron-Kit engine.
        </p>
        <a href="https://ghua8088.github.io/Agentic/" target="_blank" className="btn btn-primary">
          Check out Agentic
        </a>
      </div>
    </div>
  );
}
