import { useState } from "react";
import style from "../modulos/Searchbar.module.css"
import {Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function SearchBar({onSearch, classChangeTrue}) {
const [id,setId] = useState("");
const locat = useLocation()
console.log(locat)
const handleChange = (event) =>{
   setId(event.target.value)

}
const onKeyDown = (event) =>{
   if(event.keyCode === 13){onSearch(id)}
}
   
   return (
      <div className={style.DivSearchbar}>
         <Link to="/home">
            <button className={style.btn} >Home</button>
         </Link> 
         <Link to="/favorites">
            <button className={style.btn}>Favorites</button>
         </Link>
         <Link to="/about">
            <button className={style.btn}>About</button>
         </Link>
         <Link to="/">
            <button className={style.btn}>LogOut</button>
         </Link>
       

         {(locat.pathname !== "/home" && locat.pathname !== "/favorites") ? <div> <span>_________</span><button className={style.botonDark} onClick={classChangeTrue}>CLOSE</button></div>  : <div  className={style.divAl}> 
            <input placeholder="Añade personajes.." value={id} className={style.input} onChange={handleChange} onKeyDown={onKeyDown} />
            <button onClick={() => onSearch(id)} className={style.boton} >+</button>
            <button onClick={() => onSearch(Math.floor(Math.random() * 826))} className={style.boton}>AL</button>
         </div>}
      </div>
   );
}
