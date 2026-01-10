export default function VAP() {
    return (
        <div className="prose">
            <h1>Virtual Asset Provider (VAP)</h1>
            <p>
                The <strong>Virtual Asset Provider</strong> is Pytron's high-performance, zero-copy binary bridge. It allows you to stream massive datasets, video frames, and AI tensors between Python and JavaScript without the "Base64 Tax."
            </p>

            <h2>The Problem: The Base64 Tax</h2>
            <p>
                In standard webview frameworks, sending an image looks like this:
                <br />
                <code>Python Bytes → Base64 String (+33% size) → IPC Message → JS String → Browser Decode → Bits</code>
            </p>
            <p>
                This process is slow, wastes CPU, and causes UI stutters when dealing with high-frequency data (like 60FPS video).
            </p>

            <h2>The Solution: <code>pytron://</code></h2>
            <p>
                VAP allows the Python backend to <strong>serve</strong> data into a memory pool that the frontend can <strong>pull</strong> from using standard web protocols.
            </p>

            <h3>Step 1: Serve from Python</h3>
            <pre><code className="language-python">{`# Serve raw binary data
image_bytes = model.generate_image()
window.serve_data("my-image", image_bytes, "image/jpeg")`}</code></pre>

            <h3>Step 2: Consumption in JavaScript</h3>
            <p>
                Pytron automatically intercepts the <code>pytron://</code> protocol. You can use it in tags or fetch calls.
            </p>
            <pre><code className="language-jsx">{`// React/HTML tag (Auto-intercepted)
<img src="pytron://my-image" />

// Raw fetch
const res = await fetch('pytron://my-image');
const blob = await res.blob();`}</code></pre>

            <h2>Technical Implementation: The Latin-1 Trick</h2>
            <p>
                Since IPC bridges are typically string-based, Pytron uses a specialized <strong>Latin-1 mapping</strong>. Every byte (0-255) is mapped to its exact Unicode equivalent, allowing raw bits to travel inside a string container without corruption. On the JS side, the interceptor re-assembles these into a <code>Uint8Array</code> and finally a <code>Blob</code>.
            </p>

            <h2>Virtual File Mapping</h2>
            <p>
                VAP isn't just for memory. It also creates a secure sandbox for your application files. Any file inside your project root is reachable via:
            </p>
            <pre><code>{`pytron://app/assets/logo.png`}</code></pre>
            <p>
                This is faster and more secure than using <code>file://</code> URLs, as it includes built-in path-traversal protection.
            </p>

        </div>
    );
}
