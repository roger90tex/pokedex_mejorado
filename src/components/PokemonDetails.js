import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pokeApi from "../api/pokeApi";
import { DetailsContainer, PokemonImage, Title, StatsList, StatItem } from "./PokemonDetailStyles"; // Importación correcta de los estilos


const PokemonDetails = () => {
    const {id} = useParams(); //obtener el ID del pokemon desde la url
    const [pokemon, setPokemon]= useState(null);
    

    useEffect(()=>{
        const fetchPokemonDetails = async () =>{
            try{
                const response = await pokeApi.get(`pokemon/${id}`);
                console.log(response.data);
                setPokemon(response.data);
            } catch (error){
                console.error("Error fetching pokemon details:", error);
            } 
        };

        fetchPokemonDetails();   
    }, [id]);

    if (!pokemon){
        return <p>Cargando detalles del pokemon...</p>
    }

    return(
        <DetailsContainer>
            <PokemonImage src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}/>
            <Title>{pokemon.name.toUpperCase()}</Title>
            <StatsList>
                <StatItem><strong>Height:</strong>{pokemon.height}</StatItem>
                <StatItem><strong>Weight:</strong>{pokemon.weight}</StatItem>
                <StatItem><strong>Base Experience:</strong> {pokemon.base_experience}</StatItem>
                <StatItem><strong>Types:</strong> {pokemon.types.map((type) => type.type.name).join(", ")}</StatItem>
            </StatsList>
        </DetailsContainer>
    );
};

export default PokemonDetails;