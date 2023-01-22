import style from "./image2.module.css"

function Image2(props) {

    return (<div className={style.image2}>
        <h1 className={style.cont}>Grow your <span style={{ color: "blue", textDecoration: "underline" }}> business with </span> tekisky</h1>
        <div className={style.btn}>
            <button className={style.btn1}>{props.btn1}</button>
            <button className={style.btn1}>{props.btn2}</button>
        </div>
    </div>
    )
}
export default Image2;