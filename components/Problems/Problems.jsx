import React, { useEffect } from 'react';
import styles from './Problems.module.css';
import { FaStore, FaBuilding, FaNetworkWired } from 'react-icons/fa';

const Problems = () => {
    useEffect(() => {
        const animateElements = document.querySelectorAll(`.${styles.problemCard}`);

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
        <section className={styles.problems} id="problems">
            <div className="container">
                <div className="section-header">
                    <h2>Вы платите зарплату менеджерам за ошибки?</h2>
                    <p>Узнайте, какие проблемы решает MirAI для бизнесов разных масштабов</p>
                </div>
                <div className={styles.problemsGrid}>
                    <div className={styles.problemCard}>
                        <h3><FaStore className={styles.problemIcon} /> Малый бизнес</h3>
                        <p className={styles.problemSubtitle}>(отдел продаж до 10 человек)</p>
                        <ul>
                            <li>Руководитель сам пытается слушать звонки, но не успевает</li>
                            <li>Нет понимания, кто из менеджеров работает, а кто "делает вид"</li>
                            <li>Бюджет не позволяет нанять контролёра</li>
                            <li>Скрипт есть, но никто не знает, работает ли он</li>
                            <li>Текучка — новички не обучаются, ошибок много и они повторяются</li>
                            <li>Каждый потерянный клиент — ощутимый удар по доходу</li>
                        </ul>
                    </div>
                    <div className={styles.problemCard}>
                        <h3><FaBuilding className={styles.problemIcon} /> Средний бизнес</h3>
                        <p className={styles.problemSubtitle}>(отдел продаж 10–50 человек)</p>
                        <ul>
                            <li>Сотни звонков в день — всё вручную не проверить</li>
                            <li>Отдел контроля работает, но нет единого стандарта оценки</li>
                            <li>Растут издержки на контроль, а продажи — нет</li>
                            <li>Менеджеры отходят от скриптов, теряют клиентов</li>
                            <li>Ошибки повторяются — никто не собирает аналитику</li>
                            <li>Масштабирование - больше нагрузки, а не больше прибыли</li>
                        </ul>
                    </div>
                    <div className={styles.problemCard}>
                        <h3><FaNetworkWired className={styles.problemIcon} /> Франшизы и сети</h3>
                        <p className={styles.problemSubtitle}>(сетевые компании и франчайзи)</p>
                        <ul>
                            <li>В каждом филиале свой уровень сервиса — клиентский опыт нестабилен</li>
                            <li>Центральный офис не видит, что происходит "на местах"</li>
                            <li>Бренд страдает из-за ошибок менеджеров в регионах</li>
                            <li>Требуется единый стандарт общения с клиентом — его нет</li>
                            <li>Новые франчайзи ошибаются, учатся на своих провалах</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problems;