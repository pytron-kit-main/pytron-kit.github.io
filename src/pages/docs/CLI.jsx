export default function CLI() {
  return (
    <div className="prose">
      <h1>Command Line Interface</h1>
      <p>
        Pytron comes with an elegant, powerful CLI to manage your project lifecycle.
      </p>

      <h2>Commands</h2>

      <h3>Initialize</h3>
      <p>Scaffold a new project with your preferred frontend framework.</p>
      <pre><code>{`pytron init <project_name> --template <framework>`}</code></pre>
      <p>Supported templates: <code>react</code>, <code>vue</code>, <code>svelte</code>, <code>next</code>, <code>solid</code>, and more.</p>

      <h3>Run</h3>
      <p>Start the application. Use <code>--dev</code> for hot-reloading.</p>
      <pre><code>{`pytron run --dev`}</code></pre>

      <h3>Build Frontend</h3>
      <p>Compile your frontend assets.</p>
      <pre><code>{`pytron build-frontend`}</code></pre>

      <h3>Package</h3>
      <p>Create a standalone executable or installer.</p>
      <pre><code>{`# Create executable folder
pytron package

# Create NSIS Installer
pytron package --installer`}</code></pre>
    </div>
  );
}
