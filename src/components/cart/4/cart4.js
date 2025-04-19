import {Link} from "react-router-dom";
import "./cart4.css"

export default function Cart4({heading, value, link, mainClassName}) {
    return <div className={mainClassName}>
        <h2 className='fs5 mfs4 i-m'>{heading}</h2>
        <p className='fs8 mfs6 i-m cart4-value'>{value}</p>
        <div className='cart4-link'>
            {typeof document !== 'undefined' && <Link to={link} className='fs8 mfs6 i-b cart4-link-a'>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.96165 13.7159L5.47869 12.2457L9.37145 8.35298H0.25V6.19247H9.37145L5.47869 2.30611L6.96165 0.829545L13.4048 7.27273L6.96165 13.7159Z"
                        fill="white"/>
                </svg>
                <p>
                    Подробнее
                </p>
            </Link>}
        </div>
    </div>
}