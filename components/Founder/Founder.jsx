import React from 'react';
import styles from './Founder.module.css';

const Founder = () => {
    return (
        <section className={styles.founder}>
            <div className="container">
                <div className={styles.founderContent}>
                    <img
                        src={require('../../assets/images/placeholder.jpg')}
                        alt="Валерий Елизаров"
                        className={styles.founderImg}
                    />
                    <h3>Валерий Елизаров</h3>
                    <p className={styles.position}>Серийный предприниматель, стратег и практик</p>
                    <p className={styles.description}>
                        Более 10 лет в бизнесе — прошёл путь от первых звонков до создания масштабных систем продаж.
                        Основатель нескольких прибыльных проектов в разных отраслях. Умеет выстраивать процессы,
                        которые работают без постоянного контроля.
                    </p>
                    <p className={styles.description}>
                        MirAI я создал не ради "стартапа", а чтобы решить свою собственную боль — устал терять деньги
                        из-за ошибок менеджеров и "пустых" звонков.
                    </p>
                    <p className={styles.highlight}>
                        Этот бот — не теоретическое решение. Это инструмент, который появился прямо из моего бизнеса,
                        из реальных проблем, с которыми сталкивается каждый собственник.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Founder;