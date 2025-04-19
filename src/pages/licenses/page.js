import lic11 from "./license1_1.png"
import lic12 from "./license1_2.png"
import lic21 from "./license2_1.png"
import lic22 from "./license2_2.png"
import lic31 from "./license3_1.png"
import lic32 from "./license3_2.png"
import "./page.css"
import Cart7 from "../../components/cart/7/cart7";
import LicensesSlider2 from "@/components/licensesSlider2/licensesSlider2";

export default function LicensesPage() {
    return (
        <section id='licensesp-sec'>
            <h1 className='fs3 mfs3 m-b' id='licensesp-sec-heading'>Лицензии и допуски</h1>
            <div id='licensesp-container1' className='border-top'>
                <div id='divid8'/>
                <button className='btn fs5 i-m up' id='licensesp-btn'>скачать лицензии и допуски</button>
            </div>
            <div id='licensesp-container2'>
                <Cart7 heading={'Лицензия на монтаж и обслуживание систем пожарной безопасности'}>
                    <div className="licensesp-img1">
                        <img src={lic11} alt={"license"} className='licensesp-img'/>
                    </div>
                    <div className="licensesp-img2">
                        <img src={lic12} alt={"license"} className='licensesp-img'/>
                    </div>
                </Cart7>
                <Cart7 heading={'Допуски СРО'}>
                    <div className="licensesp-img1">
                        <img src={lic21} alt={"license"} className='licensesp-img'/>
                    </div>
                    <div className="licensesp-img2">
                        <img src={lic22} alt={"license"} className='licensesp-img'/>
                    </div>
                </Cart7>
                <Cart7 heading={'Допуски ЧелРОП'}>
                    <div className="licensesp-img1">
                        <img src={lic31} alt={"license"} className='licensesp-img'/>
                    </div>
                    <div className="licensesp-img2">
                        <img src={lic32} alt={"license"} className='licensesp-img'/>
                    </div>
                </Cart7>
            </div>
            <LicensesSlider2/>
        </section>
    );
}
