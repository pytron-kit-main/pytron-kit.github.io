import Mermaid from '../../components/Mermaid';
import SEO from '../../components/SEO';

export default function Architecture() {
  const diagram = `
graph TD
    subgraph "Frontend Process (Web Tech)"
        UI[Pytron UI<br/>React / Web Components]
        Client[Pytron Client<br/>JS Bridge & State]
        AppJS[User Frontend App<br/>React/Vite/Next.js]
        
        UI --> AppJS
        AppJS --> Client
    end

    subgraph "Bridge (IPC)"
        Msg[Native RPC & Events]
    end

    subgraph "Backend Process (Python)"
        Kit[Pytron Kit<br/>Core & Engine]
        UserPy[User Backend Code<br/>@app.expose]
        
        Kit --> UserPy
    end

    Client <-->|RPC Calls| Msg
    Msg <-->|Native Interface| Kit

    %% Data Flow
    UserPy -.->|State| Kit
    Kit -.->|Sync| Client
    Client -.->|Update| AppJS
  `;

  return (
    <div className="prose">
      <SEO
        title="Architecture"
        description="Deep dive into Pytron's modular architecture, native bridge, and state synchronization."
      />
      <h1>Architecture</h1>
      <p>
        Pytron is built on a modular architecture designed for security, high-performance IPC, and developer simplicity.
      </p>

      <Mermaid chart={diagram} />

      <h2>System Overview</h2>
      <p>
        The framework is split into three core pillars that work in harmony:
      </p>
      <ul>
        <li><strong>Pytron Kit (Python):</strong> The backend orchestrator. It manages the application lifecycle, selects the rendering engine, and handles native system calls.</li>
        <li><strong>Pytron Client (JavaScript):</strong> The bridge. It runs in the webview, provides a proxy for Python functions, and synchronizes state.</li>
        <li><strong>Pytron UI (Component Library):</strong> The interface layer. Standardized React components that make web apps feel like native software (TitleBars, Sidebars, etc.).</li>
      </ul>

      <h2>Direct Native Communication</h2>
      <p>
        Most "Python-as-UI" frameworks spin up a local HTTP server (Flask/FastAPI) and talk via network ports.
        Pytron is different: it uses a <strong>direct native bridge</strong>. This means zero latency, zero open ports, and zero firewall issues.
      </p>

      <pre><code>{`# Internal mechanism (simplified)
from pytron import App
app = App() 
app.run()`}</code></pre>

      <h2>Encapsulated State Sync</h2>
      <p>
        Pytron Kit implements a reactive system. When you update data in Python, it's automatically diffed and pushed across the native bridge to the Pytron Client, which triggers a re-render in your UI.
      </p>

      <p>
        Through automatic application manifest management on Windows, Pytron ensures your application is "Unicoded-by-default," preventing the common encoding crashes associated with Python on Windows.
      </p>

      <div className="foundation-box" style={{ marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
        <h3>A Foundation of Giants</h3>
        <p>
          Pytron doesn't reinvent the wheel. We leverage enterprise-grade technologies used by billions of devices daily:
        </p>
        <ul>
          <li>
            <a href="https://developer.microsoft.com/en-us/microsoft-edge/webview2/" target="_blank" rel="noopener noreferrer">
              Microsoft WebView2
            </a> - The same engine powering Microsoft Teams, Outlook, and Office.
          </li>
          <li>
            <a href="https://developer.apple.com/documentation/webkit" target="_blank" rel="noopener noreferrer">
              Apple WebKit
            </a> - The high-performance engine behind Safari and all macOS/iOS apps.
          </li>
          <li>
            <a href="https://pyo3.rs/" target="_blank" rel="noopener noreferrer">
              PyO3 (Rust/Python)
            </a> - The industry-leading bridge for high-performance Python extensions, used in the Pytron Secure Bootloader.
          </li>
        </ul>
      </div>
    </div>
  );
}
