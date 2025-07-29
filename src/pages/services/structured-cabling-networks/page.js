import React from 'react';
import styles from '../services.module.css';

function Page() {
    return (
        <section className={styles.serviceSection}>
            {/*<Link to="/services" className={styles.navBtn}>*/}
            {/*    ←услуги*/}
            {/*</Link>*/}
            <h1 className='fs3 mfs3 m-b'>Структурированные кабельные сети</h1>
            <div className={styles.serviceContainer}>
                <div className={styles.divider}/>
            </div>
            <div>
                <img src="/images/services/structured-cabling-networks/structured-cabling.png"
                     alt="Структурированные кабельные сети" className={styles.serviceImage}/>
                <div className='fs5 mfs6 i-r'>
                    <p className={styles.redLine}>Высококачественная кабельная инфраструктура необходима для стабильной
                        работы всей информационной
                        инфраструктуры предприятия.</p>
                    <p className={styles.redLine}>
                        Специалисты компании «тСк» занимаются созданием структурированных кабельных сетей (СКС),
                        позволяющих объединить различные подсистемы коммуникаций в единую сеть.
                    </p>
                    <p className={styles.redLine}>
                        Это способствует повышению эффективности обмена информацией между подразделениями, снижению
                        количества сбоев и увеличению скорости обработки данных. Кабельная инфраструктура, созданная
                        нашими специалистами, обеспечит вашему предприятию устойчивый рост и развитие бизнеса.
                    </p>
                    <br/>
                    <p><strong>Особенности СКС от «тСк»:</strong></p>
                    <ul>
                        <li>- Высокая степень устойчивости к внешним воздействиям</li>
                        <li>- Простота расширения и модернизации сети</li>
                        <li>- Оптимальное соотношение цены и качества материалов</li>
                        <li>- Сертифицированное оборудование ведущих мировых производителей</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Page;