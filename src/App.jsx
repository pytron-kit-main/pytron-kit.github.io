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
import TerminateCodePage from './pages/TerminateCode';
import PyDashPage from './pages/PyDash';
import NotFound from './pages/NotFound';
import SEO from './components/SEO';
import './App.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <SEO />

      <div className="app-container">
        <div className="background-beam" />
        <Navbar />
        <GlobalMobileNav />
        <Routes>
          <Route path="/" element={<><Home /><Footer /></>} />
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/examples" element={<><Examples /><Footer /></>} />
          <Route path="/bite" element={<><BitePage /><Footer /></>} />
          <Route path="/requests-studio" element={<><RequestsStudioPage /><Footer /></>} />
          <Route path="/terminate-code" element={<><TerminateCodePage /><Footer /></>} />
          <Route path="/pydash" element={<><PyDashPage /><Footer /></>} />
          <Route path="*" element={<><NotFound /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
