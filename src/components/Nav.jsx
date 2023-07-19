import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from "./css/Nav.module.css"
import titulo from"./img/titulo.png"

const Nav = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.ulList}>
            <li><img className={styles.img} src={titulo} alt="" /></li>
            <Link className="title title--activo" to={"/"}><li>Home</li></Link>
            <Link className="title" to={"/favorites"}><li className={styles.favorite}>Favorites</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav