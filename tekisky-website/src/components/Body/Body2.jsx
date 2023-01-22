import style from "./Body2.module.css"

function Body2(props){
    return(
        <div className={style.image}>
           <img className={style.img1} src={props.src} alt="" />
        </div>
    )
}
export default Body2;