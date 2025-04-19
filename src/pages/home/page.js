import "./page.css"
import Cart1 from "../../components/cart/1/cart1";
import Map from "../../components/map/map";
import Cart2 from "../../components/cart/2/cart2";
import Cart3 from "../../components/cart/3/cart3";
import Cart5 from "../../components/cart/5/cart5";
import Carousel from "../../components/carousel/carousel";
import LicensesSlider from "../../components/licensesSlider/licensesSlider";
import {useAppContext} from "@/context/context";
import Pause from "@/components/logo/Pause/pause";

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
                <h1 className={`fs1 mfs1 m-b up`} id="mainp-sec1-h">системный<br
                    className='br1'/>
                    <span id="h1-2padding">интегратор</span><br className='br1'/><span
                        id="h1-3padding">крутойойо</span></h1>
                {/*<Logo1 id={"mainp-sec1-img"}/>*/}
                <Pause/>
                <video loop width="100%" autoPlay muted id='mainp-sec1-img'>
                    {/*<source src={"/video4.mov"}*/}
                    {/*        type='video/quicktime'/>*/}
                    <source src='/logo.webm'
                            type='video/webm'/>
                </video>
            </section>
            <section id="mainp-sec2">
                <h2 className="fs3 mfs3 m-b up" id='mainp-sec2-heading'>о компании</h2>
                <div id='mainp-sec2-text-container'>
                    <div className='divid' id='divid1'/>
                    <p className='fs4 mfs5 i-r' id='mainp-sec2-text'>“ТелекомСервисКомплект” — ведущий
                        российский<br/>
                        интегратор систем безопасности и охраны объектов </p>
                </div>
                <div id='mainp-sec2-carts'>
                    <Cart1 heading={"год основания компании"} value={"2006"} type={1}
                           mainClassName="mainp-sec2-carts-cart"/>
                    <Cart1 heading={"реализованных проектов"} value={"10.000+"} type={1}
                           mainClassName="mainp-sec2-carts-cart"/>
                    <Cart1 heading={"Регионов России"} value={"11"} type={1}
                           mainClassName="mainp-sec2-carts-cart"/>
                </div>
            </section>
            <section id='mainp-sec3'>
                <h2 className="fs3 mfs3 m-b up" id='mainp-sec3-heading'>услуги</h2>
                <div className='main-grid' id='mainp-sec3-services'>
                    <p id='mainp-sec3-block1' className='fs7 mfs6 i-m'>Мы предлагаем комплексные решения для охраны
                        объектов и контроля
                        доступа. Проектируем,
                        устанавливаем и обслуживаем системы безопасности для вашего бизнеса. Вы получите надежную
                        защиту, которая обеспечит сохранность имущества и жизни людей.</p>
                    <Cart5 id={'mainp-sec3-block2'}
                           heading={'КИТСОЗ'}
                           value={'Проектируем и внедряем комплекс инженерно-технических средств охраны для обеспечения безопасности объектов и персонала.'}
                           link={'/'}/>
                    <Cart5 id={'mainp-sec3-block3'}
                           heading={'Видеонаблюдение'}
                           value={'Устанавливаем системы видеонаблюдения для контроля производственных процессов и предотвращения несанкционированного доступа.'}
                           link={'/'}/>
                    <Cart5 id={'mainp-sec3-block4'}
                           heading={'Охранно-пожарная сигнализация'}
                           value={'Проектируем системы охранно-пожарной сигнализации для своевременного обнаружения угроз и автоматического оповещения.'}
                           link={'/'}/>
                    <Cart5 id={'mainp-sec3-block5'}
                           heading={'СКУД'}
                           value={'Внедряем системы контроля и управления доступом для обеспечения безопасности и контроля рабочих процессов на объектах.'}
                           link={'/'}/>
                    <Cart5 id={'mainp-sec3-block6'}
                           heading={'Охрана периметра'}
                           value={'Предлагаем системы охраны периметра, которые обеспечивают защиту объекта в любых условиях, круглосуточно.'}
                           link={'/'}/>
                    <Cart5 id={'mainp-sec3-block7'}
                           heading={'Структурированные кабельные сети'}
                           value={'Проектируем и устанавливаем СКС, обеспечивая надежную передачу данных и стабильную работу ИТ-инфраструктуры на долгие годы.'}
                           link={'/'}/>
                </div>
            </section>
            <section id='mainp-sec4'>
                <h2 className="fs3 mfs3 m-b up" id='mainp-sec4-heading'>проекты</h2>
                <Map/>
            </section>
            <section id='mainp-sec5'>
                <h2 className="fs3 mfs3 m-b up" id='mainp-sec5-heading'>лицензии и допуски</h2>
                <div id='mainp-sec5-licenses'>
                    <Cart2 heading={"Лицензия на монтаж и обслуживание систем пожарной безопасности"}>
                        <img src={'images/licenses/license1.png'} alt={"license"}
                             className='mainp-sec5-licenses-img'/>
                        <img src={'images/licenses/license2.png'} alt={"license"}
                             className='mainp-sec5-licenses-img'/>
                    </Cart2>
                    <Cart2 heading={"Допуски СРО"}>
                        <img src={'images/licenses/toleranceSRO1.png'} alt={"license"}
                             className='mainp-sec5-licenses-img'/>
                        <img src={'images/licenses/toleranceSRO2.png'} alt={"license"}
                             className='mainp-sec5-licenses-img'/>
                    </Cart2>
                    <Cart2 heading={"Допуски ЧелРОП"}>
                        <img src={'images/licenses/toleranceChelROP1.png'} alt={"license"}
                             className='mainp-sec5-licenses-img'/>
                        <img src={'images/licenses/toleranceChelROP2.png'} alt={"license"}
                             className='mainp-sec5-licenses-img'/>
                    </Cart2>
                </div>
                <LicensesSlider/>
                <button className='btn fs5 mfs6 i-m up' id='mainp-btn1'>↓ скачать лицензии и допуски</button>
            </section>
            <section id='mainp-sec6'>
                <h2 id='mainp-sec6-heading' className="main-grid fs3 mfs3 m-b up">отзывы</h2>
                <div id='mainp-sec6-reviews'>
                    <Carousel>
                        <Cart3
                            heading={"Благодарственное письмо от ООО \"Уральско-Сибирская электромонтажная компания\""}
                            type={1}>
                            <img src={'images/reviews/UralSibirElectroCompany.png'}
                                 alt={"Благодарственное письмо от ООО \"Уральско-Сибирская электромонтажная компания\""}
                                 className='mainp-sec6-reviews-img'/>
                        </Cart3>
                        <Cart3
                            heading={"Благодарственное письмо от Челябинского концертного объединения"}
                            type={1}>
                            <img src={'images/reviews/ChelyabConcertCompany.png'}
                                 alt={"Благодарственное письмо от Челябинского концертного объединения"}
                                 className='mainp-sec6-reviews-img'/>
                        </Cart3>
                        <Cart3
                            heading={"Благодарственное письмо от ООО \"Челтелекабель\""}
                            type={1}>
                            <img src={'images/reviews/Cheltelecabel.png'}
                                 alt={"Благодарственное письмо от ООО \"Челтелекабель\""}
                                 className='mainp-sec6-reviews-img'/>
                        </Cart3>
                        <Cart3
                            heading={"Благодарственное письмо от ООО \"Челтелекабель\""}
                            type={1}>
                            <img src={'images/reviews/Cheltelecabel.png'}
                                 alt={"Благодарственное письмо от ООО \"Челтелекабель\""}
                                 className='mainp-sec6-reviews-img'/>
                        </Cart3>
                        <Cart3
                            heading={"Благодарственное письмо от ООО \"Челтелекабель\""}
                            type={1}>
                            <img src={'images/reviews/Cheltelecabel.png'}
                                 alt={"Благодарственное письмо от ООО \"Челтелекабель\""}
                                 className='mainp-sec6-reviews-img'/>
                        </Cart3>
                        <Cart3
                            heading={"Благодарственное письмо от ООО \"Челтелекабель\""}
                            type={1}>
                            <img src={'images/reviews/Cheltelecabel.png'}
                                 alt={"Благодарственное письмо от ООО \"Челтелекабель\""}
                                 className='mainp-sec6-reviews-img'/>
                        </Cart3>
                    </Carousel>
                </div>
                <button className='btn fs5 mfs6 i-m up' id='mainp-btn2'>↓ скачать портфолио</button>
            </section>
        </>
    );
}
