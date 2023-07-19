import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from "../components/css/Favorite.module.css";
import { deleteFavorite } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';

const CardFavorite = ({ id, tipo, name, img }) => {
  const dispatch = useDispatch();
  

  function handleDelete() {
    swal({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your Pokémon has been deleted!", {
          icon: "success",
        });
        dispatch(deleteFavorite(id))
      } else {
        swal("Your Pokémon is safe!");
      }
    });
  
    console.log("hice click");
  }

  return (
    <div className={styles.card}>
      <h4>Number: {id}</h4>
      <Link to={`/pokemons/${id}`}>
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
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CardFavorite;
