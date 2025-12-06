export default function Features() {
  return (
    <div className="prose">
      <h1>Core Features</h1>

      <h2>Hot Reloading with Watchgod</h2>
      <p>
        Development speed matters. Pytron integrates <strong>watchgod</strong> to monitor your Python files. 
        When you save a change in your backend code, Pytron instantly restarts the application process, 
        keeping your development flow uninterrupted.
      </p>
      <pre><code>{`# Run in development mode
pytron run --dev

# [Pytron] Watching for file changes...
# [Pytron] Restarting app...`}</code></pre>

      <h2>Blazing Fast</h2>
      <p>
        Pytron is tuned for speed — fast startup, optimized bundling, and a lightweight runtime so your
        apps run with minimal overhead in both development and production.
      </p>

      <h2>Native Packaging (NSIS)</h2>
      <p>
        Distributing your app is just one command away. Pytron uses <strong>PyInstaller</strong> for bundling the executable 
        and <strong>NSIS (Nullsoft Scriptable Install System)</strong> to create professional Windows installers.
      </p>
      <p>
        It automatically generates an installer that:
      </p>
      <ul>
        <li>Installs your app to Program Files</li>
        <li>Creates Start Menu shortcuts</li>
        <li>Provides an uninstaller</li>
      </ul>

      <pre><code>{`pytron package --installer`}</code></pre>

      <h2>Dependency Management</h2>
      <p>
        Manage dependencies with <code>pytron install</code>. Run it with a package name to install a
        single dependency into Pytron's venv, or run it with no arguments to install packages from
        a <code>requirements.json</code> file in your project root.
      </p>
      <pre><code>{`# Install a single package
    pytron install numpy

    # Or install from requirements.json
    pytron install`}</code></pre>

      <h2>Type-Safe Bridge</h2>
      <p>
        Never guess your API methods again. Pytron can generate TypeScript definitions (`.d.ts`) 
        from your Python code, giving you full autocomplete and type checking in your frontend IDE.
      </p>
    </div>
  );
}
