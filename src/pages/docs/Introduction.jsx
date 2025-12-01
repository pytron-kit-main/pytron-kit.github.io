export default function Introduction() {
  return (
    <div className="prose">
      <h1>Introduction to Pytron</h1>
      <p>
        Pytron is a modern, lightweight framework for building desktop applications using Python for the backend and web technologies for the frontend.
        It bridges the gap between the powerful Python ecosystem and the rich user interfaces of the modern web.
      </p>
      <h2>Installation</h2>
      <p>
        Getting started with Pytron is easy. You can install it via pip:
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

      <h2>Why Pytron?</h2>
      <p>
        Unlike other frameworks that bundle a full browser (like Electron) or rely on complex local servers, Pytron takes a different approach.
        It leverages the system's native webview and communicates directly, offering a smaller footprint and better performance.
      </p>

      <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--primary-color)', marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginTop: 0 }}>Check out the Example</h3>
        <p>
          See Pytron in action with the <strong>Pytron Task Manager</strong>. A fully functional Todo application showcasing the power of the framework.
        </p>
        <a href="https://github.com/Ghua8088/pytron-task-manager" target="_blank" className="btn btn-primary">
          View Example Project
        </a>
      </div>
    </div>
  );
}
