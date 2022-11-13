import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonShow from "./components/PokemonShow";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Wrapper = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/page/:page" element={<App />}></Route>
            <Route path="/show/:id" element={<PokemonShow />}></Route>
        </Routes>
    )
}


root.render(
  <React.StrictMode>
      <BrowserRouter>
          {/*<App />*/}
          <Wrapper />
      </BrowserRouter>
  </React.StrictMode>
);

