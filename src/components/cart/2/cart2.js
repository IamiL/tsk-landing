import "./cart2.css"

export default function Cart2({children, heading, text, ...rest}) {
    return <div className="cart2">
        <h4 className='fs5 mfs4 i-m'>{heading}</h4>
        <p className={'fs13 i-m cart2-text'}>{text}</p>
        <div className="cart2-children">
            {children}
        </div>
    </div>
}