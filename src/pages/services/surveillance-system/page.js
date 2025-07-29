import React from 'react';
import styles from '../services.module.css';
import {Link} from "react-router-dom";

function Page() {
    return (
        <section className={styles.serviceSection}>
            {typeof document !== 'undefined' && <Link to={"/services"} className={styles.navBtn}>
                ←услуги
            </Link>}
            <h1 className='fs3 mfs3 m-b'>Системы видеонаблюдения</h1>
            <div className={styles.serviceContainer}>
                <div className={styles.divider}/>
            </div>
            <div>
                <img src="/images/services/surveillance-system/surveillance-system.jpg" alt="Системы видеонаблюдения"
                     className={styles.serviceImage}/>
                <div className='fs5 mfs6 i-r'>
                    <p className={styles.redLine}>Мы предлагаем профессиональные решения по видеонаблюдению, способные
                        обеспечить максимальную
                        защиту и контроль над объектом. Наши камеры обладают высоким разрешением, работают круглосуточно
                        и обеспечивают четкое изображение даже в условиях низкой освещенности.</p>
                    <br/>
                    <p className={styles.redLine}>Помимо стандартного видеонаблюдения мы можем предложить
                        интегрированную систему анализа
                        изображений, позволяющую автоматизировать процессы контроля, обнаружения подозрительных действий
                        и нарушения порядка.</p>
                    <br/>
                    <p><strong>Основные направления наших работ:</strong></p>
                    <ul>
                        <li>- Технологические системы видеонаблюдения на производственных предприятиях</li>
                        <li>- Система видеорегистрации и архивация видеоданных</li>
                        <li>- Интеграция видеонаблюдения с системами управления доступом</li>
                    </ul>
                    <br/>
                    <p className={styles.redLine}>Наша компания гарантирует надежность, простоту эксплуатации и
                        долговечность установленного
                        оборудования.</p>
                </div>
            </div>
        </section>
    );
}

export default Page;