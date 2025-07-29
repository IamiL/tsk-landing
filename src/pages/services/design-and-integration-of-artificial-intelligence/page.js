import React from 'react';
import styles from '../services.module.css';

function DesignAndIntegrationOfArtificialIntelligencePage() {
    return (
        <section className={styles.serviceSection}>
            {/*<Link to="/services" className={styles.navBtn}>*/}
            {/*    ←услуги*/}
            {/*</Link>*/}
            <h1 className='fs3 mfs3 m-b'>Проектирование и интеграция систем искусственного интеллекта на основе
                нейронных технологий</h1>
            <div className={styles.serviceContainer}>
                <div className={styles.divider}/>
            </div>
            <div>
                {/*<img src="/images/services/default-service-image.png" alt="Системы искусственного интеллекта"*/}
                {/*     className={styles.serviceImage}/>*/}
                <div className='fs5 mfs6 i-r'>
                    <p className={styles.redLine}>Искусственный интеллект открывает новые горизонты для оптимизации
                        бизнес-процессов предприятий
                        любой отрасли.</p>
                    <p className={styles.redLine}>
                        Специалисты компании «тСк» создают внедряют инновационные IT-решения на основе последних
                        достижений науки и техники.
                    </p>
                    <p className={styles.redLine}>
                        Мы применяем технологии машинного обучения и компьютерного зрения для автоматизации
                        производства, улучшения контроля качества продукции и снижения затрат на рутинные операции.
                    </p>
                    <p className={styles.redLine}>
                        Современные алгоритмы аналитики помогают быстро выявлять аномалии, повышать эффективность труда
                        и улучшать показатели деятельности предприятия.
                    </p>
                    <br/>
                    <p><strong>Преимущества нашего подхода:</strong></p>
                    <ul>
                        <li>- Повышение уровня продуктивности и снижение издержек</li>
                        <li>- Увеличение точности производственного процесса</li>
                        <li>- Возможность масштабирования внедряемых решений</li>
                        <li>- Круглосуточный мониторинг состояния технологических линий</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default DesignAndIntegrationOfArtificialIntelligencePage;