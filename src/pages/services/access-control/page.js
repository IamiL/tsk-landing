import React from 'react';
import styles from '../services.module.css';
import {Link} from "react-router-dom";

function AccessControlPage() {
    return (
        <section className={styles.serviceSection}>
            <h1 className='fs3 mfs3 m-b'>Контроль и управление доступом</h1>
            <div className={styles.serviceContainer}>
                <div className={styles.divider}>
                    {typeof document !== 'undefined' && <Link to={"/services"} className={`${styles.navBtn} fs5 i-r`}>
                        ←услуги
                    </Link>}
                </div>
            </div>
            <div>
                <img src="/images/services/access-control/access-control.png" alt="Контроль и управление доступом"
                     className={styles.serviceImage}/>
                <div className='fs5 mfs6 i-r'>
                    <p className={styles.redLine}>Одним из важнейших аспектов безопасности является контроль доступа на
                        объект.</p>
                    <p className={styles.redLine}>
                        Компания «тСк» предлагает современные системы контроля и управления доступом, основанные на
                        применении различных видов идентификации личности.
                    </p>
                    <p className={styles.redLine}>Возможности наших систем включают использование магнитных карт,
                        ключей-транспондеров, электронных
                        пропусков и биометрической аутентификации (распознавания лиц). Данные технологии позволяют
                        оперативно отслеживать перемещение сотрудников и посетителей внутри здания и предотвращают
                        проникновение посторонних лиц.</p>
                    <br/>
                    <p><strong>Дополнительные возможности:</strong></p>
                    <ul>
                        <li>- Создание гибких сценариев прохода сотрудников и гостей</li>
                        <li>- Информирование службы безопасности о нарушениях правил допуска</li>
                        <li>- Автоматическое ведение учета рабочего времени сотрудников</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AccessControlPage;