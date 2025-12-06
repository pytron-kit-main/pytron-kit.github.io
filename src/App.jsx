import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Examples from './pages/Examples';
import './App.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/examples" element={<Examples />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
