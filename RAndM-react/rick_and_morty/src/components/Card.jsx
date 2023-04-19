import style from "../modulos/Card.module.css"


export default function Card(props) {
   const {name,status,species,gender,origin,image,onClose} = props
   
   return (
      <div className={style.DivCard}>
          <button onClick={onClose} className={style.boton}>X</button>
         <h2>{name}</h2>
         <hr />
         <h2>{status}</h2>
         <hr />
         <h2>{species}</h2>
         <hr />
         <h2>{gender}</h2>
         <hr />
         <h2>{origin.name}</h2>
         <img src={image} alt='' className={style.image}/>
      </div>
   );
}
