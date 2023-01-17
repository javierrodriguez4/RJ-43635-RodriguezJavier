import React from "react";
import "./DarkMode.css";
import { useState } from "react";
import {BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';


export const DarkMode = () => {
  
  const [ dark, setDark ] = useState( false )

    const setMode = ()=>{
        setDark( !dark )
    }

    return (

    <button onClick={setMode} className="iconDarkMode">{ dark ? <BsFillMoonFill size={30}/>: <BsFillSunFill size={30}/>}</button>
  )
}
