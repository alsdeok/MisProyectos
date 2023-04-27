import { useState } from "react"
import style from "../modulos/Menu.module.css"
import Nav from "./Nav"
import { useLocation } from "react-router-dom";


export default function Menu({onSearch, classChangeTrue}){
    const [isShowwed, setIsShwwed] = useState(false)
    const ToShow = () => {return (isShowwed ? null :  <Nav classChangeTrue={classChangeTrue} onSearch={onSearch} />)};
    const show = () => {
        setIsShwwed(!isShowwed)
    }
    return (
        <div>
          {
          useLocation().pathname !== "/" ? 
            <div>
              <ToShow/>
              {
                isShowwed ? <div className= {style.general} onClick={show}>
                <div className={style.divMenu}></div>
                <div className={style.divMenu}></div>
                <div className={style.divMenu}></div>
              </div> : <div className= {style.general2} onClick={show}>
                  <div className={style.divMenu}></div>
                  <div className={style.divMenu}></div>
                  <div className={style.divMenu}></div>
                </div>
              }
            </div> : null
          }
        </div>
    )
}