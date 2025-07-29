import React from 'react';
import styles from '../services.module.css';

function ExtinguishingSystemPage() {
    return (
        <section className={styles.serviceSection}>
            {/*<Link to={"/services"} className={styles.navBtn}>*/}
            {/*    ←услуги*/}
            {/*</Link>*/}
            <h1 className='fs3 mfs3 m-b'>Системы пожаротушения</h1>
            <div className={styles.serviceContainer}>
                <div className={styles.divider}/>
            </div>
            <div>
                <div style={{display: 'flex'}}>
                    <img src="/images/services/extinguishing-system/extinguishing-system1.jpg"
                         alt="Системы пожаротушения"
                         className={styles.serviceImage}/>
                    <img src="/images/services/extinguishing-system/extinguishing-system2.jpg"
                         alt="Системы пожаротушения"
                         className={styles.serviceImage}/>
                    <img src="/images/services/extinguishing-system/extinguishing-system3.jpg"
                         alt="Системы пожаротушения"
                         className={styles.serviceImage}/>
                </div>
                <br/>
                <div className='fs5 mfs6 i-r'>
                    <p>Установка современных систем автоматического пожаротушения позволяет значительно повысить уровень
                        безопасности на предприятии.</p>
                    <p>
                        Наша компания занимается разработкой и внедрением таких систем, обеспечивая надежную защиту
                        помещений и сохранение жизни и здоровья сотрудников.
                    </p>
                    {/*<br/>*/}
                    {/*<p><strong>Почему выбирают нашу компанию?</strong></p>*/}
                    {/*<br/>*/}
                    {/*<ul>*/}
                    {/*    <li>Современное оборудование высокого качества</li>*/}
                    {/*    <li>Быстрое реагирование на экстренные ситуации</li>*/}
                    {/*    <li>Постоянная техническая поддержка и гарантийное обслуживание</li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        </section>
    );
}

export default ExtinguishingSystemPage;