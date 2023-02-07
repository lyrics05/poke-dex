import { useState } from "react"
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom"
import * as actions  from "../redux/actions/actions.js"
import Card from "./Card"
import Paged from "./Paged"
import Search from "./Search.jsx"
import pokeball from"./img/pokeball.webp"
import styles from"./css/PokemonCard.module.css"
import titulo from"./img/titulo.png"

//FIREBASE DEPLOY --ONLY HOSTING: PARA SUBIR ACTUALIZACIONES


  
function PokemonCard(props){
    const dispatch = useDispatch()
    const pokemons = useSelector((state)=>state.pokemons)
    
    useEffect(()=>{
        dispatch(actions.getAllPokemon())
     
    },[dispatch])
   

    const [page,setPage] = useState(1)
    const[recipesPage,setRecipesPage]= useState(9)
    const quantityRecipePage = page * recipesPage;
    const firstRecipePage =  quantityRecipePage - recipesPage;

    const showRecipesPage = pokemons.slice(firstRecipePage,quantityRecipePage);


    function paged(numberPage){
        setPage(numberPage)
        let liColor=document.querySelectorAll("li")
        liColor.addEventListener("click",liColor.style.background="red")
        console.log(liColor)
    
       
    }
    
    
     return(
       <div>
        <img className={styles.imageTitle}src={titulo} alt="" />
        <Search/>
      
    <div><Paged recipesPage={recipesPage} pokemons={pokemons.length} paged={paged}/></div>
    < div className={styles.cards}>
       {showRecipesPage.length?showRecipesPage.map((pokemon,i)=>{
      
           
            return(
                <Link  className={styles.linkstyle} to={`/pokemons/${pokemon.id}`}>
              
                <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                tipo={pokemon.types}
                img={pokemon.image}
                />
               
                </Link>
            )
        })  :<div className={styles.flex_loading_container}>
              <h3 className={styles.loading_title}>Loading...</h3>
              <img className={styles.loading_img}src={pokeball}/>
            </div>
            } </div>
        <div><Paged recipesPage={recipesPage} pokemons={pokemons.length} paged={paged}/></div>
        
     </div>
    
     )
}
export default PokemonCard