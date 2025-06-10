import React from 'react';
import styles from './Hero.module.css';
import { FaArrowRight, FaChartLine, FaRobot, FaHeadset, FaUserShield, FaLightbulb } from 'react-icons/fa';
import robotImage from '../../assets/images/robot.png';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const Hero = () => {
    const smoothScroll = useSmoothScroll();
    const cubeItems = [
        { icon: <FaChartLine />, text: "Аналитика" },
        { icon: <FaRobot />, text: "ИИ-разметка" },
        { icon: <FaHeadset />, text: "Оценка звонков" },
        { icon: <FaUserShield />, text: "Контроль качества" },
        { icon: <FaLightbulb />, text: "Рекомендации" }
    ];

    const handleScrollToContact = (e) => {
        e.preventDefault();
        smoothScroll('contact');
    };

    return (
        <div className={styles.hero} id='hero'>
            <img src={robotImage} alt="AI Robot" className={styles.robotImage} />

            <div className={styles.heroContent}>
                <h1>Увеличьте выручку на 40% уже за первый месяц</h1>
                <p>с помощью MirAI с ИИ-аналитикой звонков, который выявляет слабые места в продажах, экономит до 40 часов в месяц руководителю и избавляет от затрат на неэффективных сотрудников</p>

                <div className={styles.diamondGrid}>
                    {cubeItems.map((item, index) => (
                        <div key={index} className={styles.diamondItem}>
                            <div className={styles.diamondContent}>
                                <div className={styles.diamondIcon}>{item.icon}</div>
                                <div className={styles.diamondText}>{item.text}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <a
                    href="#contact"
                    className={styles.btn}
                    onClick={handleScrollToContact}
                >
                    Попробовать бесплатно <FaArrowRight className={styles.btnIcon} />
                </a>
            </div>
        </div>
    );
};

export default Hero;