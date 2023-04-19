import style from "../modulos/Searchbar.module.css"


export default function SearchBar(props) {
   return (
      <div className={style.DivSearchbar}>
         <input type='search' className={style.input}/>
         <button onClick={props.onSearch} className={style.boton}>AGREGAR</button>
      </div>
   );
}
