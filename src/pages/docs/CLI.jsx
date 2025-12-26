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

      <h3>Install & Uninstall</h3>
      <p>Manage Python dependencies in your project's virtual environment.</p>
      <pre><code>{`# Install from requirements.json
pytron install

# Install specific package
pytron install numpy

# Uninstall package
pytron uninstall numpy`}</code></pre>

      <h3>Environment & Diagnostics</h3>
      <p>Check your system for dependencies or show installed packages.</p>
      <pre><code>{`# Run system diagnostic
pytron doctor

# List installed packages
pytron show`}</code></pre>

      <h3>Run</h3>
      <p>Start the application. Use <code>--dev</code> for hot-reloading. Pytron supports both native system webviews and PySide6 for professional desktop features.</p>
      <pre><code>{`# Run with hot reload
pytron run --dev

# Run with PySide6 engine
pytron run --pyside6`}</code></pre>


      <h3>Packaging</h3>
      <p>Create a standalone executable or installer. Pytron applies aggressive pruning for PySide6 to keep builds lightweight.</p>
      <pre><code>{`# Create executable folder
pytron package

# Pack with PySide6 engine
pytron package --pyside6

# Create Professional Installer
pytron package --installer`}</code></pre>

      <h3>Android (Experimental)</h3>
      <p>Initialize and build for Android devices.</p>
      <pre><code>{`# Initialize Android project
pytron android init

# Sync frontend & python files into android folder
pytron android sync

# Build Debug APK
pytron android build

# Reset to initial state
pytron android reset

# Build Play Store Bundle (AAB)
pytron android build --aab
`}</code></pre>
    </div>
  );
}
