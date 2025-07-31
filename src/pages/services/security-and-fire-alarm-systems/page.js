import React from 'react';
import styles from '../services.module.css';
import {Link} from "react-router-dom";

function Page() {
    return (
        <section className={styles.serviceSection}>
            <h1 className='fs3 mfs3 m-b'>Охранно-пожарная сигнализация и системы оповещения</h1>
            <div className={styles.serviceContainer}>
                <div className={styles.divider}>
                    {typeof document !== 'undefined' && <Link to={"/services"} className={`${styles.navBtn} fs5 i-r`} viewTransition>
                        ←услуги
                    </Link>}
                </div>
            </div>
            <div>
                <img src="/images/services/security-and-fire-alarm-systems/security-fire-alarm.jpg"
                     alt="Охранно-пожарная сигнализация" className={styles.serviceImage}/>
                <div className='fs5 mfs6 i-r'>
                    <p className={styles.redLine}>Система охранно-пожарной сигнализации является важным элементом
                        комплексной системы безопасности
                        любого предприятия.</p>
                    <p className={styles.redLine}>
                        Компания «тСк» обеспечивает разработку, монтаж и последующее обслуживание надежных и долговечных
                        систем пожарной безопасности.
                    </p>
                    <br/>
                    <p className={styles.redLine}>Наши сотрудники предлагают наиболее эффективные решения для
                        предотвращения чрезвычайных ситуаций,
                        своевременно реагируя на потенциальные угрозы пожара или несанкционированного проникновения.</p>
                    <br/>
                    <p><strong>Что входит в услугу:</strong></p>
                    <ul>
                        <li>- Разработка проекта охранно-пожарной сигнализации</li>
                        <li>- Монтаж датчиков дыма, огня и движения</li>
                        <li>- Установка громкоговорителей и светозвуковой сигнализации</li>
                        <li>- Обучение сотрудников правилам пользования системой</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Page;