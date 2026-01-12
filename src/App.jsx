import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import GlobalMobileNav from './components/GlobalMobileNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Examples from './pages/Examples';
import BitePage from './pages/Bite';
import RequestsStudioPage from './pages/RequestsStudio';
import NotFound from './pages/NotFound';
import SEO from './components/SEO';
import './App.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <SEO />

      <div className="app-container">
        <Navbar />
        <GlobalMobileNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/bite" element={<BitePage />} />
          <Route path="/requests-studio" element={<RequestsStudioPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
