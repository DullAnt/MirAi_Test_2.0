import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import CaseStudies from './components/CaseStudies';
import Founder from './components/Founder';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetail from './pages/ArticleDetail';
import './App.css';

function MainPage() {
    return (
        <>
            <Helmet>
                <title>MirAI - Инновационные решения</title>
                <meta name="description" content="Передовые технологии и решения от MirAI" />
            </Helmet>
            <Hero />
            <Problems />
            <Features />
            <HowItWorks />
            <Benefits />
            <CaseStudies />
            <Founder />
            <Pricing />
            <CTA />
        </>
    );
}

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen && window.scrollY > 50) {
                setIsMenuOpen(false);
            }
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    return (
        <Router>
            <div className="App">
                <Helmet>
                    <html lang="ru" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="canonical" href={window.location.href} />
                </Helmet>

                <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isScrolled={isScrolled} />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/articles" element={<ArticlesPage />} />
                    <Route path="/article/:id" element={<ArticleDetail />} />
                </Routes>

                <Footer />
                <ScrollToTop />
            </div>
        </Router>
    );
}

export default App;