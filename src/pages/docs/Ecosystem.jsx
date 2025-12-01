export default function Ecosystem() {
  return (
    <div className="prose">
      <h1>Ecosystem</h1>
      <p>
        Pytron isn't just a backend library; it's a full stack solution with dedicated NPM packages 
        to make frontend integration seamless.
      </p>

      <h2>pytron-client</h2>
      <p>
        The core client library for communicating with the Python backend.
      </p>
      <pre><code>{`npm install pytron-client`}</code></pre>
      
      <pre><code>{`import pytron from 'pytron-client';

// Call Python functions
const result = await pytron.my_python_function();

// Listen to events
pytron.on('update', (data) => {
  console.log('Received update:', data);
});`}</code></pre>

      <h2>pytron-UI</h2>
      <p>
        A set of pre-built, native-feeling UI components designed to work perfectly with Pytron apps.
      </p>
      <pre><code>{`npm install pytron-ui`}</code></pre>

      <pre><code>{`import { WindowControls, Button } from 'pytron-ui';

function App() {
  return (
    <div>
      {/* Native-like window controls (Minimize, Maximize, Close) */}
      <WindowControls />
      
      <Button onClick={() => pytron.do_something()}>
        Click Me
      </Button>
    </div>
  );
}`}</code></pre>
    </div>
  );
}
