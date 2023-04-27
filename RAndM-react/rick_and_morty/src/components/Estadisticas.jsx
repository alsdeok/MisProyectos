import { useEffect } from "react"
import style from "../modulos/Estadisticas.module.css"
import {Link} from "react-router-dom"

export default function Estadisticas(props){
    const {name,status,species,gender,origin,changeClose,id, classChangeFalse, online} = props
    function onKeyDown(event){
        if(event.keyCode === 27) {console.log("se presiono ESC"); changeClose()}
    }
    useEffect(()=>{
        window.addEventListener("keydown",onKeyDown);
        return window.addEventListener("keydown",onKeyDown);
    },[])
    return(
        <div className={style.divEstadisticas}>
            <div className={style.divInterno}> 
                <div className={style.divBotones}>
                <Link to={`detail/${id}`}>  
                    <button className={style.Detail} onClick={classChangeFalse}>Detail</button>
                </Link>
               <button onClick={changeClose} className={style.Cruz}>X</button>
                </div>  
                    <div className={style.palabras}>Name:</div>
                    <div>{name}</div>
                    <hr className={style.hr}/>
                    <div className={style.palabras}>Status:</div>
                    <div>{status}</div>
                    <hr className={style.hr}/>
                    <div className={style.palabras}>Species:</div>
                    <div >{species}</div>
                    <hr className={style.hr}/>
                    <div className={style.palabras}>Gender:</div>
                    <div>{gender}</div>
                    <div className={style.palabras}>{origin.name}</div>
            </div>
        </div> 
    )
}