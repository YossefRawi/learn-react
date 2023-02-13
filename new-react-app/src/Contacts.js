




export default function Contacts(props){
    return(
<div className="contacts">
    <div className="contact-card">
        <div className="setup"> <span>Setup:</span> {props.setup}</div>
        <div className="punchline"><span>Punchline: </span> {props.punchline}</div>
        <div>{props.isPun}</div>
    </div>
</div>)
    
}