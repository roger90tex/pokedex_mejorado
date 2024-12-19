import styled from "styled-components";


// Estilos
export const DetailsContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #2a75bb;
  margin-bottom: 10px;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

export const StatItem = styled.li`
  font-size: 1rem;
  margin: 8px 0;
  color: #333;
`;