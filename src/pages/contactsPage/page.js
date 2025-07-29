import "./page.css"

export default function ContactsPage() {
    return (
        <>
            <section id='contactsp-sec1'>
                <h1 className='fs3 mfs3 m-b' id='contactsp-sec1-heading'>Контакты</h1>
                <div className='main-grid' id='contactsp-sec1-container'>
                    <div id='divider9'/>
                    <h2 className='fs5 mfs4 i-m' id='contactsp-sec1-container-heading'>Расположение</h2>
                    {/*<div id='contactsp-map'><img src={map} alt={'Map'} id='contactsp-map-img'/></div>*/}
                    <div id='contactsp-map'>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A580e267df474b7fe828655e3506ef458be8444ac683c7efdea08febfec0c2332&amp;source=constructor"
                            width="852" height="408" frameBorder="0"></iframe>
                    </div>
                </div>
            </section>
            <section className='main-grid' id='contactsp-sec2'>
                <h2 className='fs5 mfs4 i-m organization-map-heading'>Карта предприятия</h2>
                <ul className='fs8 mfs7 i-r contactsp-specs'>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Полное наименование организации
                        </p>
                        <p className='right-text-align'>
                            Общество с ограниченной<br/> ответственностью «тСк»
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Краткое наименование организации
                        </p>
                        <p className='right-text-align'>
                            ООО «тСк»
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Место нахождения
                        </p>
                        <p className='right-text-align'>
                            г.Челябинск
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Юридический адрес
                        </p>
                        <p className='right-text-align'>
                            454008, г. Челябинск, ул. Кыштымская, 3-44
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Почтовый адрес
                        </p>
                        <p className='right-text-align'>
                            454048, г. Челябинск, ул. Доватора, 32в
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Фактический адрес
                        </p>
                        <p className='right-text-align'>
                            454048, г. Челябинск, ул. Доватора, 32 В-6
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Телефон
                        </p>
                        <p className='right-text-align'>
                            (351) 261-55-53, 261-59-79
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Е-mail
                        </p>
                        <p className='right-text-align'>
                            info@tsk74.ru
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Генеральный директор
                        </p>
                        <p className='right-text-align'>
                            Солопов Дмитрий Викторович
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            Главный бухгалтер
                        </p>
                        <p className='right-text-align'>
                            Берсенева Наталья Владимировна
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            ОГРН
                        </p>
                        <p className='right-text-align'>
                            1087451013517
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            ИНН
                        </p>
                        <p className='right-text-align'>
                            7451273733
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            КПП
                        </p>
                        <p className='right-text-align'>
                            744801001
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            ОКВЭД (ОКОНХ)
                        </p>
                        <p className='right-text-align'>
                            32.30.9
                        </p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>
                            ОКПО
                        </p>
                        <p className='right-text-align'>
                            86964836
                        </p>
                    </li>
                    <li className='contactsp-spec'>
                        <p>
                            ОКАТО
                        </p>
                        <p className='right-text-align'>
                            75401366000
                        </p>
                    </li>
                </ul>
            </section>
            <section className='main-grid' id='contactsp-sec3'>
                <h2 className='fs5 mfs4 i-m organization-map-heading'>Платежные реквизиты</h2>
                <ul className='fs8 mfs7 i-r contactsp-specs'>
                    <li className='contactsp-spec border-bottom'>
                        <p>Полное наименование банка</p>
                        <p className='right-text-align'>ПАО «Челябинвестбанк»</p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>Город банка</p>
                        <p className='right-text-align'>г.Челябинск</p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>Расчетный счет организации</p>
                        <p className='right-text-align'>40702810590000010233</p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>Корреспондентский счет</p>
                        <p className='right-text-align'>30101810400000000779</p>
                    </li>
                    <li className='contactsp-spec border-bottom'>
                        <p>БИК банка</p>
                        <p className='right-text-align'>047501779</p>
                    </li>
                    <li className='contactsp-spec'>
                        <p>Контактный телефон</p>
                        <p className='right-text-align'>(351) 261-55-53, 261-59-79</p>
                    </li>
                </ul>
            </section>
        </>
    );
}
