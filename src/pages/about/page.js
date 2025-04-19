import img1 from "./img1.png"
import Cart1 from "@/components/cart/1/cart1";
import fsb from "./fsb.png"
import axis from "./axis.png"
import "./page.css"

export default function AboutPage() {
    // const context = useAppContext();
    // if (context !== null) {
    //     context.isOpen && context.setIsOpen(false);
    // }
    return (
        <>
            <section id="aboutp-sec1">
                <h1 className='fs3 mfs3 m-b' id='aboutp-sec1-heading'>О компании</h1>
                <div id='aboutp-container1'>
                    <div className='divid' id='divid2'/>
                    <p id='aboutp-container1-text' className='fs5 mfs6 i-b'>Профессиональные решения для безопасности
                        вашего
                        бизнеса</p>
                </div>
                <div id='aboutp-sec1-container1' className='main-grid'>
                    <p className='fs5 mfs6 i-r' id='aboutp-sec1-text'>
                        {`"ТСК" — это команда профессионалов, работающая для создания безопасной среды в бизнесе и промышленности.
                Мы предлагаем комплексные системы безопасности, ориентируясь на уникальные потребности каждого
                клиента.`}
                    </p>
                    <div id='aboutp-sec1-img'>
                        <img id='aboutp-img1' src={img1} alt={"image"}/>
                    </div>
                </div>
                <div id='aboutp-sec1-carts'>
                    <Cart1 heading={"Лет на рынке безопасности"} value={"18"} mainClassName={'aboutp-sec1-carts-cart'}
                           type={2}/>
                    <Cart1 heading={"Регионов России"} value={"11"} mainClassName={'aboutp-sec1-carts-cart'} type={2}/>
                    <Cart1 heading={"Реализованных проектов "} value={"10.000+"}
                           mainClassName={'aboutp-sec1-carts-cart'} type={2}/>
                </div>
            </section>
            <section id='aboutp-sec2'>
                <p className='fs5 mfs6 i-r'>
                    Мы стремимся к качеству в каждой детали и на каждом этапе работы.<br/>Наша команда постоянно
                    совершенствует свои навыки и использует передовые технологии, чтобы обеспечить надежность и
                    долговечность решений для безопасности.
                </p>
                <div className='main-grid' id='aboutp-sec2-container1'>
                    <h2 className='fs5 i-b' id='aboutp-sec2-container1-heading'>Что мы предлагаем</h2>
                    <ul className='fs5 i-r' id='aboutp-sec2-container1-values'>
                        <li className='aboutp-sec2-container1-value'>
                            <p>Комплексные системы безопасности для объектов любой сложности</p>
                        </li>
                        <li className='aboutp-sec2-container1-value'>
                            <p>Системы контроля доступа и видеонаблюдения</p>
                        </li>
                        <li className='aboutp-sec2-container1-value'>
                            <p>Охранно-пожарные комплексы и кабельные сети</p>
                        </li>
                        <li className='aboutp-sec2-container1-value'>
                            <p>Индивидуальные решения под нужды заказчика</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section id='aboutp-sec3'>
                <p className='fs5 i-r'>
                    {`За годы работы мы реализовали сотни проектов с крупными промышленными и государственными организациями. Наши системы защищают ключевые объекты, способствуя их бесперебойной работе`}
                </p>
                <h2 className='fs5 i-b' id='aboutp-sec3-heading'>
                    Наши клиенты и партнеры:
                </h2>
                <div id='aboutp-sec3-clients'>
                    <div className='aboutp-sec3-client'>
                        <img src={fsb} alt={"fsb"}/>
                        <p className='fs8 i-m'>федеральная служба безопасности рф</p>
                    </div>
                    <div className='aboutp-sec3-client'>
                        <img src={axis} alt={"axis"}/>
                    </div>
                    <div className='aboutp-sec3-client'>
                        <img src={fsb} alt={"fsb"}/>
                        <p className='fs8 i-m'>федеральная служба безопасности рф</p>
                    </div>
                    <div className='aboutp-sec3-client'>
                        <img src={axis} alt={"axis"}/>
                    </div>
                    <div className='aboutp-sec3-client'>
                        <img src={axis} alt={"axis"}/>
                    </div>
                    <div className='aboutp-sec3-client'>
                        <img src={fsb} alt={"fsb"}/>
                        <p className='fs8 i-m'>федеральная служба безопасности рф</p>
                    </div>
                    <div className='aboutp-sec3-client'>
                        <img src={axis} alt={"axis"}/>
                    </div>
                    <div className='aboutp-sec3-client'>
                        <img src={fsb} alt={"fsb"}/>
                        <p className='fs8 i-m'>федеральная служба безопасности рф</p>
                    </div>
                </div>
            </section>
        </>
    );
}
