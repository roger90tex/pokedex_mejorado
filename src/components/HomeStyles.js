import styled from "styled-components";

export const MainContainer = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffcb05;
  text-shadow: 2px 2px #2a75bb;
  margin-bottom: 20px;
`;

export const SearchBar = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 2px solid #2a75bb;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 30px;
  outline: none;

  &:focus {
    border-color: #ffcb05;
  }
`;

export const PokemonCard = styled.div`
  background-color: #fff;
  border: 2px solid ${(props) => (props.type === "fire" ? "#ff4500" : "#2a75bb")};
  border-radius: 12px;
  padding: 15px;
  width: 150px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100px;
    height: 100px;
  }

  h2 {
    font-size: 1rem;
    color: #2a75bb;
    margin-top: 10px;
  }
`;

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  justify-items: center;
`;
