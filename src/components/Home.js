import React, { useEffect, useState } from "react";
import { MainContainer, Title, SearchBar, PokemonGrid, PokemonCard } from "./HomeStyles";
import pokeApi from "../api/pokeApi";
import { Link } from "react-router-dom";



const Home =()=>{
    const [pokemonList, setPokemonList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    // Obtener pokemon de la api
    useEffect(() =>{ 
        const fetchPokemon =async () => {
            try{
                const response = await pokeApi.get("pokemon?limit=200");
                const promises =response.data.results.map(async (pokemon) => {
                    const details =await pokeApi.get (pokemon.url);
                    return{
                        id: details.data.id,
                        name: details.data.name,
                        image: details.data.sprites.front_default,
                        types: details.data.types,
                    };
                });
                const allPokemon= await Promise.all(promises);
                setPokemonList(allPokemon);
            } catch (error){
                console.error("Error fetching pokemon", error);
            }
        };
        
        fetchPokemon();
    }, []);
    // Filtrar Pokémon por búsqueda
  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return(
        <MainContainer>
            <Title>Pokédex</Title>
            <SearchBar
             type="text" 
             placeholder="Buscar Pokémon..."
             value={searchTerm}
             onChange={(e)=> setSearchTerm(e.target.value)} //Actualiza el estado de busqueda
             />
            <PokemonGrid>
                {filteredPokemon.map((pokemon) => (
                  <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
                  <PokemonCard type={pokemon.types[0].type.name}>
                  <img src={pokemon.image} alt={pokemon.name} />
                  <h2>{pokemon.name}</h2>
                  </PokemonCard>
                  </Link>
               ))}
              </PokemonGrid>;     
    </MainContainer>
  );
};

export default Home;
