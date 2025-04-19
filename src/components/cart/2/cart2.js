import "./cart2.css"

export default function Cart2({children, heading}) {
    return <div className="cart2">
        <p className='fs5 mfs4 i-m'>{heading}</p>
        <div className="cart2-children">
            {children}
        </div>
    </div>
}