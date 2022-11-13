import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const getCardClassName = (pokemon, before, after) => {
    return pokemon.types ? pokemon.types.map(c => {
        return before+c.type.name+after
    })[0] : 'normal';
}

class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            error: false,
        };
    }
    componentDidMount() {
        const url = this.props.url;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                this.setState({error: true, loaded: true})
            })
            .then(data => {
                this.pokeDetail = data
                this.setState(({ loaded: true }))
            });
    }

    render() {
        const hit = this.pokeDetail
        // console.log(this.pokeDetail)
        return (
            // status ok et chargé
            this.state.loaded && !this.state.error ? (
                <Link to={`/show/${hit.id}`}>
                    <article className={`rounded-lg p-[10px] border border-black hover:shadow-xl cursor-pointer h-full ${getCardClassName(hit, 'bg-','/50')}`}>
                        <div className={`rounded-lg p-[10px] pt-[2px] border border-black h-full ${getCardClassName(hit, 'bg-', '')}`}>
                            <div className="flex justify-between items-center text-white py-[2px]">
                                <strong>{hit.name}</strong>
                                <div className={`px-[3px] py-[2px] text-black text-sm rounded-full border-[2px] bg-white`}>
                                    {hit.types && hit.types.map((type, index) =>
                                        <span key={index} className="mx-[2px]">{type.type.name}</span>
                                    )}
                                </div>
                            </div>
                            <figure className="flex justify-center items-center mb-[20px]">
                                <img src={ hit.sprites['front_default']} alt={hit.name} style={{height: '96px'}}/>
                            </figure>
                            <div className="rounded-md p-[10px] border border-black mb-[20px] bg-white">
                                {hit.stats && hit.stats.map((stat, index) =>
                                    <div key={index} className="flex justify-between items-center text-sm mx-[2px]"><span>{stat.stat.name}:</span> <strong>{stat['base_stat']}</strong></div>
                                )}
                            </div>
                            <div className="rounded-md p-[10px] border border-black bg-white">
                                {hit.abilities && hit.abilities.map((ability, index) =>
                                    <div key={index} className="text-sm mx-[2px]">{ability.ability.name}</div>
                                )}
                            </div>
                        </div>
                        {/*{this.props.url}*/}
                    </article>
                </Link>

            ) : // status pas ok
                this.state.loaded && this.state.error ? (
                <article className="rounded-lg p-[10px] border border-black hover:shadow-xl h-full min-h-[408px] bg-gray-200">
                    <div className="rounded-lg p-[10px] pt-[2px] border border-black h-full w-full flex items-center justify-center bg-gray-300">
                        <pre>Something went wrong :(</pre>
                    </div>
                </article>
            ) : // en chargement
                (
                <article className="rounded-lg p-[10px] border border-black hover:shadow-xl h-full min-h-[408px] bg-gray-200">
                    <div className="rounded-lg p-[10px] pt-[2px] border border-black h-full w-full flex items-center justify-center bg-gray-300">
                        <div className="spinner"></div>
                    </div>
                </article>
            )

        )
    }

}

export default PokemonCard;