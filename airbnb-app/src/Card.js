


export default function Card(props){
    let badgeText;
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"

    } else if (props.card.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className='card container'>
            {badgeText &&<div className='card-badge'>{badgeText}</div>}
            <div>
                <img className='cardImg' src={props.card.coverImg} alt="swimmer" />
                <section className='rating'>
                    <p><img  src="images/Star 1.png"/> {props.card.stats.rating} <span className='gray'>({props.card.stats.reviewCount}) {props.card.location}</span></p>
                    <p className='cardTitle'>{props.card.title}</p>
                    <p className='cardPrice'> <span>From ${props.card.price}/</span> person</p>
                </section>
            </div>
        </div>
    )
}