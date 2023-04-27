import style from "../modulos/Form.module.css"
import { useState } from "react"
import validation from "../validation"

export default function Form ({login}){

    const [userData, setUserData] = useState(
        {
            email: "",
            password: ""
        }
    )
    const [errors, setErrors] = useState({}) 


    function handleSubmit(e){
        e.preventDefault();
        login(userData);
    }
    function handleChange(event){
        setUserData({...userData,
             [event.target.name] : event.target.value})
        
        setErrors(validation({...userData,
            [event.target.name] : event.target.value}))
    }
    return(
    <div className={style.divForm}>
        <div className={style.divImagen}>
            <img src="https://media.vandalsports.com/i/640x360/5-2022/202251816546_1.jpg" alt="R&M" className={style.img}/>

        </div>
        <form onClick={handleSubmit} className={style.Form}>
            <label>Email</label>
            <input value={userData.email} className={style.input} type="text" name="email" onChange={handleChange} placeholder="Email"  />
            {
                errors.email ? <span>{errors.email}</span> : null
            }
            <br />
            <label >Password</label>
            <input value={userData.password}className={style.input} type="text" name="password"  onChange={handleChange} />
            {
                errors.password ? <span>{errors.password}</span> : null
            }
            <button className={style.submit} type="submit" >LOGIN</button>

        </form>
    </div>
    )
}