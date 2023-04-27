import Card from './Card';
import style from "../modulos/Cards.module.css"


export default function Cards(props) {
   const {characters, onClose,classChangeFalse, online} = props
   return <div className={style.divCards}>
            {characters?.map(a => {
               return <Card
                     key = {a.id}
                     id={a.id}
                     name={a.name}
                     status={a.status}
                     species={a.species}
                     gender={a.gender}
                     origin={a.origin.name}
                     image={a.image}
                     onClose={onClose}
                     classChangeFalse={classChangeFalse}
                     online={online}
                /> 
               }
             )}
         
         </div>;
}
