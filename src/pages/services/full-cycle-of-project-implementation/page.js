import React from 'react';
import styles from '../services.module.css';

function FullCycleOfProjectImplementationPage() {
    return (
        <section className={styles.serviceSection}>
            {/*<Link to="/services" className={styles.navBtn}>*/}
            {/*    ←услуги*/}
            {/*</Link>*/}
            <h1 className='fs3 mfs3 m-b'>Полный цикл реализации проектов</h1>
            <div className={styles.serviceContainer}>
                <div className={styles.divider}/>
            </div>
            <div>
                <img src="/images/services/full-cycle/full-cycle.jpeg" alt="Полный цикл реализации проектов"
                     className={styles.serviceImage}/>
                <div className='fs5 mfs6 i-r'>
                    <p>Компания «тСк» обладает всеми необходимыми ресурсами для полного цикла реализации проектов по
                        созданию и обслуживанию инженерных систем безопасности и автоматизации.</p>
                    <p>Мы оказываем широкий спектр услуг, начиная от предпроектного обследования и заканчивая сдачей
                        готового объекта заказчику. Благодаря опыту и квалификации наших инженеров каждый этап
                        реализуется качественно и строго в оговорённые сроки.</p>
                    <br/>
                    <p><strong>Этапы работы:</strong></p>
                    <ul>
                        <li>- Предварительная оценка объекта и разработка техзадания</li>
                        <li>- Проектирование и согласование документов</li>
                        <li>- Закупка необходимого оборудования и расходных материалов</li>
                        <li>- Проведение строительных и электромонтажных работ</li>
                        <li>- Пусконаладочные мероприятия и ввод объекта в эксплуатацию</li>
                        <li>- Гарантийное и сервисное обслуживание установленной аппаратуры</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default FullCycleOfProjectImplementationPage;