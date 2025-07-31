import React from 'react';
import styles from '../services.module.css';
import {Link} from "react-router-dom";

function Page() {
    return (
        <section className={styles.serviceSection}>
            <h1 className='fs3 mfs3 m-b'>Оборудование систем охраны периметра</h1>
            <div className={styles.serviceContainer}>
                <div className={styles.divider}>
                    {typeof document !== 'undefined' && <Link to={"/services"} className={`${styles.navBtn} fs5 i-r`} viewTransition>
                        ←услуги
                    </Link>}
                </div>
            </div>
            <div>
                <img src="/images/services/perimeter-security-systems/perimeter-security.jpeg"
                     alt="Оборудование систем охраны периметра" className={styles.serviceImage}/>
                <div className='fs5 mfs6 i-r'>
                    <p className={styles.redLine}>Охрана внешних границ территорий предприятий является важной задачей
                        для обеспечения их
                        безопасности. Специальные комплексы технических средств, устанавливаемые вокруг периметра
                        охраняемого объекта, позволят избежать незаконного проникновения злоумышленников.</p>
                    <p className={styles.redLine}>Специалисты компании «тСк» подберут оптимальное решение для вашего
                        объекта, учитывая специфику
                        местности и требования законодательства. Мы обеспечиваем полную поддержку на всех этапах
                        проектирования, внедрения и последующего технического сопровождения.</p>
                    <br/>
                    <p><strong>Наше предложение включает:</strong></p>
                    <ul>
                        <li>- Инфракрасные датчики движения и периметральные видеокамеры.</li>
                        <li>- Системы акустического слежения и тепловые сенсоры.</li>
                        <li>- Комплексы автоматической блокировки и сигнализации.</li>
                    </ul>
                    <br/>
                    <p>Все наши решения соответствуют требованиям российских стандартов и проверены временем.</p>
                </div>
            </div>
        </section>
    );
}

export default Page;