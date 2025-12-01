export default function Architecture() {
  return (
    <div className="prose">
      <h1>Architecture</h1>
      <p>
        Pytron is built on a unique architecture designed for security, performance, and simplicity.
      </p>

      <h2>No Sockets, No HTTP Server</h2>
      <p>
        Most Python-to-Web frameworks spin up a local HTTP server (Flask/FastAPI) and communicate via localhost. 
        This introduces latency, security risks (open ports), and firewall issues.
      </p>
      <p>
        <strong>Pytron does not use a local web server.</strong> Instead, it serves files directly using the 
        <code>file://</code> protocol via <strong>pywebview</strong>.
      </p>

      <pre><code>{`# Internal mechanism (simplified)
import webview

# Pytron loads your entry point directly
webview.create_window(
    'My App', 
    'file:///path/to/dist/index.html', # Direct file access
    js_api=api_instance
)`}</code></pre>

      <h2>Secure Bridge</h2>
      <p>
        Communication between Python and JavaScript happens through a secure, direct bridge provided by the webview. 
        This eliminates the overhead of HTTP requests and JSON serialization over the network.
      </p>

      <h2>UTF-8 & Manifest Support</h2>
      <p>
        Windows applications often struggle with Unicode characters. Pytron automatically handles 
        <strong>Application Manifests</strong> to ensure full UTF-8 support throughout your application, 
        allowing for international characters in paths and UI without encoding errors.
      </p>
    </div>
  );
}
