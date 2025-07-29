import React from 'react';
import styles from '../services.module.css';
import {Link} from "react-router-dom";

function Page() {
    return (
        <section className={styles.serviceSection}>
            <h1 className='fs3 mfs3 m-b'>Гарантийное и постгарантийное обслуживание</h1>
            <div className={styles.serviceContainer}>
                <div className={styles.divider}>
                    {typeof document !== 'undefined' && <Link to={"/services"} className={`${styles.navBtn} fs5 i-r`}>
                        ←услуги
                    </Link>}
                </div>
            </div>
            <div>
                {/*<img src="/images/services/default-service-image.png" alt="Гарантийное и постгарантийное обслуживание"*/}
                {/*     className={styles.serviceImage}/>*/}
                <div className='fs5 mfs6 i-r'>
                    <p className={styles.redLine}>Клиенты компании «тСк» получают квалифицированную помощь на протяжении
                        всего срока эксплуатации
                        приобретенного оборудования.</p>
                    <p className={styles.redLine}>Мы осуществляем регулярное профилактическое обслуживание, устраняем
                        неисправности и производим
                        модернизацию ранее смонтированной аппаратуры.</p>
                    <p className={styles.redLine}>
                        Наши специалисты регулярно проходят повышение квалификации и знают обо всех новшествах рынка
                        оборудования и программного обеспечения. Обращаясь к нам, вы получаете гарантию стабильности и
                        бесперебойной работы ваших систем безопасности и автоматизации.
                    </p>
                    <br/>
                    <p><strong>Услуги по обслуживанию включают:</strong></p>
                    <ul>
                        <li>- Диагностику работоспособности оборудования</li>
                        <li>- Замена вышедших из строя компонентов</li>
                        <li>- Модернизация устаревшего оборудования</li>
                        <li>- Консультативная поддержка пользователей</li>
                    </ul>
                    <br/>
                    <p className={styles.redLine}>Сотрудничество с компанией «тСк» позволяет вам надежно защитить ваш
                        объект, оптимизировать
                        рабочие процессы и существенно снизить риски потери имущества и утраты конфиденциальной
                        информации.</p>
                </div>
            </div>
        </section>
    );
}

export default Page;