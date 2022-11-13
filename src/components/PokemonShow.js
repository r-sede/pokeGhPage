import React, { useEffect, useState } from "react"
import {Link, useParams} from "react-router-dom";
const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

const PokemonShow = (props) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError]   = useState(false);
    const [pokeDetail, setPokeDetail]   = useState(false);
    const { id } = useParams();
    useEffect(() => {
        const url = `${ENDPOINT}/${id}`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                setLoaded(true)
                setError(true)
            })
            .then(data => {
                setPokeDetail(data)
                setLoaded(true)
            });
    }, []);
    return (
        loaded && !error ? (
            <>
                <header className="bg-green py-[10px] sticky top-0 shadow-xl">
                    <div className="container">
                        <div className="flex justify-between">
                            <Link to="/">
                                <img className="logo" src="/assets/img/logo-pokemon-79x45.png"/>
                            </Link>
                        </div>
                    </div>
                </header>
                <main className="py-[30px]">
                    <div className="container">
                        <div className="main-content">
                            <h1>{JSON.stringify(pokeDetail)}</h1>
                        </div>
                    </div>
                </main>
            </>
        ) : // status pas ok
        loaded && error ? (
            <>
                <header className="bg-green py-[10px] sticky top-0 shadow-xl">
                    <div className="container">
                        <div className="flex justify-between">
                            <Link to="/">
                                <img className="logo" src="/assets/img/logo-pokemon-79x45.png"/>
                            </Link>
                        </div>
                    </div>
                </header>
                <main className="py-[30px]">
                    <div className="container">
                        <div className="main-content">
                            <pre>Something went wrong :(</pre>
                        </div>
                    </div>
                </main>
            </>
        ) : // en chargement
        (
            <>
                <header className="bg-green py-[10px] sticky top-0 shadow-xl">
                    <div className="container">
                        <div className="flex justify-between">
                            <Link to="/">
                                <img className="logo" src="/assets/img/logo-pokemon-79x45.png"/>
                            </Link>
                        </div>
                    </div>
                </header>
                <main className="py-[30px]">
                    <div className="container">
                        <div className="main-content">
                            <div className="flex justify-center py-[50px]">
                                <div className="spinner"></div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    )
}

export default PokemonShow;