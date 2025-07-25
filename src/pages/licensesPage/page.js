import "./page.css"
import Cart7 from "../../components/cart/7/cart7";
import LicensesSlider2 from "@/components/licensesSlider2/licensesSlider2";

export default function LicensesPage() {
    return (
        <section id='licensesp-sec'>
            <h1 className='fs3 mfs3 m-b' id='licensesp-sec-heading'>Лицензии и допуски</h1>
            <div id='licensesp-container1' className='border-top'>
                <div id='divid8'/>
                <p id='casesp-container1-text'
                   className='fs5 mfs6 i-r'>{`Компания “тСк” обладает всеми требуемыми лицензиями и допусками для проведения проектных и монтажных работ в области систем безопасности.`}</p>
                <button className='btn fs5 i-m up' id='licensesp-btn'
                        onClick={() => window.open("/tsk-licenses.rar", "")}>скачать лицензии и допуски
                </button>
            </div>
            <div id='licensesp-container2'>
                <Cart7 heading={'Лицензия МЧС'}>
                    <div className="licensesp-img1">
                        <img src={'/images/licenses/mchs1.webp'} alt={"license"} className='licensesp-img'/>
                    </div>
                    <div className="licensesp-img2">
                        <img src={'/images/licenses/mchs2.webp'} alt={"license"} className='licensesp-img'/>
                    </div>
                </Cart7>
                <Cart7 heading={'Допуски СРО'}>
                    <div className="licensesp-img1">
                        <img src={'/images/licenses/sro1.webp'} alt={"license"} className='licensesp-img'/>
                    </div>
                    <div className="licensesp-img2">
                        <img src={'/images/licenses/sro3.webp'} alt={"license"} className='licensesp-img'/>
                    </div>
                </Cart7>
                <Cart7 heading={'Допуски ЧелРОП'}>
                    <div className="licensesp-img1">
                        <img src={'/images/licenses/chelrop1.webp'} alt={"license"}
                             className='licensesp-img'/>
                    </div>
                    <div className="licensesp-img2">
                        <img src={'/images/licenses/chelrop2.webp'} alt={"license"}
                             className='licensesp-img'/>
                    </div>
                </Cart7>
            </div>
            <LicensesSlider2/>
        </section>
    );
}
