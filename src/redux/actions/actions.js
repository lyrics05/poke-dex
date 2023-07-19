import axios from"axios"
export const FAVORITE="FAVORITE";
export const GET__ALL__POKEMONS="GET__ALL__POKEMONS";
export const GET_NAME = "GET_NAME"
export const GET_ID="GET_ID";
export const CREATE__POKEMON="CREATE__POKEMON";
export const DELETE__POKEMON= "DELETE__POKEMON";
export const GET_FAVORITE="GET_FAVORITE";
export const DELETE_FAVORITE="DELETE_FAVORITE";
export const SET_PAGE="SET_PAGE";
var bla = []


export const getAllPokemon=()=>{
 
   
   /*return function(dispatch){
   
     for (let i = 1; i <=4; i++) {
    
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(response => response.json())
      .then(data => dispatch({type:GET__ALL__POKEMONS,payload:data
      }))
     }
     `https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`
       dispatch({type:GET__ALL__POKEMONS,payload:pokemons})
   }*/
   let arrayPokemonsApi = [];
    
  return async function(dispatch){
    await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=251`)
    .then(async (response) => {
        let arrayResultApi = await response.data.results;
        //me guardo toda la data en una variable arrayResultsApi
        
        let arrayPromises = [];
        //se crea un array vacio
        arrayResultApi.map((p) => arrayPromises.push(axios.get(p.url))); 
        
        //mapeo toda la data que me trae arrayResultApi y pusheo en el array vacio que es
        //array promises el llamado a la url que trae cada pokemon
        await Promise.all(arrayPromises).then((pokemons) => {
         
       
          arrayPokemonsApi = pokemons.map((p) => {
              return {
                  id: p.data.id,
                  name: p.data.name,
                  image: p.data.sprites.other.dream_world.front_default,  // url imagen
                  hp: p.data.stats[0].base_stat,
                  attack: p.data.stats[1].base_stat,
                  defense: p.data.stats[2].base_stat,
                  speed: p.data.stats[3].base_stat,
                  height: p.data.height,
                  weight: p.data.weight,
                  types: p.data.types.map((t) => {
                      return {
                          name: t.type.name
                      }
                  })
              };  // return 
          }); // map
      }) 
      .catch((error) => {
          return error;
      }); 
  })
 
  dispatch({type:GET__ALL__POKEMONS,payload:arrayPokemonsApi})
}
}



export const getByName = (payload)=> {
    return{
      type:GET_NAME,
      payload
    }
};

export const getById =(payload)=> {
    return{
      type:GET_ID,
      payload
    }
};

export const favorite = (payload)=>{
return{
  type:GET_FAVORITE,
  payload
}
}

export function deleteFavorite(payload){
  return{
    type:DELETE_FAVORITE,
    payload
  }
}

export function setPage(page) {
  return { type: SET_PAGE, payload: page };
}

