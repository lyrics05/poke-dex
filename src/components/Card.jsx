import React from "react";
import styles from"./css/Card.module.css"

const Card = ({name,img,id,tipo})=>{
    return(
        <div className={styles.card} >
             <h4>Number: {id}</h4>

            <h1 className={styles.pokeTitle}>{name}</h1>

            <div>
                <img className={styles.imagen} src={img} alt="" />
            </div>

            <div>
                {tipo?.map(t=>(
                    <h3>Type: {t.name}</h3>
                ))}
            </div>
        </div>
    )
}

export default Card