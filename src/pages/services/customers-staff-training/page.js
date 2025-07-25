import React from 'react';
import styles from '../services.module.css';

function CustomersStaffTrainingPage() {
    return (
        <section className={styles.serviceSection}>
            <h1 className='fs3 mfs3 m-b'>Консультация и обучение персонала заказчика</h1>
            <div className={styles.serviceContainer}>
                <div className={styles.divider}/>
            </div>
            <div>
                <img src="/images/services/default-service-image.png" alt="Консультация и обучение персонала"
                     className={styles.serviceImage}/>
                <div className='fs5 mfs6 i-r'>
                    <p>Одной из важных составляющих качественного функционирования сложных инженерных систем является
                        грамотность и компетентность обслуживающего персонала. Мы предоставляем нашим заказчикам
                        консультационные услуги, направленные на повышение квалификации сотрудников в области
                        обслуживания систем безопасности и средств автоматизации.</p>
                    <br/>
                    <p>Специалисты нашей компании готовы поделиться знаниями и опытом, необходимыми для уверенной
                        эксплуатации оборудования, быстрой диагностики и эффективного устранения возможных сбоев.</p>
                </div>
            </div>
        </section>
    );
}

export default CustomersStaffTrainingPage;