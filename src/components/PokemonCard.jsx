import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/actions.js";
import Card from "./Card";
import Paged from "./Paged";
import Search from "./Search.jsx";
import pokeball from "./img/pokeball.webp";
import styles from "./css/PokemonCard.module.css";

function PokemonCard() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const currentPage = useSelector((state) => state.currentPage);

  useEffect(() => {
    dispatch(actions.getAllPokemon());
  }, [dispatch]);

  const pokemonsPerPage = 9;
  const firstPokemonIndex = (currentPage - 1) * pokemonsPerPage;
  const lastPokemonIndex = firstPokemonIndex + pokemonsPerPage;
  const showRecipesPage = pokemons.slice(firstPokemonIndex, lastPokemonIndex);

  return (
    <div>
      <Search />
      <div>
        <Paged maximo={Math.ceil(pokemons.length / pokemonsPerPage)} />
      </div>
      <div className={styles.cards}>
        {showRecipesPage.length ? (
          showRecipesPage.map((pokemon) => {
            return (
              <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                tipo={pokemon.types}
                img={pokemon.image}
              />
            );
          })
        ) : (
          <div className={styles.flex_loading_container}>
            <h3 className={styles.loading_title}>Loading...</h3>
            <img
              className={styles.loading_img}
              src={pokeball}
              alt="Loading Pokeball"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonCard;
