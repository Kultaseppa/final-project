import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import FormPage from './pages/FormPage';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', fontFamily: 'sans-serif', minHeight: '100vh' }}>
        <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
          <Link to="/" style={{ color: '#fff', marginRight: '15px' }}>Koti</Link>
          <Link to="/form" style={{ color: '#fff' }}>Lomake</Link>
        </nav>
        
        <Header />
        
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;