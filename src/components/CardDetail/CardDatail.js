import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import {MainCardDetails, DisplayPokemon, DisplayBaseStats, DisplayNameMove, DisplaySpritePokemon, DisplayMoves, BarStats} from "./styleDatail"
import fire from "../../assets/pokemons-type/fire.svg"
import grass from "../../assets/pokemons-type/grass.svg"
import bug from "../../assets/pokemons-type/bug.svg"
import dragon from "../../assets/pokemons-type/dragon.svg"
import dark from "../../assets/pokemons-type/dark.svg"
import eletric from "../../assets/pokemons-type/eletric.svg"
import fairy from "../../assets/pokemons-type/fairy.svg"
import fighting from "../../assets/pokemons-type/fighting.svg"
import flying from "../../assets/pokemons-type/flying.svg"
import ghost from "../../assets/pokemons-type/ghost.svg"
import ground from "../../assets/pokemons-type/ground.svg"
import ice from "../../assets/pokemons-type/ice.svg"
import normal from "../../assets/pokemons-type/normal.svg"
import poison from "../../assets/pokemons-type/poison.svg"
import psychic from "../../assets/pokemons-type/psychic.svg"
import rock from "../../assets/pokemons-type/steel.svg"
import steel from "../../assets/pokemons-type/steel.svg"
import water from "../../assets/pokemons-type/water.svg"
import pokeball from "../../assets/pokeball.gif"

function CardDetails(props) {

    const context = useContext(GlobalContext)

    const colorCard = ()=>{
        switch (props.pokemon.types[0].type.name) {
            case 'grass':
            return '#729F92' //ok             
            case 'fire': 
            return '#EAAB7D' //ok           
            case 'water':
            return '#71C3FF' //ok              
            case 'poison':
            return '#AD61AE'    
            case 'flying':
            return '#6892B0'   
            case 'bug':
            return '#76A866' //ok  
            case 'normal':
            return '#BF9762'   
            case 'dark':
            return '#5C5365'   
            case 'dragon':
            return '#0A6CBF'   
            case 'eletric':
            return '#F4D23B'    
            case 'eletric':
            return '#F4D23B'   
            case 'eletric':
            return '#F4D23B'   
            case 'eletric':
            return '#F4D23B'   
            case 'eletric':
            return '#F4D23B'              
            case 'eletric':
            return '#F4D23B'   
            case 'eletric':
            return '#F4D23B'   
            case 'eletric':
            return '#F4D23B'   
            case 'eletric':
            return '#F4D23B'                         
            default:
            return '#729F92'
        }
    }
    
    return (
      <>
    {context.isLoading ? <img src={pokeball} alt="Loading"/>
    :
    <MainCardDetails
      colorCard={colorCard}>

        {/* SE????O SPRITES POKEMON */}
        <DisplayPokemon>
            <div>
                <img src={props.pokemon.sprites?.front_default} alt={props.pokemon?.name}/>
            </div>
            <div>
                <img src={props.pokemon.sprites?.back_default} alt={props.pokemon?.name}/>
            </div>

        </DisplayPokemon>

        {/* SE????O STATUS POKEMON */}
        <DisplayBaseStats>
            <div>
            <h2>Base stats</h2>

            {/* Daniel: Barra de progresso Base Stats */}
            {props.pokemon?.stats?.map((status)=>(
                <p><span>{status.stat.name.replace("hp","HP").replace("special-attack","Sp.Atk").replace("special-defense","Sp.Def ")}</span><span>{status.base_stat}</span><BarStats stats={status.base_stat}><div></div></BarStats></p>
            ))}
            </div>
            <div>
                <p><span>Total:</span>
                <span>
                    {props.pokemon?.stats?.reduce((acc,cur)=> acc + cur.base_stat,0)}
                </span>
                <span></span>
                </p>
            </div>
        </DisplayBaseStats>

        {/* Daniel: SE????O NOME/TIPO E MOVES POKEMON */}
        <DisplayNameMove>
            <div>
                <h3>#{props.pokemon?.id < 10 ? '0' + String(props.pokemon?.id) : props.pokemon?.id}</h3>
                <h1>{props.pokemon?.name}</h1>
                <p>{props.pokemon?.types?.map((type)=> {
                            switch (type.type.name) {
                                case 'grass':
                                    return <img src={grass} alt={type.type.name}/>
                                    case 'fire': 
                                    return <img src={fire} alt={type.type.name}/>
                                    case 'water':
                                    return <img src={water} alt={type.type.name}/>
                                    case 'poison':
                                    return <img src={poison} alt={type.type.name}/>  
                                    case 'flying':
                                    return <img src={flying} alt={type.type.name}/>  
                                    case 'bug':
                                    return <img src={bug} alt={type.type.name}/>
                                    case 'normal':
                                    return <img src={normal} alt={type.type.name}/>   
                                    case 'dark':
                                    return <img src={dark} alt={type.type.name}/>   
                                    case 'dragon':
                                    return <img src={dragon} alt={type.type.name}/>   
                                    case 'eletric':
                                    return <img src={eletric} alt={type.type.name}/>  
                                    case 'fairy':
                                    return <img src={fairy} alt={type.type.name}/>  
                                    case 'fighting':
                                    return <img src={fighting} alt={type.type.name}/>   
                                    case 'ghost':
                                    return <img src={ghost} alt={type.type.name}/>   
                                    case 'ground':
                                    return <img src={ground} alt={type.type.name}/>              
                                    case 'ice':
                                    return <img src={ice} alt={type.type.name}/>   
                                    case 'psychic':
                                    return <img src={psychic} alt={type.type.name}/>   
                                    case 'rock':
                                    return <img src={rock} alt={type.type.name}/>   
                                    case 'steel':
                                    return <img src={steel} alt={type.type.name}/>                           
                                    default:
                                    return <img src={""} alt={type.type.name}/>
                            }
                         
                         }
                         )}
                         </p>
            </div>
            <div>
                    <h2>Moves:</h2>
                    {props.pokemon?.moves && props.pokemon?.moves.filter((move,i) => i < 4).map((move)=> { return (<DisplayMoves>{move.move.name}</DisplayMoves>)})}
            </div>
        </DisplayNameMove>

        {/* SE????O ARTE OFICIAL POKEMON */}
        <DisplaySpritePokemon>
            <img src={props.pokemon?.sprites?.other['official-artwork'].front_default} alt="pokemon"/>
        </DisplaySpritePokemon>

      </MainCardDetails>
      }
                
      </>
    );
  }
  
  export default CardDetails