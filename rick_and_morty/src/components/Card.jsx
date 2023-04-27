import style from "../modulos/Card.module.css"
import React, { useEffect} from "react"
import Estadisticas from "./Estadisticas"
import { addFav, removeFav } from "../redux/actions"
import {connect} from "react-redux"


function Card(props) {
   const {name,status,species,gender,origin,image,onClose,id,classChangeFalse, online, removeFav, addFav, myFavourite} = props
   const [rot, setRot] = React.useState(false); 
   const [isFav, setIsFav] = React.useState(false);
   

   const handleFavourite = () => {

         isFav? removeFav(id) :  addFav(props);
         setIsFav(!isFav);
         }
   
   
   const rotate = () =>{
      setRot(!rot)
   }
   const Estadis = () => {return (rot ?<Estadisticas name={name} changeClose={rotate} online={online} classChangeFalse={classChangeFalse} status={status}
   species={species} gender={gender} origin={origin} id={id} /> : null)}

      console.log(myFavourite)
   useEffect(() => {
      for(let i = 0; i < myFavourite.length; i++){
         if(myFavourite[i].id === id) setIsFav(true);
      }
   },[myFavourite])
   
   return (
         <div className={style.DivCard}>
            {
               isFav ? (
                  <button onClick={handleFavourite} className={style.spanRed}>♡</button>
               ) : (
                  <button onClick={handleFavourite} className={style.span}>♡</button>
               )
            }
            <span onClick={() => {onClose(id); removeFav(id)}} className={style.boton}>x</span>
            <img src={image} alt={name} className={style.image} onClick={rotate}/>
            <div>
            <Estadis />
            </div>
            <span>{name}</span>
            
         </div>

   );
}
const mapStateToProps = (state) =>{
      return{
         myFavourite: state.myFavourites
      }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) =>{
         dispatch(removeFav(id))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)