import Cart4 from "../../components/cart/4/cart4";
import "./page.css"
import ServicesSlider from "@/components/servicesSlider/servicesSlider";
// import ServicesSlider from "../../components/servicesSlider/servicesSlider";

export default function ServicesPage() {
    return (
        <section id='servicesp-sec'>
            <h1 className='fs3 mfs3 m-b' id='servicesp-sec-heading'>Услуги</h1>
            <div id='servicesp-container1'>
                <div className='divid' id='divid3'/>
                <p id='servicesp-container1-text'
                   className='fs5 mfs6 i-r'>{`Мы предлагаем комплексный подход к решению задач, поставленных заказчиком, позволяющий создать наиболее надежную систему безопасности, в которую входят подсистемы видеонаблюдения и контроля доступа, а также охранной сигнализации. Предусмотрена возможность взаимной интеграции подсистем, в перспективе – дальнейшее наращивание; при этом без необходимости менять уже имеющееся оборудование.`}</p>
            </div>
            <div className='main-grid' id='servicesp-services'>
                {/*<Cart4 heading={"КИТСОЗ"}*/}
                {/*       value={"Комплексная система, объединяющая видеонаблюдение, сигнализацию и контроль доступа для всесторонней защиты объекта. КИТСОЗ обеспечивает безопасность персонала и имущества, позволяет оперативно реагировать на угрозы и предотвращать инциденты."}*/}
                {/*       link={"/"}*/}
                {/*       mainClassName={'servicesp-service border-right border-bottom'}/>*/}
                {/*<Cart4 heading={`Системы видеонаблюдения`}*/}
                {/*       value={`Проектирование и установка видеонаблюдения для контроля территории и производственных процессов. Системы позволяют в реальном времени отслеживать обстановку, предотвращать несанкционированный доступ и оперативно реагировать на инциденты.`}*/}
                {/*       link={"/"}*/}
                {/*       mainClassName={'servicesp-service border-bottom'}/>*/}
                {/*<Cart4 heading={`Охранно-пожарная сигнализация`}*/}
                {/*       value={`Системы для своевременного обнаружения возгораний и несанкционированного проникновения. Оповещают службы безопасности и персонал, интегрируются с другими системами защиты для комплексной безопасности.`}*/}
                {/*       link={"/"}*/}
                {/*       mainClassName={'servicesp-service border-right border-bottom'}/>*/}
                {/*<Cart4 heading={`СКУД`}*/}
                {/*       value={`СКУД контролирует доступ сотрудников в различные зоны, фиксирует рабочее время и обеспечивает высокий уровень безопасности. Включает устройства для идентификации, такие как карты и биометрия, с гибкими настройками доступа.`}*/}
                {/*       link={"/"}*/}
                {/*       mainClassName={'servicesp-service border-bottom'}/>*/}
                {/*<Cart4 heading={`Охрана периметра `}*/}
                {/*       value={`Системы периметральной охраны, включающие датчики движения и инфракрасные барьеры, круглосуточно контролируют территорию и предотвращают несанкционированное проникновение.`}*/}
                {/*       link={"/"}*/}
                {/*       mainClassName={'servicesp-service border-right'}/>*/}
                {/*<Cart4 heading={`Структурированные  кабельные сети`}*/}
                {/*       value={`СКС — основа ИТ-инфраструктуры объекта, объединяющая все системы в единое информационное пространство. Обеспечивает стабильную связь и высокую скорость передачи данных, облегчая обслуживание технических систем.`}*/}
                {/*       link={"/"}*/}
                {/*       mainClassName={'servicesp-service'}/>*/}
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
                    mainClassName={'servicesp-service'}/>
            </div>
            <ServicesSlider/>
        </section>
    );
}
