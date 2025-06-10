import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
            {/*    <div className={styles.footerContent}>*/}
            {/*        <div className={styles.footerLogo}>MirAI</div>*/}
            {/*        <div className={styles.footerLinks}>*/}
            {/*            <a href="#problems">Проблемы</a>*/}
            {/*            <a href="#features">Возможности</a>*/}
            {/*            <a href="#how-it-works">Как работает</a>*/}
            {/*            <a href="#cases">Кейсы</a>*/}
            {/*            <a href="#pricing">Стоимость</a>*/}
            {/*            <a href="#contact">Контакты</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
                <div className={styles.copyright}>
                    © 2023 MirAI. Все права защищены.
                </div>
            </div>
        </footer>
    );
};

export default Footer;