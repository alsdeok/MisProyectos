import axios from "axios"
import {useParams} from "react-router-dom"
import { useState,useEffect } from "react"
import style from "../modulos/Detail.module.css"

export default function Detail({online}){
console.log("online es",online)
const [character,setCharacter] = useState({});
const {id} = useParams();


window.scrollTo(0, 0)
useEffect(() => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } 
   });
   return setCharacter({});
}, [id]);
   let a = style.divPadreOut;
   if(!online){a = style.divPadre}
   


    return(
        <div className={a}>
           
               <div className={style.divHijo}>
                  <div>
                    <h1 >{character?.name}</h1>
                    <hr />
                    <h2>STATUS | {character?.status}</h2>
                    <hr />
                    <h2>SPECIE | {character?.species}</h2>
                    <hr />
                    <h2>GENDER | {character?.gender}</h2>
                    <hr />
                    <h2>ORIGIN | {character?.origin?.name}</h2>
                    <hr />
                  </div>
               </div>
               <div className={style.divImagen}>
                    <img src={character?.image} alt="" className={style.imagen}/>
               </div>   
        </div>
    )
}