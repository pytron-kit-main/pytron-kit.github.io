import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Examples from './pages/Examples';
import BitePage from './pages/Bite';
import NotFound from './pages/NotFound';
import { Helmet } from 'react-helmet-async';
import './App.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Helmet>
        <title>Pytron-kit : Modern Python Desktop Apps</title>
        <meta name="description" content="Build cross-platform desktop applications with Python and web technologies. Pytron is lightweight, fast, and frontend framework agnostic." />
        <meta name="keywords" content="python, desktop app, electron alternative, gui, webview, react, vue" />
      </Helmet>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/bite" element={<BitePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
