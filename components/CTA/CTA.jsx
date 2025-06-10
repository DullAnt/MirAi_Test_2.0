import React from 'react';
import styles from './CTA.module.css';
import { FaTelegram, FaEnvelope, FaPhoneAlt, FaQrcode } from 'react-icons/fa';
import handImage from '../../assets/images/robot_hand.png';

const CTA = () => {
    const telegramLink = 'https://t.me/+rggeWOsnrlZmM2Uy';
    const telegramUsername = 'milt_vs';
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(telegramLink)}&bgcolor=ffffff&color=000000&qzone=1`;

    return (
        <section className={styles.cta} id="contact">
            <img
                src={handImage}
                alt="Hand pointing"
                className={styles.handImage}
            />
            <div className={styles.ctaContent}>
                <div className={styles.textWithHand}>
                    <h2>Оставьте заявку — и уже через 5 дней вы будете знать, кто "продаёт", а кто просто "звонит"</h2>
                </div>

                <p>Ответим в течение 1 рабочего дня. Работаем по всей России и СНГ.</p>
                <a href={telegramLink} className={styles.btn} target="_blank" rel="noopener noreferrer">
                    Оставить заявку
                </a>

                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <FaTelegram className={styles.contactIcon} />
                        <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                            @{telegramUsername}
                        </a>
                    </div>
                    <div className={styles.contactItem}>
                        <FaEnvelope className={styles.contactIcon} />
                        <a href="mailto:89201593637@mail.ru">89201593637@mail.ru</a>
                    </div>
                    <div className={styles.contactItem}>
                        <FaPhoneAlt className={styles.contactIcon} />
                        <a href="tel:+79998723051">+7 (999) 872-30-51</a>
                    </div>
                </div>

                <div className={styles.qrBlock}>
                    <div className={styles.qrCard}>
                        <a href={telegramLink} target="_blank" rel="noopener noreferrer" className={styles.qrCodeWrapper}>
                            <img
                                src={qrCodeUrl}
                                alt="Telegram QR Code"
                                className={styles.qrImage}
                            />
                            <FaQrcode className={styles.qrIcon} />
                        </a>
                        <div className={styles.qrText}>
                            <h3>Напишите в Telegram</h3>
                            <p>Наведите камеру на QR-код</p>
                            {/*<a href={telegramLink} target="_blank" rel="noopener noreferrer" className={styles.qrLink}>*/}
                            {/*    t.me/{telegramUsername}*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;