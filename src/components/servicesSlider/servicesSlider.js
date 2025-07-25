import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "./servicesSlider.css";
import Cart4 from "../cart/4/cart4";

export default function ServicesSlider() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <></>
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '1px',
        swipeToSlide: true,
        prevArrow: <></>,
        nextArrow: <></>
    };

    return (
        isMobile && <div id='services-mobile'>
            <Slider {...settings}>
                <Cart4 heading={"КИТСОЗ"}
                       value={"Комплексная система, объединяющая видеонаблюдение, сигнализацию и контроль доступа для всесторонней защиты объекта. КИТСОЗ обеспечивает безопасность персонала и имущества, позволяет оперативно реагировать на угрозы и предотвращать инциденты."}
                       link={"/services/kitsoz"}
                       mainClassName={'servicesp-service border-right border-bottom'}/>
                <Cart4 heading={`Системы видеонаблюдения`}
                       value={`Проектирование и установка видеонаблюдения для контроля территории и производственных процессов. Системы позволяют в реальном времени отслеживать обстановку, предотвращать несанкционированный доступ и оперативно реагировать на инциденты.`}
                       link={"/services/surveillance-system"}
                       mainClassName={'servicesp-service border-bottom'}/>
                <Cart4 heading={`Охранно-пожарная сигнализация`}
                       value={`Системы для своевременного обнаружения возгораний и несанкционированного проникновения. Оповещают службы безопасности и персонал, интегрируются с другими системами защиты для комплексной безопасности.`}
                       link={"/services/security-and-fire-alarm-systems"}
                       mainClassName={'servicesp-service border-right border-bottom'}/>
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
            </Slider>
        </div>
    );
}