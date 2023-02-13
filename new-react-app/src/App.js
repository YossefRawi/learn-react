import Contacts from "./Contacts";
import jokesData from "./jokesData";


function App() {
  const jokesElementData = jokesData.map(joke => {
    return <Contacts setup = {joke.setup} punchline = {joke.punchline} />
  })
  return (
    <div className="container">
    {jokesElementData}
    </div>
    
  );
}

export default App;
