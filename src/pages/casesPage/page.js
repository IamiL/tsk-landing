import "./cases.css"
import Cart6 from "../../components/cart/6/cart6";

export default function CasesPage() {
    return (
        <section id='casesp-sec'>
            <h1 className='fs3 mfs3 m-b' id='casesp-sec-heading'>Проекты</h1>
            <div id='casesp-container1'>
                <div className='divid' id='divid4'/>
                <p id='casesp-container1-text'
                   className='fs5 mfs6 i-r'>{`Проектирование, монтаж и сопровождение инженерных систем:
СКС, охрана периметра, электроснабжение.
Оборудование, наладка, техподдержка.
Экономим ваши ресурсы — работаем «под ключ».
`}</p>
            </div>
            <button
                onClick={() => window.open("/reviews.rar", "")} className='btn fs5 mfs6 i-m up'
                id='casesp-btn'>↓ скачать портфолио
            </button>
            <div id='casesp-container2'>
                {/*<Cart6 heading={'Название проекта Название проекта Название проекта'}*/}
                {/*       value={'Краткое описание проекта, Краткое описание проекта Краткое описание проекта Краткое описание проекта Краткое описание проекта Краткое описание проекта Краткое описание проекта Краткое описание проекта Краткое описание проекта Краткое описание проекта Краткое описание проекта Краткое описание проекта Краткое описание проекта.....'}*/}
                {/*       v2={'/contactusPage'}>*/}
                {/*    <img src={'/not-found2.png'} alt={'project-ural'}/>*/}
                {/*</Cart6>*/}
                <Cart6 heading={'Энергосистема «Урал» ОАО «Фортум»'}
                       value={'Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного...'}
                       v2={'/cases/ural-fortum'}>
                    <img src={'/images/cases/ural-fortum.jpg'} alt={'project-ural'}/>
                </Cart6>
                <Cart6 heading={'Энергосистема «Западная Сибирь» ОАО «Фортум»'}
                       value={'Работы по оснащению структурных подразделений филиала Энергосистема «Западная Сибирь» ОАО «Фортум» комплексной системой безопасности: Тюменская ТЭЦ-1, Тюменская ТЭЦ-2, Тобольская ТЭЦ'}
                       v2={'/cases/western-siberia-fortum'}>
                    <img src={'/images/cases/western-siberia-fortum.jpg'} alt={'project-ural'}/>
                </Cart6>
                <Cart6 heading={'ОАО «Челябинский металлургический комбинат» МЕЧЕЛ'}
                       value={'Реализован комплекс проектных, строительно-монтажных и пусконаладочных работ по внедрению систем связи, охраны периметра, безопасности и физической защиты объектов предприятия в Челябинске.'}
                       v2={'/cases/chelyabinsk-metallurgical-combine'}>
                    <img src={'/images/cases/chelyabinsk-metallurgical-combine.jpg'} alt={'project-ural'}/>
                </Cart6>
            </div>
        </section>
    );
}
