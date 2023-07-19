import './App.css';
import PokemonCard from "./components/PokemonCard";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail';
import Favorites from './components/Favorites';
import Nav from './components/Nav';




function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <div className="App">    
      <Switch>
      <Route exact path="/" component={PokemonCard}/>  
        <Route exact path ='/pokemons/:id' component={Detail}/>
        <Route exact path="/favorites" component={Favorites}/>  
      
     
      </Switch>    
    </div>
    </BrowserRouter>
  );
}

export default App;
