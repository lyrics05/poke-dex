import React from "react";
import styles from "./css/Card.module.css";
import { Link } from "react-router-dom";
import { favorite } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import swal from 'sweetalert';

const Card = ({ name, img, id, tipo }) => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  function handleFavorite(id) {
    swal("Added to favorites!");
    const pokemon = pokemons.find((p) => p.id === id);
    dispatch(favorite(pokemon));
    console.log(pokemon)
    console.log("HICE CLICK")
  }

  return (
    <div className={styles.card}>
      <h4>Number: {id}</h4>
      <Link className={styles.linkstyle} to={`/pokemons/${id}`}>
        <h1 className={styles.pokeTitle}>{name}</h1>
      </Link>
      <div>
        <Link className={styles.linkstyle} to={`/pokemons/${id}`}>
          <img className={styles.imagen} src={img} alt="" />
        </Link>
      </div>
      <div>
        {tipo?.map((t) => (
          <h3 key={t.name}>Type: {t.name}</h3>
        ))}
      </div>
      <button onClick={() => handleFavorite(id)}>Add to favorites</button>
    </div>
  );
}

export default Card;
