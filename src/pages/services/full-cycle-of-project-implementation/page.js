import React from 'react';
import styles from '../services.module.css';
import {Link} from "react-router-dom";

function FullCycleOfProjectImplementationPage() {
    return (
        <section className={styles.serviceSection}>
            <h1 className='fs3 mfs3 m-b'>Полный цикл реализации проектов</h1>
            <div className={styles.serviceContainer}>
                <div className={styles.divider}>
                    {typeof document !== 'undefined' && <Link to={"/services"} className={`${styles.navBtn} fs5 i-r`}>
                        ←услуги
                    </Link>}
                </div>
            </div>
            <div>
                <img src="/images/services/full-cycle/full-cycle.jpeg" alt="Полный цикл реализации проектов"
                     className={styles.serviceImage}/>
                <div className='fs5 mfs6 i-r'>
                    <p className={styles.redLine}>Компания «тСк» обладает всеми необходимыми ресурсами для полного цикла
                        реализации проектов по
                        созданию и обслуживанию инженерных систем безопасности и автоматизации.</p>
                    <p className={styles.redLine}>Мы оказываем широкий спектр услуг, начиная от предпроектного
                        обследования и заканчивая сдачей
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