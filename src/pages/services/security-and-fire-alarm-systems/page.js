import React from 'react';
import styles from '../services.module.css';

function Page() {
    return (
        <section className={styles.serviceSection}>
            <h1 className='fs3 mfs3 m-b'>Охранно-пожарная сигнализация и системы оповещения</h1>
            <div className={styles.serviceContainer}>
                <div className={styles.divider}/>
            </div>
            <div>
                <img src="/images/services/security-and-fire-alarm-systems/security-fire-alarm.png"
                     alt="Охранно-пожарная сигнализация" className={styles.serviceImage}/>
                <div className='fs5 mfs6 i-r'>
                    <p>Система охранно-пожарной сигнализации является важным элементом комплексной системы безопасности
                        любого предприятия. Компания «тСк» обеспечивает разработку, монтаж и последующее обслуживание
                        надежных и долговечных систем пожарной безопасности.</p>
                    <br/>
                    <p>Наши сотрудники предлагают наиболее эффективные решения для предотвращения чрезвычайных ситуаций,
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