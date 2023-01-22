import style from "./Footer.module.css"


function Footer({ head, li1, li2, li3, head2, li4, li5, li6, li7, li8, li9, li10, li11, li12, li13, li14, p, head3 }) {
    return (<div className={style.footer}>
        <div className={style.f1}>
            <h2>{head}</h2>
            <ul>
                <li className={style.li}>{li1}</li>
                <li className={style.li}>{li2}</li>
                <li className={style.li}>{li3}</li>
            </ul>
        </div>

        <div className={style.f2}>
            <h2>{head2}</h2>
            <ul>
                <li className={style.li}>{li4}</li>
                <li className={style.li}>{li5}</li>
                <li className={style.li}>{li6}</li>
                <li className={style.li}>{li7}</li>
                <li className={style.li}>{li8}</li>
                <li className={style.li}>{li9}</li>
            </ul>
        </div>

        <div className={style.f3}>
            <h4>{head3}</h4>
            <ul>
                <li className={style.li}>{li10}</li>
                <li className={style.li}>{li11}</li>
                <li className={style.li}>{li12}</li>
                <li className={style.li}>{li13}</li>
                <li className={style.li}>{li14}</li>
            </ul>
        </div>


        <p>{p}</p>
    </div>

    )
}

export default Footer;