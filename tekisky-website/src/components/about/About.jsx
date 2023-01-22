

const About=(props)=>{
    return(
        <div className={props.s}>
         <h3 className={props.s1}>{props.head}</h3>
         <h6 className={props.s3}>{props.name}</h6>
         <p className={props.s3}>{props.mid}</p>
         <p className={props.s3}>{props.end}</p>
        </div>
    )
}
export default About;