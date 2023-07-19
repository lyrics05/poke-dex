import React from "react";
import { getAllPokemon, getByName } from "../redux/actions/actions";
import {useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./css/Search.module.css";
import { setPage } from "../redux/actions/actions";





const Search  = ()=>{
    const[input, setInput]=useState("")
    const dispatch = useDispatch()

    
    function handleChange(e){
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getByName(input))
        setInput("")
       dispatch(setPage(1))
    }
    function handleClick(e){
        e.preventDefault()
       dispatch(getAllPokemon())
    }
    return(
        <div>
            <div>
            <button className={styles.button_search} onClick={(e)=>handleClick(e)}>Back</button>
            </div>

            <div className={styles.flex_search_container}>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <input className={styles.input_search} onChange={(e)=>handleChange(e)} type="text" value={input} placeholder="Search Pokemon..."/>
            <button className={styles.button_search} type="submit">Search</button>   
           </form>
           </div>
        </div>
    )
}

export default Search