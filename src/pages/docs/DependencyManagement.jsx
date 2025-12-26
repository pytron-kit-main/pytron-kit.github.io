export default function DependencyManagement() {
  return (
    <div className="prose">
      <h1>Dependency Management</h1>

      <p>
        Pytron provides a simple dependency management workflow. Use the <strong>pytron install</strong> command
        to add packages into the environment that Pytron manages (a virtualenv created by Pytron).
      </p>

      <h2>Install a single package</h2>
      <pre><code>{`pytron install [dependency-name]`}</code></pre>
      <p>
        Example: <code>pytron install numpy</code> will create (or reuse) the Pytron-managed venv and install
        the requested package into it.
      </p>

      <h2>Uninstall a package</h2>
      <pre><code>{`pytron uninstall [dependency-name]`}</code></pre>
      <p>
        Example: <code>pytron uninstall numpy</code> will remove the package from the venv and automatically
        update your <code>requirements.json</code>.
      </p>

      <h2>requirements.json</h2>
      <p>
        If you run <code>pytron install</code> with no package name, Pytron will look for a <code>requirements.json</code>
        file in your project root and install all listed dependencies.
      </p>

      <pre><code className="language-json">{`{
  "dependencies": [
    "pytron-kit",
    "numpy"
  ]
}`}</code></pre>

      <p>
        The file must be valid JSON and contain a top-level <code>dependencies</code> array of package names.
      </p>

      <h2>Behavior</h2>
      <ul>
        <li>Running <code>pytron install &lt;name&gt;</code> installs the named package into the Pytron venv.</li>
        <li>Running <code>pytron install</code> with no arguments installs all packages from <code>requirements.json</code>.</li>
        <li>Pytron creates the venv automatically if it does not exist.</li>
      </ul>
    </div>
  );
}
