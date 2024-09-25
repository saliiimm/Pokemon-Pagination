import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PokeDex from './components/PokeDex/PokeDex';
import Pagination from './components/Pagination/Pagination';
import PokeInfo from './components/PokeInfo/PokeInfo';
function App() {
  const [pokemonlist, setPokemonList] = useState([]);
  const [pokemonInfo, setpokemonInfo] = useState('');
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [open, setOpen] = useState(false);

  const showPokemonInfo = (pokemon) => {
    console.log('pokemon info for :', pokemon);
    setpokemonInfo(pokemon);
    setOpen(true);
  };

  const closeInfo = () => {
    setOpen(false);
    setpokemonInfo('');
  };

  const pokemonFetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      console.log(response);
      setNextUrl(response.data.next);
      console.log('next url:', response.data.next);
      setPrevUrl(response.data.previous);
      console.log('previous:', response.data.previous);
      console.log('new pokemons', response.data.results);
      getPokemons(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const getPokemons = async (res) => {
    const pokemonData = await Promise.all(
      res.map(async (pokemon) => {
        const result = await axios.get(pokemon.url);
        return result.data;
      })
    );
    setPokemonList(pokemonData);
  };

  const changeUrl = (url) => {
    setUrl(url);
  };

  useEffect(() => {
    pokemonFetch();
  }, [url]);

  return (
    <div>
      {loading ? (
        <div>
          <h2>...loading</h2>
        </div>
      ) : (
        <PokeDex pokemonList={pokemonlist} showPokemonInfo={showPokemonInfo} />
      )}
      {pokemonInfo !== '' && (
        <PokeInfo
          open={open}
          name={pokemonInfo.name}
          sprite={pokemonInfo.sprites.front_default}
          types={pokemonInfo.types}
          stats={pokemonInfo.stats}
          close={closeInfo}
        />
      )}
      {prevUrl && (
        <Pagination text={'Previous'} changeUrl={changeUrl} url={prevUrl} />
      )}
      {nextUrl && (
        <Pagination text={'Next'} changeUrl={changeUrl} url={nextUrl} />
      )}
    </div>
  );
}

export default App;
