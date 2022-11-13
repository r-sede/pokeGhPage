import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';
const getCardClassName = (pokemon, before, after) => {
    return pokemon.types ? pokemon.types.map(c => {
        return before+c.type.name+after;
    })[0] : 'normal';
}
const PokemonShow = (props) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError]   = useState(false);
    const { id } = useParams();

    const [pokeDetail, setPokeDetail]   = useState(null);
    useEffect(() => {
        // if (!pokeDetail) {
            const url = `${ENDPOINT}/${id}`;
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    setLoaded(true);
                    setError(true);
                })
                .then(data => {
                    setPokeDetail(data);
                    setLoaded(true);
                });
        // }

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
                            <article className={`rounded-lg p-[10px] border border-black shadow-xl h-full ${getCardClassName(pokeDetail, 'bg-','/50')}`}>
                                <div className={`rounded-lg p-[10px] pt-[2px] border border-black h-full ${getCardClassName(pokeDetail, 'bg-', '')}`}>
                                    <div className="flex justify-between items-center text-white py-[2px]">
                                        <div>
                                            <strong>{pokeDetail.name}</strong>
                                            <span className="ml-[5px] text-sm">#{pokeDetail.id}</span>

                                        </div>
                                        <div className={`px-[3px] py-[2px] text-black text-sm rounded-full border-[2px] bg-white`}>
                                            {pokeDetail.types && pokeDetail.types.map((type, index) =>
                                                <span key={index} className="mx-[2px]">{type.type.name}</span>
                                            )}
                                        </div>
                                    </div>
                                    <figure className="flex justify-center items-center mb-[20px] flex-wrap">
                                        {pokeDetail.sprites['front_default'] && (
                                            <img src={ pokeDetail.sprites['front_default']} alt={pokeDetail.name} style={{width: '96px'}}/>

                                        )}
                                        {pokeDetail.sprites['back_default'] && (
                                            <img src={ pokeDetail.sprites['back_default']} alt={pokeDetail.name} style={{width: '96px'}}/>

                                        )}
                                        {pokeDetail.sprites['front_shiny'] && (
                                            <img src={ pokeDetail.sprites['front_shiny']} alt={pokeDetail.name} style={{width: '96px'}}/>

                                        )}
                                        {pokeDetail.sprites['back_shiny'] && (
                                            <img src={ pokeDetail.sprites['back_shiny']} alt={pokeDetail.name} style={{width: '96px'}}/>

                                        )}
                                        {pokeDetail.sprites.other['dream_world']['front_default'] && (
                                            <img src={ pokeDetail.sprites.other['dream_world']['front_default']} alt={pokeDetail.name} style={{width: '96px'}}/>

                                        )}
                                        {pokeDetail.sprites.other['dream_world']['back_default'] && (
                                            <img src={ pokeDetail.sprites.other['dream_world']['back_default']} alt={pokeDetail.name} style={{width: '96px'}}/>

                                        )}
                                        {pokeDetail.sprites.other['official-artwork']['front_default'] && (
                                            <img src={ pokeDetail.sprites.other['official-artwork']['front_default']} alt={pokeDetail.name} style={{width: '232px'}}/>

                                        )}
                                        {pokeDetail.sprites.other['official-artwork']['back_default'] && (
                                            <img src={ pokeDetail.sprites.other['official-artwork']['back_default']} alt={pokeDetail.name} style={{width: '232px'}}/>

                                        )}
                                    </figure>
                                    <div className="rounded-md p-[10px] border border-black mb-[20px] bg-white">
                                        {pokeDetail.stats && pokeDetail.stats.map((stat, index) =>
                                            <div key={index} className="flex justify-between items-center text-sm mx-[2px]"><span>{stat.stat.name}:</span> <strong>{stat['base_stat']}</strong></div>
                                        )}
                                    </div>
                                    <div className="rounded-md p-[10px] border border-black bg-white mb-[20px]">
                                        {pokeDetail.abilities && pokeDetail.abilities.map((ability, index) =>
                                            <div key={index} className="text-sm mx-[2px]">{ability.ability.name}</div>
                                        )}
                                    </div>
                                    <div className="rounded-md p-[10px] border border-black bg-white mb-[20px]">
                                        <div className="row !gap-y-[8px]">
                                            {pokeDetail.moves && pokeDetail.moves.map((move, index) =>
                                                <div key={index} className="text-sm mx-[2px] col-12 xs:col-6 md:col-3 lg:col-2">{move.move.name}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/*{this.props.url}*/}
                            </article>
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
                            <div className="flex justify-center py-[50px]"
                                 onClick={e => {
                                    setLoaded(!loaded)
                                }}
                            >
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