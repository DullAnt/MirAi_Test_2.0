import React, { useEffect } from 'react';
import styles from './Pricing.module.css';
import { FaCheck } from 'react-icons/fa';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const Pricing = () => {
    const smoothScroll = useSmoothScroll();

    useEffect(() => {
        const animateElements = document.querySelectorAll(`.${styles.pricingCard}`);

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

    const handleScrollToContact = (e) => {
        e.preventDefault();
        smoothScroll('contact');
    };

    return (
        <section className={styles.pricing} id="pricing">
            <div className="container">
                <div className={styles.pricingHeader}>
                    <h2>Сколько это стоит</h2>
                    <p>Гибкая система оплаты только за фактически проанализированные звонки</p>
                </div>
                <div className={styles.pricingGrid}>
                    <div className={styles.pricingCard}>
                        <h3>Малый отдел</h3>
                        <div className={styles.price}>2 400 ₽<span>/мес</span></div>
                        <ul>
                            <li><FaCheck className={styles.checkIcon} /> 5 менеджеров</li>
                            <li><FaCheck className={styles.checkIcon} /> 400 звонков в месяц</li>
                            <li><FaCheck className={styles.checkIcon} /> 2 мин. средний звонок</li>
                            <li><FaCheck className={styles.checkIcon} /> 800 минут анализа</li>
                            <li><FaCheck className={styles.checkIcon} /> 3 ₽ за минуту</li>
                        </ul>
                        <a
                            href="#contact"
                            className={styles.btn}
                            onClick={handleScrollToContact}
                        >
                            Заказать
                        </a>
                    </div>
                    <div className={`${styles.pricingCard} ${styles.popular}`}>
                        <h3>Активный отдел</h3>
                        <div className={styles.price}>9 000 ₽<span>/мес</span></div>
                        <ul>
                            <li><FaCheck className={styles.checkIcon} /> 15 менеджеров</li>
                            <li><FaCheck className={styles.checkIcon} /> 1 200 звонков</li>
                            <li><FaCheck className={styles.checkIcon} /> 2.5 мин. средний звонок</li>
                            <li><FaCheck className={styles.checkIcon} /> 3 000 минут анализа</li>
                            <li><FaCheck className={styles.checkIcon} /> 3 ₽ за минуту</li>
                        </ul>
                        <a
                            href="#contact"
                            className={styles.btn}
                            onClick={handleScrollToContact}
                        >
                            Заказать
                        </a>
                    </div>
                    <div className={styles.pricingCard}>
                        <h3>Сетевой отдел</h3>
                        <div className={styles.price}>36 000 ₽<span>/мес</span></div>
                        <ul>
                            <li><FaCheck className={styles.checkIcon} /> 30+ менеджеров</li>
                            <li><FaCheck className={styles.checkIcon} /> 4 000 звонков</li>
                            <li><FaCheck className={styles.checkIcon} /> 3 мин. средний звонок</li>
                            <li><FaCheck className={styles.checkIcon} /> 12 000 минут анализа</li>
                            <li><FaCheck className={styles.checkIcon} /> 3 ₽ за минуту</li>
                        </ul>
                        <a
                            href="#contact"
                            className={styles.btn}
                            onClick={handleScrollToContact}
                        >
                            Заказать
                        </a>
                    </div>
                </div>
                <div className={styles.pricingModel}>
                    <h3>Честная модель «сначала результат, потом счёт»</h3>
                    <ul>
                        <li><FaCheck className={styles.checkIcon} /> Подписка — 3 ₽ за 1 минуту анализируемого звонка</li>
                        <li><FaCheck className={styles.checkIcon} /> Без абонентской платы</li>
                        <li><FaCheck className={styles.checkIcon} /> Только по факту использования</li>
                        <li><FaCheck className={styles.checkIcon} /> Если не пользуетесь — не платите</li>
                        <li><FaCheck className={styles.checkIcon} /> Модель пост-оплаты</li>
                        <li><FaCheck className={styles.checkIcon} /> Разовая настройка — от 100 000 ₽</li>
                    </ul>
                    <p className={styles.pricingNote}>
                        Точная стоимость рассчитывается индивидуально после анализа ваших процессов
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;