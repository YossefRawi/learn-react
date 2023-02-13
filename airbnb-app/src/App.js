import React from "react"
import Header from './Header';
import Main from './Main';
import Card from './Card';
import data from './data';



function App() {

  const cardData = data.map(card =>{
    return <Card 
      key={card.id}
      card = {card}
      />
  })
  
  return (
    <>
    <Header/>
    <Main/>
    <div className="card-list">
    {cardData}
    </div>
    
    </>
  );
}

export default App;
