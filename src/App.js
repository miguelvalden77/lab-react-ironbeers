import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom"
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import DetailBeer from './pages/DetailBeer';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Routes>
        <Route path='/beers' element={<Beers peticion={"beers"}/>}/>
        <Route path='/random-beer' element={<RandomBeer/>}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
        <Route path='/beers/:beerId' element={<DetailBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
