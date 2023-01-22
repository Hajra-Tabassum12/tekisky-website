import style from "./image1.module.css"

const Img1=(props)=>{
    return(
        <div className={style.image} >
            <img className={style.img} src={props.src}  />
        </div>
    )
}
export default Img1;