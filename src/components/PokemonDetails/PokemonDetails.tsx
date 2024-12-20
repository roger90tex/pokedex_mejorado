import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pokeApi from "../../api/pokeApi";
import {
  DetailsContainer,
  PokemonImage,
  Title,
  StatsList,
  StatItem,
} from "./PokemonDetailStyles";

// Define la interfaz para los detalles del Pokémon
interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: { type: { name: string } }[];
}

const PokemonDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Tipar useParams con el tipo de dato esperado
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await pokeApi.get(`pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (!pokemon) {
    return <p>Cargando detalles del Pokémon...</p>;
  }

  return (
    <DetailsContainer>
      <PokemonImage
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <Title>{pokemon.name.toUpperCase()}</Title>
      <StatsList>
        <StatItem>
          <strong>Height:</strong> {pokemon.height}
        </StatItem>
        <StatItem>
          <strong>Weight:</strong> {pokemon.weight}
        </StatItem>
        <StatItem>
          <strong>Base Experience:</strong> {pokemon.base_experience}
        </StatItem>
        <StatItem>
          <strong>Types:</strong>{" "}
          {pokemon.types.map((type) => type.type.name).join(", ")}
        </StatItem>
      </StatsList>
    </DetailsContainer>
  );
};

export default PokemonDetails;

