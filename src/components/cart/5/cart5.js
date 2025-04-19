import "./cart5.css"
import {Link} from "react-router-dom";

export default function Cart5({id, heading, value, link}) {
    return <div id={id} className='cart5'>
        <div>
            <h3 className='fs5 mfs4 i-m cart5-heading'>{heading}</h3>
        </div>
        <p className='fs8 mfs7 i-m'>{value}</p>
        {typeof document !== 'undefined' &&
            <Link className='mfs6 i-m cart5-link' to={link}>→Подробнее</Link>}
    </div>
}