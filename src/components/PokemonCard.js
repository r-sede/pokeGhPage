import React, { Component } from 'react';
class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokeDetail: '',
            loaded: false,
        };
    }
    componentDidMount() {
        const url = this.props.url;
        fetch(url)
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data => {
                    this.setState(({pokeDetail: data, loaded: true}))
                }
            )

    }
    getCardClassName(pokemon,before, after) {
        return this.state.pokeDetail.types ? this.state.pokeDetail.types.map(c => {
            return before+c.type.name+after
        })[0] : 'normal';
    }
    render() {
        const hit = this.state.pokeDetail
        // console.log(this.state.pokeDetail)
        return (
            this.state.loaded && (
                <article className={`rounded-lg p-[10px] border border-black hover:shadow-xl cursor-pointer h-full ${this.getCardClassName(hit, 'bg-','/50')}`}>
                    <div className={`rounded-lg p-[10px] pt-[2px] border border-black h-full ${this.getCardClassName(hit, 'bg-', '')}`}>
                        <div className="flex justify-between items-center text-white py-[2px]">
                            <strong>{hit.name}</strong>
                            <div className={`px-[3px] py-[2px] text-black text-sm rounded-full border-[2px] bg-white`}>
                                {hit.types && hit.types.map((type, index) =>
                                    <span key={index} className="mx-[2px]">{type.type.name}</span>
                                )}
                            </div>
                        </div>
                        <figure className="flex justify-center items-center mb-[20px]">
                            <img src={ this.state.pokeDetail.sprites['front_default']} alt={hit.name}/>
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
            )

        )
    }

}

export default PokemonCard;