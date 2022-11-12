import React, { Component } from 'react';
import PokemonCard from './components/PokemonCard'
import './App.css';
// console.clear()
const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perPage: 20,
      currentOffset: 0,
      filterString: '',
      pokeToDisplay: [],
      nextUrl: null,
      previousUrl: null,
      loaded: false
    };
  }
  fetchPokemon() {
    const url = `${ENDPOINT}?offset=${this.state.currentOffset}&limit=${this.state.perPage}`;
    fetch(url)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => this.setState(({pokeToDisplay: data.results, loaded: true})))
  }
  componentDidMount() {
    this.fetchPokemon()
  }
  render() {
    const results = this.state.pokeToDisplay
    return (
        this.state.loaded && (
            <>
              <header className="bg-green py-[10px] sticky top-0">
                <div className="container">
                  <div className="flex justify-between">
                    <img className="logo" src="assets/img/logo-pokemon-79x45.png"/>
                    <input className="py-2 px-4 rounded-lg" type="text" placeholder="Search" onChange={e => {
                      this.setState({filterString: e.target.value})
                    }}/>
                  </div>
                </div>
              </header>
              <main className="py-[30px]">
                <div className="container">
                  <div className="main-content">
                    <div className="row">
                      {results
                          .filter(pokemon => {
                            // console.log(pokemon)
                            // return true
                            return this.state.filterString ? pokemon.name.includes(this.state.filterString) : true
                          })
                          .map((pokemon, index) =>
                              <div className="col-12 sm:col-6 lg:col-4 xl:col-3" key={pokemon.url}>
                                <PokemonCard url={pokemon.url} />
                              </div>
                          )}
                    </div>
                    <div className="mt-[30px]">
                      <div className="flex justify-between">
                        {/*<button className="bg-green text-white text-bold px-4 py-2 rounded-lg cursor-pointer"*/}
                        {/*  onClick={ e => {*/}
                        {/*    // this.setState({perPage: this.state.perPage - 20});*/}
                        {/*    // this.fetchPokemon()*/}
                        {/*}}>moins de pokemon</button>*/}
                        <button className="bg-green text-white text-bold px-4 py-2 rounded-lg cursor-pointer" onClick={ e => {
                          this.setState((state) => {
                            return {
                              perPage: state.perPage + state.perPage
                            }
                          },this.fetchPokemon);
                        }} >plus de pokemon</button>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </>
        )

        )

  }
}

export default App;