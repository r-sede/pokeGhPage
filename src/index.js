import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import List from './components/List';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonShow from "./components/PokemonShow";

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <React.StrictMode>
        <BrowserRouter>
            {/*<App />*/}
            <Routes>
                <Route path="/" element={<List />}></Route>
                <Route path="/p=:pageParams" element={<List />}></Route>
                <Route path="/show/:id" element={<PokemonShow />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

