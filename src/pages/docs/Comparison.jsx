export default function Comparison() {
  return (
    <div className="prose">
      <h1>Comparison</h1>
      <p>How does Pytron stack up against other popular frameworks?</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Feature</th>
            <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--primary-color)' }}>Pytron</th>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Electron</th>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Tauri</th>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Wails</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <td style={{ padding: '1rem' }}><strong>Language</strong></td>
            <td style={{ padding: '1rem', color: 'var(--primary-color)' }}>Python</td>
            <td style={{ padding: '1rem' }}>Node.js</td>
            <td style={{ padding: '1rem' }}>Rust</td>
            <td style={{ padding: '1rem' }}>Go</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <td style={{ padding: '1rem' }}><strong>Renderer</strong></td>
            <td style={{ padding: '1rem' }}>System Webview</td>
            <td style={{ padding: '1rem' }}>Chromium (Bundled)</td>
            <td style={{ padding: '1rem' }}>System Webview</td>
            <td style={{ padding: '1rem' }}>System Webview</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <td style={{ padding: '1rem' }}><strong>IP Protection</strong></td>
            <td style={{ padding: '1rem', color: 'var(--primary-color)' }}>High (Shield/Nuitka)</td>
            <td style={{ padding: '1rem' }}>Low (Asar)</td>
            <td style={{ padding: '1rem' }}>High (Rust)</td>
            <td style={{ padding: '1rem' }}>High (Go)</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <td style={{ padding: '1rem' }}><strong>Binary Size</strong></td>
            <td style={{ padding: '1rem', color: 'var(--primary-color)' }}>Small (~30MB)</td>
            <td style={{ padding: '1rem' }}>Large (100MB+)</td>
            <td style={{ padding: '1rem' }}>Tiny (~3MB)</td>
            <td style={{ padding: '1rem' }}>Small (~10MB)</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <td style={{ padding: '1rem' }}><strong>Developer Experience</strong></td>
            <td style={{ padding: '1rem', color: 'var(--primary-color)' }}>Very Easy</td>
            <td style={{ padding: '1rem' }}>Easy</td>
            <td style={{ padding: '1rem' }}>Hard (Rust)</td>
            <td style={{ padding: '1rem' }}>Medium</td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: '0.8rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
        * Size depends on Python dependencies included.
      </p>
    </div>
  );
}
