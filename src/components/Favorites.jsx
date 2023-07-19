import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CardFavorite from './CardFavorite'
import styles from "../components/css/Favorite.module.css"

const Favorites = () => {
  const pokemon = useSelector((state) => state.favorites)

  return (
    <>
      <div className={styles.card}>
        <div className={styles.favoriteContainer}>
          {pokemon.length > 0 ? (
            pokemon.map(p => (
              <CardFavorite
                key={p.id}
                id={p.id}
                name={p.name}
                tipo={p.types}
                img={p.image}
              />
            ))
          ) : (
            
              <h1 className= {styles.nothingTitle}>nothing to show🤔</h1>
        
          )}
        </div>
      </div>
    </>
  )
}

export default Favorites
