import style from "./Body1.module.css"

const Body1 = (props) => {
  return (
    <div className={style.body1}>
      <div >
        <li className={style.body1li}> {props.li1}</li>
        <p className={style.p}>{props.p}</p>

      </div>
    </div>
  )
}
export default Body1;