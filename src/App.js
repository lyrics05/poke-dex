import './App.css';
import PokemonCard from "./components/PokemonCard";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail';



function App() {
  return (
    <BrowserRouter>
    <div className="App">    
      <Switch>
      <Route exact path="/" component={PokemonCard}/>  
        <Route exact path ='/pokemons/:id' component={Detail}/>
      
     
      </Switch>    
    </div>
    </BrowserRouter>
  );
}

export default App;
