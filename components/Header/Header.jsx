import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const Header = ({ isMenuOpen, toggleMenu, isScrolled }) => {
    const smoothScroll = useSmoothScroll();
    const menuAnimationRef = useRef(null);
    const location = useLocation();
    const isArticlePage = location.pathname.includes('/articles') || location.pathname.includes('/article');

    useEffect(() => {
        if (isArticlePage && isMenuOpen) {
            toggleMenu();
        }
    }, [isArticlePage, isMenuOpen, toggleMenu]);

    const handleNavClick = (e, id) => {
        e.preventDefault();

        if (isMenuOpen) {
            toggleMenu();
            clearTimeout(menuAnimationRef.current);
            menuAnimationRef.current = setTimeout(() => {
                smoothScroll(id);
            }, 300);
        } else {
            smoothScroll(id);
        }
    };

    return (
        <>
            <Helmet>
                <link rel="canonical" href={window.location.href} />
                <meta property="og:url" content={window.location.href} />
            </Helmet>

            {isMenuOpen && !isArticlePage && (
                <div
                    className={styles.backdrop}
                    onClick={toggleMenu}
                    aria-hidden="true"
                />
            )}

            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isArticlePage ? styles.articlePage : ''}`} id="header">
                <div className={styles.container}>
                    <nav className={styles.nav} aria-label="Основная навигация">
                        <Link to="/" className={`${styles.logo} ${isArticlePage ? styles.centeredLogo : ''}`} aria-label="На главную">
                            MirAI
                        </Link>

                        {!isArticlePage && (
                            <>
                                <button
                                    className={styles.mobileMenuBtn}
                                    onClick={toggleMenu}
                                    aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                                    aria-expanded={isMenuOpen}
                                    aria-controls="main-menu"
                                >
                                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                                </button>

                                <div
                                    id="main-menu"
                                    className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}
                                    aria-hidden={!isMenuOpen}
                                >
                                    {[
                                        ['problems', 'Проблемы'],
                                        ['features', 'Возможности'],
                                        ['how-it-works', 'Как работает'],
                                        ['cases', 'Кейсы'],
                                        ['pricing', 'Стоимость'],
                                        ['contact', 'Контакты']
                                    ].map(([id, text]) => (
                                        <a
                                            key={id}
                                            href={`#${id}`}
                                            onClick={(e) => handleNavClick(e, id)}
                                            className={styles.navLink}
                                            tabIndex={isMenuOpen ? 0 : -1}
                                            aria-label={`Перейти к разделу ${text}`}
                                        >
                                            {text}
                                        </a>
                                    ))}
                                    <Link
                                        to="/articles"
                                        className={styles.navLink}
                                        tabIndex={isMenuOpen ? 0 : -1}
                                        aria-label="Перейти к списку статей"
                                    >
                                        Статьи
                                    </Link>
                                </div>
                            </>
                        )}
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;