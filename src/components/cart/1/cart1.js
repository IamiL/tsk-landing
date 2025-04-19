import './cart1.css'

export default function Cart1({heading, value, type, mainClassName}) {
    return <div className={`${mainClassName} ${(type === 1) ? 'cart1t1' : 'cart1t2'}`}>
        <p className={`${(type === 1) ? 'fs2 mfs2 m-b up cart1t1-value' : 'fs3 mfs2 m-b up cart1t2-value'}`}>{value}</p>
        <h3 className={`${(type === 1) ? 'fs5 mfs4 i-m up cart1t1-heading' : 'fs5 mfs4 i-m cart1t2-heading'}`}>{heading}</h3>
    </div>
}