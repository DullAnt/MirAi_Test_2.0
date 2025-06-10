import React, { useEffect } from 'react';
import styles from './CaseStudies.module.css';

const CaseStudies = () => {
    useEffect(() => {
        const animateElements = document.querySelectorAll(`.${styles.caseCard}`);

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
        <section className={styles.caseStudies} id="cases">
            <div className="container">
                <div className="section-header">
                    <h2>Реальные кейсы наших клиентов</h2>
                    <p>Узнайте, каких результатов добились компании после внедрения MirAI</p>
                </div>
                <div className={styles.caseGrid}>
                    <div className={styles.caseCard}>
                        <div className={styles.caseHeader}>
                            <h3>Интернет-магазин техники</h3>
                            <h4>Отдел продаж: 5 менеджеров</h4>
                        </div>
                        <div className={styles.caseBody}>
                            <h4>Было:</h4>
                            <ul>
                                <li>Руководитель отдела продаж вручную слушал 3–5 звонков в день</li>
                                <li>Обратная связь доходила до менеджеров с опозданием или не доходила вовсе</li>
                                <li>Продажи «проседали» в пиковые сезоны, но причины были неясны</li>
                                <li>Новые сотрудники долго выходили на результат</li>
                            </ul>
                            <div className={styles.results}>
                                <h4>Результат за 2 месяца:</h4>
                                <ul>
                                    <li>Конверсия в продажу выросла с 22% до 28%</li>
                                    <li>Выручка увеличилась на 1,3 млн ₽</li>
                                    <li>Средний чек вырос на 12%</li>
                                    <li>Новички стали выходить на план за 1,5 недели вместо 4</li>
                                    <li>Экономия 150 000 ₽ на неэффективной зарплате</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.caseCard}>
                        <div className={styles.caseHeader}>
                            <h3>Образовательная онлайн-платформа</h3>
                            <h4>Отдел продаж: 10 менеджеров (аутсорс)</h4>
                        </div>
                        <div className={styles.caseBody}>
                            <h4>Было:</h4>
                            <ul>
                                <li>Невозможно было проконтролировать всех операторов</li>
                                <li>Аутсорс-команды "рисовали" отчёты, которые не соответствовали реальности</li>
                                <li>Деньги платились за звонки, а не за результат</li>
                                <li>90% новых сотрудников уходили в первый месяц</li>
                            </ul>
                            <div className={styles.results}>
                                <h4>Результат за 30 дней:</h4>
                                <ul>
                                    <li>Экономия 240 000 ₽ на неэффективных звонках</li>
                                    <li>Уволили 6 аутсорс-менеджеров</li>
                                    <li>Конверсия в оплату выросла с 25% до 45%</li>
                                    <li>Руководитель перестал участвовать в ежедневных разборах</li>
                                    <li>Уровень дисциплины и мотивации вырос</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.caseCard}>
                        <div className={styles.caseHeader}>
                            <h3>Оптовая компания</h3>
                            <h4>Отдел продаж: 8 менеджеров (В2В)</h4>
                        </div>
                        <div className={styles.caseBody}>
                            <h4>Было:</h4>
                            <ul>
                                <li>Менеджеры "забывали" фиксировать запросы от клиентов</li>
                                <li>Потерянные заявки из-за неправильной коммуникации</li>
                                <li>Руководитель слышал: "Все хорошо", но цифры не росли</li>
                                <li>Скрипт был — но использовался хаотично</li>
                                <li>Часто терялись крупные сделки</li>
                            </ul>
                            <div className={styles.results}>
                                <h4>Результат за 45 дней:</h4>
                                <ul>
                                    <li>Количество завершённых сделок выросло на 15%</li>
                                    <li>Обнаружено 3 неэффективных менеджера</li>
                                    <li>Внедрены точечные корректировки в скрипт</li>
                                    <li>Повторные обращения увеличились на 25%</li>
                                    <li>Руководитель исключил ручной контроль звонков</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;