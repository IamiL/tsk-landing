import React from 'react';
import styles from '../services.module.css';
import {Link} from "react-router-dom";

function Page() {
    return (
        <section className={styles.serviceSection}>
            <h1 className='fs3 mfs3 m-b'>Комплекс инженерно-технических средств охраны и защиты (КИТСОЗ)</h1>
            <div className={styles.serviceContainer}>
                <div className={styles.divider}>
                    {typeof document !== 'undefined' && <Link to={"/services"} className={`${styles.navBtn} fs5 i-r`}>
                        ←услуги
                    </Link>}
                </div>

            </div>
            <div>
                <img src="/images/services/kitsoz/kitsoz-service.jpg" alt="КИТСОЗ" className={styles.serviceImage}/>
                <div className='fs5 mfs6 i-r'>
                    <p className={styles.redLine}>
                        Компания «тСк» предлагает комплексные решения по обеспечению
                        безопасности вашего предприятия,
                        включающие проектирование, монтаж и техническое сопровождение всех элементов системы
                        безопасности.</p>
                    <p className={styles.redLine}>Мы используем современное оборудование ведущих производителей,
                        обеспечивающее высокий уровень
                        надежности и защищенности ваших активов.</p>
                    <br/>
                    <p className={styles.redLine}>
                        Наши специалисты проводят детальную оценку рисков и разрабатывают индивидуальные проекты,
                        оптимальные именно для вашей организации.
                    </p>
                    <p className={styles.redLine}>Услуга включает установку видеонаблюдения, контроль доступа,
                        охранно-пожарную сигнализацию и
                        другие элементы, позволяющие минимизировать угрозы безопасности.</p>
                    <br/>
                    <br/>
                    <p><strong>Преимущества нашей компании:</strong></p>
                    <ul>
                        <li>- Опытные инженеры и проектировщики с многолетним опытом работы</li>
                        <li>- Использование сертифицированного оборудования проверенных брендов</li>
                        <li>- Высокое качество монтажа и обслуживания</li>
                        <li>- Индивидуальный подход к каждому клиенту</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Page;