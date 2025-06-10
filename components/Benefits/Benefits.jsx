import React, { useEffect } from 'react';
import styles from './Benefits.module.css';
import { FaCheckCircle, FaBullseye, FaClock, FaChartPie, FaWallet, FaUserGraduate, FaMoneyBillWave, FaDatabase } from 'react-icons/fa';

const Benefits = () => {
    useEffect(() => {
        const animateElements = document.querySelectorAll(`.${styles.benefitCard}`);

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
        <section className={styles.benefits}>
            <div className="container">
                <div className="section-header">
                    <h2>Ценность для вас</h2>
                    <p>Какие результаты вы получите от внедрения MirAI</p>
                </div>
                <div className={styles.benefitsGrid}>
                    <div className={styles.benefitCard}>
                        <h3><FaCheckCircle className={styles.benefitIcon} /> 100% звонков под контролем</h3>
                        <ul>
                            <li>Вы больше не теряете клиентов из-за "невидимых" ошибок</li>
                            <li>Ни один разговор не уходит без анализа</li>
                        </ul>
                    </div>
                    <div className={styles.benefitCard}>
                        <h3><FaBullseye className={styles.benefitIcon} /> 98% точности ИИ-анализа</h3>
                        <ul>
                            <li>Оценка основана на фактах, а не на мнении РОПа или самого менеджера</li>
                        </ul>
                    </div>
                    <div className={styles.benefitCard}>
                        <h3><FaClock className={styles.benefitIcon} /> До 40 часов в месяц</h3>
                        <ul>
                            <li>Руководитель и РОП не слушают звонки вручную</li>
                            <li>Освобождается минимум одна рабочая неделя — на развитие бизнеса</li>
                        </ul>
                    </div>
                    <div className={styles.benefitCard}>
                        <h3><FaChartPie className={styles.benefitIcon} /> До +40% рост выручки</h3>
                        <ul>
                            <li>За счёт исправления ошибок, повышения конверсии и дисциплины</li>
                            <li>Менеджеры начинают продавать, а не просто «разговаривать»</li>
                        </ul>
                    </div>
                    <div className={styles.benefitCard}>
                        <h3><FaWallet className={styles.benefitIcon} /> Окупаемость за 1–2 месяца</h3>
                        <ul>
                            <li>Рост продаж - экономия - возврат инвестиций с первых недель</li>
                        </ul>
                    </div>
                    <div className={styles.benefitCard}>
                        <h3><FaUserGraduate className={styles.benefitIcon} /> В 3 раза быстрее адаптация</h3>
                        <ul>
                            <li>Новички сразу получают чёткую обратную связь</li>
                            <li>Повторяющиеся ошибки устраняются на старте</li>
                        </ul>
                    </div>
                    <div className={styles.benefitCard}>
                        <h3><FaMoneyBillWave className={styles.benefitIcon} /> До 100 000 ₽ экономии</h3>
                        <ul>
                            <li>Быстро выявляются слабые сотрудники</li>
                            <li>Аутсорсеры, не дающие результата, больше не получают оплату</li>
                            <li>Новички учатся быстрее — не теряют клиентов в первый месяц</li>
                        </ul>
                    </div>
                    <div className={styles.benefitCard}>
                        <h3><FaDatabase className={styles.benefitIcon} /> Решения на основе данных</h3>
                        <ul>
                            <li>Вы видите цифры и сразу понимаете, где теряются деньги и что нужно менять</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;