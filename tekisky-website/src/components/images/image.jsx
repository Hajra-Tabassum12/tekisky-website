import style from "./image.module.css"


import Img1 from "../../components/images/image1"

import Image2 from "../../components/images/image2"
function Image() {
    return (
        <div className={style.image}>
            <Image2 btn1="Get started" btn2="our services" />
            <Img1 src="http://tekisky.com/assets/img/hero-img.svg" />

        </div>
    )
}
export default Image;

