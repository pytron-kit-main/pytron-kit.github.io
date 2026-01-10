export default function CLI() {
      return (
            <div className="prose">
                  <h1>Command Line Interface</h1>
                  <p>
                        Pytron comes with an elegant, powerful CLI to manage your project lifecycle.
                  </p>

                  <h2>Configuration (settings.json)</h2>
                  <p>Configure every aspect of your application from a single source of truth.</p>
                  <pre><code className="language-json">{`{
  "title": "Agentic",
  "author": "Ghua8088",
  "version": "1.0.6",
  "dimensions": [1024, 768],
  "frameless": true,
  "splash_image": "splash.png",
  "frontend_provider": "npm",
  "force-package": ["llama_cpp"],
  "default_context_menu": false,
  "close_to_tray": true
}`}</code></pre>
                  <ul>
                        <li><strong>frontend_provider:</strong> Choose your default JS package manager: <code>npm</code>, <code>yarn</code>, <code>pnpm</code>, or <code>bun</code>.</li>
                        <li><strong>splash_image:</strong> Display a professional splash screen during startup.</li>
                        <li><strong>close_to_tray:</strong> Hide to system tray instead of closing when the exit button is clicked.</li>
                        <li><strong>force-package:</strong> Ensure complex modules (like LLM libraries) are correctly bundled.</li>
                        <li><strong>default_context_menu:</strong> Disable browser context menus to use custom <code>pytron-ui</code> menus.</li>
                  </ul>

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

# Proxy any npm command to the frontend directory
pytron frontend install
pytron frontend run dev

# Use a different provider (yarn, pnpm, bun)
pytron frontend --provider yarn add lucide-react
pytron frontend --provider bun run dev
pytron frontend --provider pnpm build

# Uninstall package
pytron uninstall numpy`}</code></pre>

                  <h3>Environment & Diagnostics</h3>
                  <p>Check your system for dependencies or show information about the current environment.</p>
                  <pre><code>{`# Run system diagnostic
pytron doctor

# Show environment info
pytron info

# List installed packages
pytron show`}</code></pre>

                  <h3>Run</h3>
                  <p>Start the application. Use <code>--dev</code> for hot-reloading.</p>
                  <pre><code>{`# Run with hot reload
pytron run --dev

# Run specific script
pytron run my_app.py`}</code></pre>


                  <h3>Packaging</h3>
                  <p>Create a standalone executable or installer. Use <code>--secure</code> for Agentic Shield or <code>--nuitka</code> for machine-code compilation.</p>
                  <pre><code>{`# Create standard executable
pytron package

# Pack with Agentic Shield (Encrypted)
pytron package --secure

# Compile with Nuitka (Machine Code)
pytron package --nuitka

# Create Professional Installer
pytron package --installer`}</code></pre>

                  <h3>Android (Experimental)</h3>
                  <p>Initialize and build for Android devices. This command syncs your Python logic and frontend into a pre-configured Android project template.</p>
                  <pre><code>{`# Initialize Android project
pytron android init

# Sync frontend & python files into android folder
pytron android sync

# Build & Run on connected device
pytron android build
pytron android run

# Reset to initial state
pytron android reset
`}</code></pre>
            </div>
      );
}
