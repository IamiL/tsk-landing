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
                   className='fs5 mfs6 i-r'>{`Комплексные решения в области безопасности: проектирование, установка и обслуживание систем охраны, видеонаблюдения, контроля доступа и пожарной безопасности для защиты ваших объектов и персонала.`}</p>
            </div>
            <div className='main-grid' id='servicesp-services'>
                <Cart4 heading={"КИТСОЗ"}
                       value={"Комплексная система, объединяющая видеонаблюдение, сигнализацию и контроль доступа для всесторонней защиты объекта. КИТСОЗ обеспечивает безопасность персонала и имущества, позволяет оперативно реагировать на угрозы и предотвращать инциденты."}
                       link={"/"}
                       mainClassName={'servicesp-service border-right border-bottom'}/>
                <Cart4 heading={`Системы видеонаблюдения`}
                       value={`Проектирование и установка видеонаблюдения для контроля территории и производственных процессов. Системы позволяют в реальном времени отслеживать обстановку, предотвращать несанкционированный доступ и оперативно реагировать на инциденты.`}
                       link={"/"}
                       mainClassName={'servicesp-service border-bottom'}/>
                <Cart4 heading={`Охранно-пожарная сигнализация`}
                       value={`Системы для своевременного обнаружения возгораний и несанкционированного проникновения. Оповещают службы безопасности и персонал, интегрируются с другими системами защиты для комплексной безопасности.`}
                       link={"/"}
                       mainClassName={'servicesp-service border-right border-bottom'}/>
                <Cart4 heading={`СКУД`}
                       value={`СКУД контролирует доступ сотрудников в различные зоны, фиксирует рабочее время и обеспечивает высокий уровень безопасности. Включает устройства для идентификации, такие как карты и биометрия, с гибкими настройками доступа.`}
                       link={"/"}
                       mainClassName={'servicesp-service border-bottom'}/>
                <Cart4 heading={`Охрана периметра `}
                       value={`Системы периметральной охраны, включающие датчики движения и инфракрасные барьеры, круглосуточно контролируют территорию и предотвращают несанкционированное проникновение.`}
                       link={"/"}
                       mainClassName={'servicesp-service border-right'}/>
                <Cart4 heading={`Структурированные  кабельные сети`}
                       value={`СКС — основа ИТ-инфраструктуры объекта, объединяющая все системы в единое информационное пространство. Обеспечивает стабильную связь и высокую скорость передачи данных, облегчая обслуживание технических систем.`}
                       link={"/"}
                       mainClassName={'servicesp-service'}/>
            </div>
            <ServicesSlider/>
        </section>
    );
}
