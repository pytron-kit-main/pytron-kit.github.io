export default function BinaryEvolution() {
    return (
        <div className="prose">
            <h1>Binary Evolution (Patching)</h1>
            <p>
                Pytron's Secure Shield doesn't just protect your code; it allows your application to "evolve" efficiently. Instead of forcing users to download a massive 50MB installer for every minor bug fix, you can distribute tiny <strong>Evolution Patches</strong> (often under 5KB) that the system applies instantly.
            </p>

            <h2>The Concept</h2>
            <p>
                When using <strong>Agentic Shield</strong>, your Python logic is stored in an encrypted payload file called <code>app.pytron</code>. Since the core Python runtime and engine binaries rarely change, we only need to update this specific payload. By using binary diffing (BSDIFF), we can generate a patch that represents only the difference between your old version and your new version.
            </p>

            <div className="info-box" style={{ borderLeft: '4px solid var(--primary-color)', padding: '1rem', background: 'rgba(6, 182, 212, 0.05)', margin: '2rem 0' }}>
                <h3>Why it matters:</h3>
                <ul>
                    <li><strong>Speed:</strong> Updates that take seconds, not minutes.</li>
                    <li><strong>Bandwidth:</strong> Reduced server costs and user data consumption.</li>
                    <li><strong>Zero Friction:</strong> Patching happens atomically in the background before the app even fully boots.</li>
                </ul>
            </div>

            <h2>1. Generating a Patch</h2>
            <p>
                To generate a patch, you need your new source code and the <code>app.pytron</code> file from your <strong>previous</strong> release.
            </p>
            <pre><code>{`pytron package --secure --patch-from ./releases/v1.0.0/app.pytron`}</code></pre>
            <p>
                This command will:
            </p>
            <ol>
                <li>Perform a standard secure build of your current code.</li>
                <li>Generate the new <code>app.pytron</code>.</li>
                <li>Calculate a binary diff against the provided old payload.</li>
                <li>Output a tiny <code>app.pytron_patch</code> file in your <code>dist</code> folder.</li>
            </ol>

            <h2>2. Distributing the Patch</h2>
            <p>
                When you host your update manifest (the <code>update.json</code>), include the <code>patch_url</code> field. Pytron's built-in <code>Updater</code> will automatically prioritize this tiny patch over the full installer.
            </p>
            <pre><code className="language-json">{`{
  "version": "1.0.1",
  "url": "https://cdn.myapp.com/MyApp_v101_Installer.exe",
  "patch_url": "https://cdn.myapp.com/patches/v100_to_v101.pytron_patch",
  "notes": "Fixed the login bug and improved performance."
}`}</code></pre>

            <h2>3. How the Loader Applies It</h2>
            <p>
                The <strong>Rust Bootloader</strong> handles the actual evolution logic. When the user's app restarts:
            </p>
            <ul>
                <li>The bootloader looks for <code>app.pytron_patch</code> in the root directory.</li>
                <li>It reads the local <code>app.pytron</code>, applies the binary patch in memory using the BSDIFF algorithm.</li>
                <li>It performs an <strong>Atomic Swap</strong>: saving the result back to <code>app.pytron</code> and deleting the patch.</li>
                <li>The app then proceeds to boot into the new version seamlessly.</li>
            </ul>

            <div className="warning-box" style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '0.5rem', marginTop: '2rem' }}>
                <strong>Important:</strong> Evolution Patches only work for <code>--secure</code> builds. If you change your project's dependencies (e.g., adding a new heavy library via pip), a full installer update is recommended to ensuring all binaries in the <code>_internal</code> folder are correctly updated.
            </div>

        </div>
    );
}
