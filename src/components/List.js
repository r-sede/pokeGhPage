import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import PokemonCard from "./PokemonCard";
const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

const List = (props) => {
    const [pokeToDisplay, setPokeToDisplay] = useState([]);
    const [perPage, setPerPage] = useState(20);
    const [nextUrl, setNextUrl] = useState(20);
    const [loaded, setLoaded] = useState(false);
    const [filterString, setFilterString] = useState('');
    const [error, setError]   = useState(false);

    let { pageParams } = useParams();
    const [page, setPage]   = useState(pageParams || 1);

    useEffect(() => {
        console.log(page)
        const url = `${ENDPOINT}?offset=0&limit=${page * perPage}`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                setLoaded(true);
                setError(true);
            })
            .then(data => {
                setPokeToDisplay(data.results);
                setLoaded(true);
                setNextUrl(data.next)
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
                                <input className="py-2 px-4 rounded-lg" type="text" placeholder="Search"  autoCorrect="off" autoCapitalize="none" onChange={e => {
                                    setFilterString(e.target.value.toLocaleLowerCase().trim())
                                }}/>
                            </div>
                        </div>
                    </header>
                    <main className="py-[30px]">
                        <div className="container">
                            <div className="main-content">
                                <div className="row">
                                    {pokeToDisplay
                                        .filter(pokemon => {
                                            return filterString ? pokemon.name.includes(filterString) : true
                                        })
                                        .map((pokemon, index) =>
                                            <div className="col-12 sm:col-6 lg:col-4 xl:col-3" key={pokemon.url}>
                                                <PokemonCard url={pokemon.url} />
                                            </div>
                                        )}
                                </div>
                                <div className="mt-[30px]">
                                    <div className="flex justify-between">
                                        <Link to={`/p=${parseInt(page) - 1}`} className="bg-green text-white text-bold px-4 py-2 rounded-lg cursor-pointer" disabled={page <= 1}>moins de pokemon</Link>
                                        <Link to={`/p=${parseInt(page) + 1}`} className="bg-green text-white text-bold px-4 py-2 rounded-lg cursor-pointer" disabled={!nextUrl}>plus de pokemon</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </>
        ) : // status pas ok
        loaded && error ? (
            <>

            </>
        ) : (
            <>

            </>
        )

    )

};

export default List