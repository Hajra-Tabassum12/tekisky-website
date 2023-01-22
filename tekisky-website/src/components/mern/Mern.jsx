import style from "./Mern.module.css"

function Mern({head,mid,end,h1}){
    
    return(
        <div className={style.main}>
            <h3 className={style.head}>{head}</h3>
            <p className={style.mid}>{mid}</p>
            <h5 className={style.end}>{end}</h5>
        </div>
       
    )
}
export default Mern;