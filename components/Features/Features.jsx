import React, { useEffect } from 'react';
import styles from './Features.module.css';
import { FaCommentDots, FaFileAlt, FaChartLine, FaPercentage, FaTelegram, FaTable } from 'react-icons/fa';
import robotImage from '../../assets/images/robot_notebook.png';

const Features = () => {
    useEffect(() => {
        const animateElements = document.querySelectorAll(`.${styles.featureCard}`);

        const checkAnimation = () => {
            animateElements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementPosition < windowHeight - 100) {
                    element.classList.add(styles.animate);
                }
            });
        };

        checkAnimation();
        window.addEventListener('scroll', checkAnimation);
        return () => window.removeEventListener('scroll', checkAnimation);
    }, []);

    return (
        <section className={styles.features} id="features">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2>Что умеет MirAI</h2>
                    <p>Полный контроль над качеством продаж без вашего участия</p>
                </div>

                <div className={styles.contentWrapper}>
                    <img
                        src={robotImage}
                        alt="AI Assistant"
                        className={styles.sideRobot}
                    />
                    
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <FaCommentDots />
                            </div>
                            <h3>Транскрибирует звонки</h3>
                            <p>Превращает голос в текст без искажений с точностью до 98%</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <FaFileAlt />
                            </div>
                            <h3>Сравнивает с вашим скриптом</h3>
                            <p>Фиксирует, где менеджер отклоняется от скрипта или упускает этапы</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <FaChartLine />
                            </div>
                            <h3>Анализирует эффективность</h3>
                            <p>Находит системные ошибки и повторяющиеся проблемы в работе</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <FaPercentage />
                            </div>
                            <h3>Формирует оценку</h3>
                            <p>Дает количественную оценку эффективности каждого менеджера</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <FaTelegram />
                            </div>
                            <h3>Отправляет отчёты в Telegram</h3>
                            <p>Мгновенные уведомления после каждого звонка или итоги дня</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <FaTable />
                            </div>
                            <h3>Показывает статистику</h3>
                            <p>Вся аналитика по сотрудникам и отделу в одном месте</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;