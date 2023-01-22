import style from "../views/index.module.css"
import Nav from "../components/Navigation/Nav"
import Image from "../components/images/image"
import Body from "../components/Body/Body"
import Service from "../components/service/service"
import Mern from "../components/mern/Mern"
import Tech from "../components/technologies/Tech"
import About from "../components/about/About"
import Cont from "../components/contact/cont"
import Footer from "../components/Footer/Footer"
function Index() {
    const images = [
        { i: "http://tekisky.com/assets/img/1.png" },
        { i: "http://tekisky.com/assets/img/2.png" },
        { i: "http://tekisky.com/assets/img/3.png" },
        { i: "http://tekisky.com/assets/img/4.png" },
        { i: "http://tekisky.com/assets/img/5.png" },
        { i: "http://tekisky.com/assets/img/6.png" },
        { i: "http://tekisky.com/assets/img/7.png" },
        { i: "http://tekisky.com/assets/img/8.png" },
        { i: "http://tekisky.com/assets/img/9.png" },
        { i: "http://tekisky.com/assets/img/10.png" },
        { i: "http://tekisky.com/assets/img/11.png" },
        { i: "http://tekisky.com/assets/img/12.png" },
        { i: "http://tekisky.com/assets/img/13.png" },
        { i: "http://tekisky.com/assets/img/14.png" },
        { i: "http://tekisky.com/assets/img/15.png" },
    ]
    return (
        <div>
            <Nav  home="Home" about="About" ser="services" tech="technology" cont="contact Us" btc="new batches" />
            <Image />
            <Body content="We are starting a New MERN and JAVA Full stack batch on 15 June 2022" />

            <div className={style.main}>
                <div className={style.s1}>
                    <Service h="services" tran="training" qua="We provide Quality Training" />
                    <Service tran="Web Development" qua="Develop Website for your Business" />
                </div>
                <div className={style.s2}>
                    <Service tran="Business Digitalization" qua="Digitalize Your business With Us" />
                    <Service tran="IT Consulting" qua="We Will Assist You For a job" />
                </div>
            </div>


            <div className={style.whole}>

                <Mern head="Build web apps using React and Node." mid="React is used for developing user interfaces. js to compile and optimize the JavaScript code and easy to create UI Test cases. Node. js handles requests and authentication from the browser, make database calls,." end="Read more" h1="Why choose Mern" />
                <Mern head="Build web apps using React and Node." mid="React is used for developing user interfaces. js to compile and optimize the JavaScript code and easy to create UI Test cases. Node. js handles requests and authentication from the browser, make database calls,." end="Read more" />
                <Mern head="Build web apps using React and Node." mid="React is used for developing user interfaces. js to compile and optimize the JavaScript code and easy to create UI Test cases. Node. js handles requests and authentication from the browser, make database calls,." end="Read more" />
            </div>

            {images.map((value) => (<Tech imge={value.i} />))}
            
            <About head="About" name="sj Khan" mid="Director" end="11 years of IT experience" s={style.abt} s1={style.head} s3={style.mid} />

            <Cont map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.32841750132!2d77.30160391412547!3d19.180852853654407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d68e7ff77bef%3A0x74ad73ce547dd8a0!2sWorkshop%20Rd%2C%20Shri%20Nagar%2C%20Nanded%2C%20Maharashtra%20431602!5e0!3m2!1sen!2sin!4v1666076564479!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" n='Your Name' e="Your Email" sub="Subject" msg="Message" h1="Contact Us" p="TEKISKY" btn="Send Message" />

            <Footer head="TEKISKY" li1="placed students" li2="Our success Stories" li3="Addmission Forms" head2="USEFUL LINKS" li4="Home" li5="About US" li6="Sevices" li7="Term of Services" li8="privacy policy" li9="New Batches" head3="CONTACT US" li10="Tekisky pvt. ltd. 2nd floor" li11="Opposite WaterTank, WorkShop" li12="Corner, Nanded-431605" li13="Phone: +91-8625817334" li14="Email: hr@tekisky.com" p="© Copyright Tekisky pvt. ltd. All Rights Reserved" />
        </div>
    )
}

export default Index;