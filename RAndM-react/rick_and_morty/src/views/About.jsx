import axios from "axios"
import {useParams} from "react-router-dom"
import { useState,useEffect } from "react"
import style from "../modulos/Detail.module.css"

export default function About(){


window.scrollTo(0, 0)
    return(
        <div className={style.divPadre}>
           
               <div className={style.divHijo}>
                  <div>
                    <h1 >AXEL SUAREZ</h1>
                    <hr />
                    <h2>STATUS | Alive</h2>
                    <hr />
                    <h2>SPECIE | Human</h2>
                    <hr />
                    <h2>GENDER | Male</h2>
                    <hr />
                    <h2>ORIGIN | Rosario, Santa Fe</h2>
                    <hr />
                  </div>
               </div>
               <div className={style.divImagen}>
                    <img src="https://avatars.githubusercontent.com/u/121727822?v=4" alt="" className={style.imagen}/>
               </div>   
               
        </div>
    )
}