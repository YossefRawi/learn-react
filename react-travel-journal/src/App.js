import Header from "./components/Header";
import data from "./components/data";
import Card from "./components/Card";

function App() {
  const cards = data.map(card => {
    return(
        <Card
        key = {card.id}
        card = {card}/>
    )})
  return (
    <>
    <Header/>
    
    <main>
    {cards}
    </main>
    </>
  );
}

export default App;
