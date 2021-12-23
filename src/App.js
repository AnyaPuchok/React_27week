
import './App.css';
import Tarif from './components/Tarif';
import {tarifs} from './components/Cart';

function App() {
  return (
    <div className="App">
      
      {
       tarifs.map((card, index)=>
       <Tarif key={index} tarif={card.tarif} price={card.price} speed={card.speed} note={card.note} part={card.part} isSelected={card.isSelected} ></Tarif>
       )
      }

    </div>
  );
}

export default App;