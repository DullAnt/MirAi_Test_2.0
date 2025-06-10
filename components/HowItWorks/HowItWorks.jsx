import React, { useEffect } from 'react';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
    useEffect(() => {
        const animateElements = document.querySelectorAll(`.${styles.step}`);

        const checkAnimation = () => {
            animateElements.forEach((element, index) => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementPosition < windowHeight - 100) {
                    // Добавляем задержку для последовательного появления
                    element.style.transitionDelay = `${index * 0.1}s`;
                    element.classList.add(styles.animate);
                }
            });
        };

        checkAnimation();
        window.addEventListener('scroll', checkAnimation);
        return () => window.removeEventListener('scroll', checkAnimation);
    }, []);

    return (
        <section className={styles.howItWorks} id="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2>Как это работает</h2>
                    <p>Просто, точно и без вашего участия</p>
                </div>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <div className={styles.stepContent}>
                            <h3>Менеджер звонит клиенту</h3>
                            <p>Звонок автоматически записывается через вашу телефонную систему</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <div className={styles.stepContent}>
                            <h3>Бот получает запись и расшифровывает разговор</h3>
                            <p>Система превращает аудио в текст с высокой точностью</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <div className={styles.stepContent}>
                            <h3>Сверяет с вашим скриптом продаж</h3>
                            <p>Проверяются все этапы: приветствие, выявление потребности, презентация, работа с возражениями, закрытие сделки</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>4</div>
                        <div className={styles.stepContent}>
                            <h3>Находит ошибки и отклонения</h3>
                            <p>Выявляет, где менеджер сбился, что упустил, где не донес ценность продукта</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>5</div>
                        <div className={styles.stepContent}>
                            <h3>Формирует отчёт</h3>
                            <p>Сильные и слабые стороны менеджера, оценка эффективности в процентах, текстовая обратная связь, таблица по ключевым показателям</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>6</div>
                        <div className={styles.stepContent}>
                            <h3>Присылает результат в Telegram</h3>
                            <p>Вы получаете краткий, понятный отчёт. Менеджер — обратную связь. Всё происходит автоматически, без задержек и ручной работы</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;