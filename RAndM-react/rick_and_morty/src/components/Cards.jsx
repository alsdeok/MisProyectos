import Card from './Card';
import style from "../modulos/Cards.module.css"

export default function Cards(props) {
   const {characters} = props
   return <div className={style.divCards}>
            {characters.map(a => {
               return <Card
                     key = {a.id}
                     id={a.id}
                     name={a.name}
                     status={a.status}
                     species={a.species}
                     gender={a.gender}
                     origin={a.origin.name}
                     image={a.image}
                     onClose={() => window.alert('Emulamos que se cierra la card')}
                /> 
               }
             )}
         
         </div>;
}
