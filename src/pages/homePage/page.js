import "./page.css"
import Cart1 from "../../components/cart/1/cart1";
import Map from "../../components/map/map";
import Cart2 from "../../components/cart/2/cart2";
import Cart3 from "../../components/cart/3/cart3";
import Carousel from "../../components/carousel/carousel";
import LicensesSlider from "../../components/licensesSlider/licensesSlider";
import ZoomableImage from "../../components/imageViewer/ZoomableImage";
import AutoplayVideo from "../../components/AutoplayVideo/AutoplayVideo";
import Cart4 from "@/components/cart/4/cart4";

export default function HomePage() {

    return (
        <>
            <section className="main-grid" id="mainp-sec1">
                <div id='mainp-sec1-btn-container'>
                    {/*<button className='mfs5 i-m' id='mainp-sec1-btn' style={isOpen ? {opacity: 0} : {}}>связаться*/}
                    {/*</button>*/}
                    <button className='mfs5 i-m' id='mainp-sec1-btn'>связаться
                    </button>
                </div>
                {/*<h1 className={`fs1 mfs1 m-b up ${isOpen ? 'move-down' : ''}`} id="mainp-sec1-h">системный<br*/}
                {/*    className='br1'/>*/}
                <h1 className={`fs1 mfs1 m-b up`} id="mainp-sec1-h">тск<br
                    className='br1'/>
                    <span id="h1-2padding">партнёрство</span><br className='br1'/><span
                        id="h1-3padding">лучших</span></h1>
                <AutoplayVideo
                    src="/logo.webm"
                    id="mainp-sec1-img"
                    width="100%"
                    detectSafari={true}
                />
            </section>
            <section id="mainp-sec2">
                <h2 className="fs3 mfs3 m-b up" id='mainp-sec2-heading'>о компании</h2>
                <div id='mainp-sec2-text-container'>
                    <div className='divid' id='divid1'/>
                    {/*<p className='fs8 mfs5 i-r' id='mainp-sec2-text'>“ТелекомСервисКомплект” — ведущий*/}
                    {/*    российский<br/>*/}
                    {/*    интегратор систем безопасности и охраны объектов </p>*/}
                    <p className='fs12 mfs5 i-r'
                       id='mainp-sec2-text'>{'Компания «тСк» занимается разработкой концепций и внедрением современных систем безопасности предприятий. Мы оказываем услуги проектирования, поставки, монтажа и технического обслуживания различных систем, включая видеонаблюдение, охранно-пожарную сигнализацию, контроль доступа и пожаротушение. Основная цель компании — создание надежных интегрированных решений, обеспечивающих высокий уровень безопасности клиентов и экономию их ресурсов благодаря профессиональному обслуживанию'}</p>
                </div>
                <div id='mainp-sec2-carts'>
                    <Cart1 heading={"год основания компании"} value={"2006"} type={1}
                           mainClassName="mainp-sec2-carts-cart"/>
                    <Cart1 heading={"реализованных проектов"} value={"1.000+"} type={1}
                           mainClassName="mainp-sec2-carts-cart"/>
                    <Cart1 heading={"Регионов России"} value={"16"} type={1}
                           mainClassName="mainp-sec2-carts-cart"/>
                </div>
            </section>
            <section id='mainp-sec3'>
                <h2 className="fs3 mfs3 m-b up" id='mainp-sec3-heading'>услуги</h2>
                <div className='main-grid mainp-sec3-services'>
                    {/*<p id='mainp-sec3-block1' className='fs7 mfs6 i-m'>Мы предлагаем комплексные решения для охраны*/}
                    {/*    объектов и контроля*/}
                    {/*    доступа. Проектируем,*/}
                    {/*    устанавливаем и обслуживаем системы безопасности для вашего бизнеса. Вы получите надежную*/}
                    {/*    защиту, которая обеспечит сохранность имущества и жизни людей.</p>*/}
                    {/*<Cart5 id={'mainp-sec3-block2'}*/}
                    {/*       heading={'КИТСОЗ'}*/}
                    {/*       value={'Проектируем и внедряем комплекс инженерно-технических средств охраны для обеспечения безопасности объектов и персонала.'}*/}
                    {/*       link={'/'}/>*/}
                    {/*<Cart5 id={'mainp-sec3-block3'}*/}
                    {/*       heading={'Видеонаблюдение'}*/}
                    {/*       value={'Устанавливаем системы видеонаблюдения для контроля производственных процессов и предотвращения несанкционированного доступа.'}*/}
                    {/*       link={'/'}/>*/}
                    {/*<Cart5 id={'mainp-sec3-block4'}*/}
                    {/*       heading={'Охранно-пожарная сигнализация'}*/}
                    {/*       value={'Проектируем системы охранно-пожарной сигнализации для своевременного обнаружения угроз и автоматического оповещения.'}*/}
                    {/*       link={'/'}/>*/}
                    {/*<Cart5 id={'mainp-sec3-block5'}*/}
                    {/*       heading={'СКУД'}*/}
                    {/*       value={'Внедряем системы контроля и управления доступом для обеспечения безопасности и контроля рабочих процессов на объектах.'}*/}
                    {/*       link={'/'}/>*/}
                    {/*<Cart5 id={'mainp-sec3-block6'}*/}
                    {/*       heading={'Охрана периметра'}*/}
                    {/*       value={'Предлагаем системы охраны периметра, которые обеспечивают защиту объекта в любых условиях, круглосуточно.'}*/}
                    {/*       link={'/'}/>*/}
                    {/*<Cart5 id={'mainp-sec3-block7'}*/}
                    {/*       heading={'Структурированные кабельные сети'}*/}
                    {/*       value={'Проектируем и устанавливаем СКС, обеспечивая надежную передачу данных и стабильную работу ИТ-инфраструктуры на долгие годы.'}*/}
                    {/*       link={'/'}/>*/}
                    <Cart4 heading={"Комплекс инженерно-технических средств охраны и защиты (КИТСОЗ)"}
                           value={"Создание надежной системы безопасности на основе современного оборудования и специализированных инженерных решений."}
                           link={"/services/kitsoz"}
                           mainClassName={'servicesp-service border-bottom'}/>
                    <Cart4 heading={`Системы видеонаблюдения`}
                           value={`Профессиональные решения для технологического и охранного видеонаблюдения с возможностью интеграции в общую систему безопасности.`}
                           link={"/services/surveillance-system"}
                           mainClassName={'servicesp-service border-bottom'}/>
                    <Cart4 heading={`Охранно-пожарная сигнализация и системы оповещения`}
                           value={`Эффективные средства раннего предупреждения и оперативной реакции на чрезвычайные ситуации.`}
                           link={"/services/security-and-fire-alarm-systems"}
                           mainClassName={'servicesp-service border-bottom'}/>
                    <Cart4 heading={`Системы пожаротушения`}
                           value={`Современные методы защиты от пожаров, гарантирующие безопасность имущества и персонала.`}
                           link={"/services/extinguishing-system"}
                           mainClassName={'servicesp-service border-bottom'}/>
                    <Cart4 heading={`Контроль и управление доступом`}
                           value={`Интегрированная система ограничения доступа с использованием биометрии и цифровых карт.`}
                           link={"/services/access-control"}
                           mainClassName={'servicesp-service border-bottom'}/>
                    <Cart4
                        heading={`Проектирование и интеграция систем искусственного интеллекта`}
                        value={`Машинное обучение, распознавание образов, аналитические платформы для мониторинга производства — создание эффективных инструментов повышения производительности компаний и цифровизация ключевых рабочих процессов.`}
                        link={"/services/design-and-integration-of-artificial-intelligence"}
                        mainClassName={'servicesp-service border-bottom'}/>
                    <Cart4
                        heading={`Структурированные кабельные сети`}
                        value={`Высокоэффективные инженерные коммуникации для передачи данных и сигналов безопасности.`}
                        link={"/services/structured-cabling-networks"}
                        mainClassName={'servicesp-service border-bottom'}/>
                    <Cart4
                        heading={`Оборудование систем охраны периметра`}
                        value={`Мониторинг и охрана территории с применением передовых технологий наблюдения и фиксации вторжения.`}
                        link={"/services/perimeter-security-systems-equipment"}
                        mainClassName={'servicesp-service border-bottom'}/>
                    <Cart4
                        heading={`Полный цикл реализации проектов`}
                        value={`От разработки проектной документации до сдачи готового объекта «под ключ».`}
                        link={"/services/full-cycle-of-project-implementation"}
                        mainClassName={'servicesp-service border-bottom'}/>
                    <Cart4
                        heading={`Консультация и обучение персонала заказчика`}
                        value={`Подготовка специалистов заказчика для эффективного использования установленных систем безопасности.`}
                        link={"/services/customers-staff-training"}
                        mainClassName={'servicesp-service border-bottom'}/>
                    <Cart4
                        heading={`Гарантийное и постгарантийное обслуживание`}
                        value={`Постоянная поддержка и оперативное устранение неисправностей.`}
                        link={"/services/warranty-and-post-warranty-service"}
                        mainClassName={'servicesp-service border-bottom'}/>
                </div>
            </section>
            <section id='mainp-sec4'>
                <h2 className="fs3 mfs3 m-b up" id='mainp-sec4-heading'>проекты</h2>
                <Map/>
            </section>
            <section id='mainp-sec5'>
                <h2 className="fs3 mfs3 m-b up" id='mainp-sec5-heading'>лицензии и допуски</h2>
                <div id='mainp-sec5-licenses'>
                    <Cart2 heading={"Лицензия МЧС"}
                           text={'Лицензия на монтаж, ремонт и обслуживание средств обеспечения пожарной безопасности'}>
                        <ZoomableImage
                            src={'/images/licenses/mchs1.webp'}
                            fullSizeSrc={'/images/licenses/mchs1-fullsize.webp'}
                            alt={"Лицензия МЧС - страница 1"}
                            className='mainp-sec5-licenses-img'
                        />
                        <ZoomableImage
                            src={'/images/licenses/mchs2.webp'}
                            fullSizeSrc={'/images/licenses/mchs2-fullsize.webp'}
                            alt={"Лицензия МЧС - страница 2"}
                            className='mainp-sec5-licenses-img'
                        />
                    </Cart2>
                    <Cart2 heading={"СРО"}
                           text={'Союз Строительных Компаний Урала и Сибири – свидетельство о членстве в строительной СРО'}>
                        <ZoomableImage
                            src={'/images/licenses/sro1.webp'}
                            fullSizeSrc={'/images/licenses/sro1-fullsize.webp'}
                            alt={"СРО - страница 1"}
                            className='mainp-sec5-licenses-img'
                        />
                        <ZoomableImage
                            src={'/images/licenses/sro3.webp'}
                            fullSizeSrc={'/images/licenses/sro3-fullsize.webp'}
                            alt={"СРО - страница 2"}
                            className='mainp-sec5-licenses-img'
                        />
                    </Cart2>
                    <Cart2 heading={"ЧелРОП"}
                           text={'Ассоциация СРО "Челябинское региональное объединение проектировщиков" – свидетельство о членстве в проектной СРО'}>
                        <ZoomableImage
                            src={'/images/licenses/chelrop1.webp'}
                            fullSizeSrc={'/images/licenses/chelrop1-fullsize.webp'}
                            alt={"ЧелРОП - страница 1"}
                            className='mainp-sec5-licenses-img'
                        />
                        <ZoomableImage
                            src={'/images/licenses/chelrop2.webp'}
                            fullSizeSrc={'/images/licenses/chelrop2-fullsize.webp'}
                            alt={"ЧелРОП - страница 2"}
                            className='mainp-sec5-licenses-img'
                        />
                    </Cart2>
                </div>
                <LicensesSlider/>
                <button className='btn fs5 mfs6 i-m up' id='mainp-btn1'
                        onClick={() => window.open("/tsk-licenses.rar", "")}>↓ скачать лицензии и допуски
                </button>
            </section>
            <section id='mainp-sec6'>
                <h2 id='mainp-sec6-heading' className="main-grid fs3 mfs3 m-b up">отзывы</h2>
                <div id='mainp-sec6-reviews'>
                    <Carousel>
                        {/*<Cart3*/}
                        {/*    heading={"Благодарственное письмо от ООО \"Уральско-Сибирская электромонтажная компания\""}*/}
                        {/*    type={1}>*/}
                        {/*    <img src={'images/reviewsPage/UralSibirElectroCompany.png'}*/}
                        {/*         alt={"Благодарственное письмо от ООО \"Уральско-Сибирская электромонтажная компания\""}*/}
                        {/*         className='mainp-sec6-reviewsPage-img'/>*/}
                        {/*</Cart3>*/}
                        <Cart3
                            heading={'Благодарность от ООО «Урало-Сибирская электротехническая компания»'}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/Ural-Siberian-Electrotechnical-Company.webp'}
                                fullSizeSrc={'/images/reviews/Ural-Siberian-Electrotechnical-Company.png'}
                                alt={"Благодарность от ООО «Урало-Сибирская электротехническая компания»"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"Благодарность от ООО «УГМК-Телеком»"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/UMMC-Telecom.webp'}
                                fullSizeSrc={'/images/reviews/UMMC-Telecom-fullsize.webp'}
                                alt={"Благодарность от ООО «УГМК-Телеком»"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"Благодарность от ООО “Аларм”"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/alarm.webp'}
                                fullSizeSrc={'/images/reviews/alarm-fullsize.webp'}
                                alt={"Благодарность от ООО «Аларм»"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"Благодарность от ОАО “ЧМК”"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/mechel.webp'}
                                fullSizeSrc={'/images/reviews/mechel-fullsize.webp'}
                                alt={"Благодарность от ОАО «ЧМК»"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"Благодарность от Управления по обустройству государственной границы Российской Федерации"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/state-border.webp'}
                                fullSizeSrc={'/images/reviews/state-border-fullsize.webp'}
                                alt={"Благодарность от Управления по обустройству государственной границы РФ"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"Благодарность от ОАО “Kemma”"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/kemma.webp'}
                                fullSizeSrc={'/images/reviews/kemma-fullsize.webp'}
                                alt={"Благодарность от ОАО «Kemma»"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"  Благодарность от ОАО “Челябинский цинковый завод”"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/cink.webp'}
                                fullSizeSrc={'/images/reviews/cink-fullsize.webp'}
                                alt={"Благодарность от ОАО «Челябинский цинковый завод»"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"Благодарность от ООО МПК “Ромкор”"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/romkor.webp'}
                                fullSizeSrc={'/images/reviews/romkor-fullsize.webp'}
                                alt={"Благодарность от ООО МПК «Ромкор»"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"Благодарность от ООО “Виола Арт”"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/viola.webp'}
                                fullSizeSrc={'/images/reviews/viola-fullsize.webp'}
                                alt={"Благодарность от ООО «Виола Арт»"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"Благодарность от Государственного унитарного предприятия Челябинской области “Протокол”"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/protokol.webp'}
                                fullSizeSrc={'/images/reviews/protokol-fullsize.webp'}
                                alt={"Благодарность от ГУП Челябинской области «Протокол»"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"Благодарность от Министерства экономического развития Челябинской области"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/econom.webp'}
                                fullSizeSrc={'/images/reviews/econom-fullsize.webp'}
                                alt={"Благодарность от Министерства экономического развития Челябинской области"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"Благодарность от ООО “Формула Безопасности – Урал”"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/formula.webp'}
                                fullSizeSrc={'/images/reviews/formula-fullsize.webp'}
                                alt={"Благодарность от ООО «Формула Безопасности – Урал»"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"Благодарность от ООО “Группа ТРИЗ”"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/tris.webp'}
                                fullSizeSrc={'/images/reviews/tris-fullsize.webp'}
                                alt={"Благодарность от ООО «Группа ТРИЗ»"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"Благодарность от ООО “Крепёжный Арсенал”"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/krepezh.webp'}
                                fullSizeSrc={'/images/reviews/krepezh-fullsize.webp'}
                                alt={"Благодарность от ООО «Крепёжный Арсенал»"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"Благодарность от ООО “Челтелекабель”"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/cheltelecabel.webp'}
                                fullSizeSrc={'/images/reviews/cheltelecabel-fullsize.webp'}
                                alt={"Благодарность от ООО «Челтелекабель»"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                        <Cart3
                            heading={"Благодарность от ОГУК “Челябинское концертное объединение”"}
                            type={1}>
                            <ZoomableImage
                                src={'/images/reviews/concert.webp'}
                                fullSizeSrc={'/images/reviews/concert-fullsize.webp'}
                                alt={"Благодарность от ОГУК «Челябинское концертное объединение»"}
                                className='mainp-sec6-reviews-img'
                            />
                        </Cart3>
                    </Carousel>
                </div>
                <button className='btn fs5 mfs6 i-m up' id='mainp-btn2'
                        onClick={() => window.open("/portfolio-tSk.pdf", "")}>↓
                    скачать портфолио
                </button>
            </section>
        </>
    );
}
