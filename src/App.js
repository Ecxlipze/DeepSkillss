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
import FullStackPage from './FullStackPage';
import WordPressPage from './WordPressPage';
import LaravelPage from './LaravelPage';
import GraphicPage from './GraphicPage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import ProfilePage from './ProfilePage';

import ScrollProgressBar from './components/ScrollProgressBar';
import GoToTopButton from './components/GoToTopButton';

import { AnimatePresence } from 'framer-motion';
import GlobalOverlay from './components/GlobalOverlay';
import PageTransition from './components/PageTransition';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <GlobalOverlay />
        <ScrollProgressBar />
        <GoToTopButton />
        <CustomCursor />
        
        <Header />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/media" element={<PageTransition><MediaPage /></PageTransition>} />
            <Route path="/full-stack-react" element={<PageTransition><FullStackPage /></PageTransition>} />
            <Route path="/wordpress-mastery" element={<PageTransition><WordPressPage /></PageTransition>} />
            <Route path="/laravel-mastery" element={<PageTransition><LaravelPage /></PageTransition>} />
            <Route path="/graphic-design" element={<PageTransition><GraphicPage /></PageTransition>} />
            <Route path="/register" element={<PageTransition><RegisterPage /></PageTransition>} />
            <Route path="/founder-message" element={<PageTransition><FounderMessage /></PageTransition>} />
            <Route path="/trainers" element={<PageTransition><TraineePage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
            <Route path="/login" element={<PageTransition><LoginPage /></PageTransition>} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <PageTransition><DashboardPage /></PageTransition>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <PageTransition><ProfilePage /></PageTransition>
                </ProtectedRoute>
              } 
            />
          </Routes>
        </AnimatePresence>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;

