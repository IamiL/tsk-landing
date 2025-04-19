import "./cart3.css"

export default function Cart3({children, heading, type}) {
    return <div className={type === 1 ? 'cart3t1' : 'cart3t2'}>
        {(type === 2) ? <div className='cart3t2-container'>
                <p className='fs8 i-m cart3t2-container-text'>{heading}</p></div>
            : <p className='fs8 mfs6 i-m cart3t1-container-text'>{heading}</p>
        }
        <div className={type === 1 ? 'cart3t1-children' : 'cart3t2-children'}>
            {children}
        </div>
    </div>
}