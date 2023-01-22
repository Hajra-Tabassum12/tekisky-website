import style from "./Nav.module.css";
import { Link} from "react-router-dom"


function Nav(props) {
    console.log(props);

    return (
        <div className={style.nav}>
            <h1 className={style.h1}>TEKISKY</h1>
            <div className="sub-element">
                <ul>
                    <li className={style.li}><Link className={style.a} to="/">{props.home}</Link></li>
                    <li className={style.li}><Link className={style.a} to="/about">{props.about}</Link></li>
                    <li className={style.li}><Link className={style.a} to="/service">{props.ser}</Link></li>
                    <li className={style.li}><Link className={style.a} to="/technology">{props.tech}</Link></li>
                    <li className={style.li}><Link className={style.a} to="/contact">{props.cont}</Link></li>
                    <li className={style.li}><Link className={style.a} to="/batches">{props.btc}</Link></li>
                </ul>
            </div>
           
        </div>
       
    )
}

export default Nav;