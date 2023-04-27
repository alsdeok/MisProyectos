import './App.css';
import Cards from './components/Cards';
import { useState } from 'react';
import Menu from './components/Menu'
import axios from "axios" 
import {  Route, Routes, useNavigate} from 'react-router-dom';
import About from "./views/About.jsx"
import Detail from "./views/Detail.jsx"
import Favourite from "./views/Favourites.jsx"
import Form from "./components/Form";
import { useEffect } from 'react';


function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   let EMAIL = "axel.s09kpo@gmail.com";
   let PASSWORD = "43009087a";

   function login(userData){
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [online, setOnline] = useState(true)
   
   function classChangeFalse(){
      setOnline(false)
   }
   function classChangeTrue(){
      setOnline(true)
      setTimeout(()=>{navigate("/home")}, "400" )
      
   }

   console.log(access)
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            const s = characters.filter((character)=>{
               return character.name === data.name
            })
            if(s.length === 0){
               setCharacters((characters) => [...characters, data]);
            }else{
               window.alert("Ese personaje ya existe en tus cartas")
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id){
      const a = characters.filter((character)=>{ 
         console.log(character)
         return character.id !== Number(id);
      })
      setCharacters(a)
   }
   
   return (
   <div className='App'>
         <Menu login={login} onSearch={onSearch} classChangeTrue={classChangeTrue}></Menu>
      <Routes>
         <Route path='/' element={<Form login={login}></Form>}>
         </Route>
         <Route path='/favorites' element={<Favourite />}>
         </Route>
         <Route path='/home' element={<Cards characters={characters} online={online} onClose={onClose} classChangeFalse={classChangeFalse} />}> 
         </Route>
         <Route path='/about' element={ <About></About>}>
         </Route>
         <Route path="/home/detail/:id" element={<Detail online={online}></Detail>}>
         </Route>
      </Routes>
   </div>
   );
}

export default App; 

