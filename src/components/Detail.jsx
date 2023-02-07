import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../redux/actions/actions";
import { Link, useParams } from "react-router-dom";
import styles from "./css/Detail.module.css"
import pokeball from"./img/pokeball.webp"

const Detail = ()=>{
    const dispatch = useDispatch()
    const detalle = useSelector((state)=>state.pokemonDetail)
    const{id}=useParams()
    console.log(id)
    useEffect(()=>{
        dispatch(getById(id))
    },[dispatch])
 
    return(
        < >
            <Link to={"/"}><button className={styles.button_detail}>Back to Main Page</button></Link>
       {detalle.length?
             <div  className={styles.flex_detail_container}>  

            <div className={styles.divbla}>
             <h4 className={styles.detail_id}>Number: {detalle[0].id}</h4>

            <h1 className={styles.detail_title}>{detalle[0].name}</h1>

            <div>
                <img className={styles.image_Detail} src={detalle[0].image} alt="" />
            </div>
            </div>{/*div de imagen titulo id*/}

            <div className={styles.detail_atak_defense}>
            <div  >
                {detalle[0].types?.map(t=>(
                    <h3 className={styles.typedos}><span className={styles.detail_type}>Type:</span> {t.name}</h3>
                ))}
            </div>
            <div>
            <h4 className={styles.typedos}><span className={styles.detail_type}>Attack: </span>{detalle[0].attack}</h4>
            </div>
            <div>
            <h4 className={styles.typedos}><span className={styles.detail_type}>Defense:</span> {detalle[0].defense}</h4>
            </div>
            <div>
            <h4 className={styles.typedos}><span className={styles.detail_type}>Hp:</span> {detalle[0].hp}</h4>
            </div>
            <div>
            <h4 className={styles.typedos}><span className={styles.detail_type}>Height: </span>{detalle[0].height}</h4>
            </div>
            <div>
            <h4 className={styles.typedos}><span className={styles.detail_type}>Weight: </span>{detalle[0].weight}</h4>
            </div>
            </div>
        </div>:<div >
              <h3>Loading...</h3>
              <img src={pokeball}/>
            </div>}
   </>
    )
}

export default Detail