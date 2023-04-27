import { useSelector, useDispatch } from "react-redux"
import style from "../modulos/Favourite.module.css"
import { useEffect } from "react";
import {removeFav } from "../redux/actions"



export default  function Favourites() {
    const myFavourite = useSelector(state=> state.myFavourites);
    const dispatch = useDispatch();
    const handleFavourite = (id) => {

        dispatch(removeFav(id))
    }

    return(
        <div className={style.divPadre}>
            {
                myFavourite.map(fav => {
                 return  <div className={style.DivCard}>
                     <span onClick={() => handleFavourite(fav.id)} className={style.spanRed}>x</span>
                     <img src={fav.image} alt={fav.name} className={style.image}/>
                     <span>{fav.name}</span>
                     
                
            </div>})
        }

      </div >

    )
}