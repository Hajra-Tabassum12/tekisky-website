import style from "./Body.module.css";
import Body1 from "../../components/Body/Body1"

import Body2 from "../../components/Body/Body2"
const Body = (props) => {
    return (
        <div className={style.body}>
            <div className={style.content}>
                <h1>{props.content}</h1>
            </div>
            <div className={style.main}>
                <div>
                    <Body1 li1="MongoDB" p="It combines the power of the cloud with a document database that puts developers in control." />
                    <Body1 li1="Express" p="Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications." />
                    <Body1 li1="React" p="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes." />
                    <Body1 li1="Node" p="It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services" />
                </div>

                <Body2 src="http://tekisky.com/assets/img/mern-stack.png" />

            </div>
        </div>
    )
}
export default Body;