import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './ScrollToTop.module.css';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const smoothScroll = useSmoothScroll();

    const toggleVisibility = () => {
        setIsVisible(window.pageYOffset > 300);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div
            className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
            onClick={() => smoothScroll('root', 0)}
            aria-label="Scroll to top"
        >
            <FaArrowUp className={styles.icon} />
        </div>
    );
};

export default ScrollToTop;