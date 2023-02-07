import { GET_NAME, GET_ID, GET__ALL__POKEMONS } from "../actions/actions";

const initialState = {
    pokemons:[],
    pokesa:[],
    pokemonDetail:[],
}

const reducer = (state=initialState,action)=>{
  switch (action.type) {
    case GET__ALL__POKEMONS:
        return{
            ...state,
            pokemons:action.payload,
            pokesa:action.payload
          
        }

        case GET_NAME:
          try {
            const filtro = [...state.pokesa]
            
            const bla = filtro.filter(p=>p.name.toLowerCase()===action.payload.toLowerCase().trim())
            
            if(bla.length===0){
              throw new Error("Pokemon not found")
            }
           return {
            ...state,
            pokemons:bla
          }; 
          } catch (error) {
            alert(error)
          }
            case GET_ID:
              const pokes = state.pokesa
          const detalle =  pokes.filter(pokemon=>pokemon.id===parseInt(action.payload))
            console.log(detalle)
              return {
                ...state,
                pokemonDetail:detalle
              };
      
    default:
        return state
  }
}

export default reducer