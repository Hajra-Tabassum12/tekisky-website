import style from "./cont.module.css"

const Cont = ({ map, n, e, sub, msg, h1, p, btn }) => {
    return (
        <div><h1 className={style.hh}>{h1}</h1>

            <div className={style.main}>

                <div className={style.mid}><iframe className={style.frame} src={map} frameborder="0"></iframe></div>
                <div className={style.end}>
                    <p className={style.pp}>{p}</p>
                    <input placeholder={n} className={style.inp1} type="text" name="" id="" />
                    <input placeholder={e} className={style.inp1} type="text" name="" id="" />
                    <br />
                    <input placeholder={sub} className={style.inp2} type="text" name="" id="" />
                    <br />
                    <textarea placeholder={msg} className={style.inp3} name="" id="" cols="30" rows="10"></textarea>

                    <button className={style.btn}>{btn}</button>

                </div>
            </div>
        </div>
    )
}

export default Cont;