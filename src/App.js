import logo from './logo.svg';
import './App.css';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { useEffect, useState } from 'react';
import About from './About'

const Home = () => (
  <div>Hello world</div>
)

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon').then(res => {
      return res.json()
    })
    .then(data => {
      setPokemon(data)
    })
  }, [])
  return (
    <Router>
    <div className="App">
      <Link to="/about">About</Link>
    <switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" render={() => <About test={pokemon}/> } />
    </switch>
    </div>
    </Router>
  );
}

export default App;
