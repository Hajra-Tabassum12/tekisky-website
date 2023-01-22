import style from "./service.module.css"
import { useRef } from "react";

const Service = (props) => {



  return (
    <div className={style.boxes}>
      <h1 className={style.h1}>{props.h}</h1>
      <div className={style.component1}>
        <div className={style.box1}>
          <h4>{props.tran}</h4>
          <p>{props.qua}</p>
        </div>
      </div>
    </div>
  )
}
export default Service;