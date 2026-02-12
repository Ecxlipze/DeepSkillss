import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RegisterPage from './RegisterPage';
import FounderMessage from './FounderMessage';
import TraineePage from './TraineePage';
import ContactPage from './ContactPage';
import MediaPage from './MediaPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <CustomCursor />
      
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/founder-message" element={<FounderMessage />} />
        <Route path="/trainers" element={<TraineePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
