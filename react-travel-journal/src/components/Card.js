import data from "./data";


export default function Card(props){
    return(
    <div className="card-container">
        <img alt="mountain" className="card-image" src={props.card.imageUrl}/>
        <div className="card-information">
            <div className="location"><img src="images/Fill 219.png"/> {props.card.location} <span className="location-link">View on Google Maps</span> </div>
            <div className="card-title">{props.card.title}</div>
            <div className="card-date">{props.card.startDate} - {props.card.endDate}</div>
            <div className="card-desc">{props.card.description}</div>
        </div>
    </div>
    )
}