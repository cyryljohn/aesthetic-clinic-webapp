import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModernHeader from './components/layout/ModernHeader';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Chatbot from './components/chat/Chatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ModernHeader />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;