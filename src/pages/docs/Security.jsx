export default function Security() {
    return (
        <div className="prose">
            <h1>Security: Agentic Shield(Alpha)</h1>
            <p>
                Pytron takes Intellectual Property protection seriously. While Python is traditionally easy to decompile, Pytron's <strong>Agentic Shield</strong> provides a multi-layered security system to protect your source code.
            </p>

            <h2>How it Works</h2>
            <p>
                When you package your application using <code>pytron package --secure</code>, Pytron fundamentally changes the way your application boots and executes.
            </p>

            <ol>
                <li>
                    <strong>AES-256-GCM Encryption:</strong> Your Python source code is compressed and encrypted using industrial-grade AES-256-GCM.
                </li>
                <li>
                    <strong>Rust Bootloader:</strong> A custom-built Rust binary is used as the application entry point. This binary contains the logic to decrypt your code in memory.
                </li>
                <li>
                    <strong>Binary Sealing:</strong> The encryption key is unique to every build and is embedded into the executable's footer alongside a security magic signature (<code>PYTRON_K</code>).
                </li>
                <li>
                    <strong>In-Memory Execution:</strong> Your code never touches the disk in a readable format. The Rust bootloader uses <code>PyO3</code> to feed the decrypted source directly into the Python interpreter's memory.
                </li>
            </ol>

            <h2>Anti-Debugging Features</h2>
            <p>
                The secure bootloader includes passive evolution and active protection against reverse engineering:
            </p>
            <ul>
                <li><strong>IsDebuggerPresent:</strong> Detects if a debugger is attached and gracefully terminates the process.</li>
                <li><strong>Timing Checks:</strong> Uses high-resolution timers to detect if the code execution is being manually stepped through or slowed down by an analysis tool.</li>
                <li><strong>Environment Isolation:</strong> Forcefully clears toxic environment variables (<code>PYTHONPATH</code>, <code>PYTHONHOME</code>) to prevent dependency hijacking.</li>
            </ul>

            <h2>Usage</h2>
            <p>
                Protecting your app is as simple as adding a flag to your packaging command:
            </p>
            <pre><code>{`pytron package --secure`}</code></pre>

            <div className="info-box" style={{ background: 'rgba(234, 179, 8, 0.1)', padding: '1rem', borderRadius: '0.5rem', marginTop: '2rem' }}>
                <strong>Note on Antivirus:</strong> Because the Shield decrypts code in memory, some sensitive antivirus programs (like Windows Defender) may flag unsigned binaries as suspicious. It is highly recommended to <strong>digitally sign</strong> your executables for production distribution.
            </div>

        </div>
    );
}
