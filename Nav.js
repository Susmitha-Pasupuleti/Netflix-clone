import React, { useState, useEffect } from 'react'

function Nav() {
    const[show,handleShow]=useState(false);
    useEffect(() => {
      window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else handleShow(false);
      });
    
      return () => {
        window.removeEventListener("scroll",Nav);
      };
    }, []);
    
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className="nav_logo" src="https://tse2.mm.bing.net/th?id=OIP.AC0iUF7KyK0iqL7HZ2JzcQHaD5&pid=Api&P=0&h=220" alt="Netflix_Logo"/>
        <img className="nav_avatar" src="https://tse3.mm.bing.net/th?id=OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa&pid=Api&P=0&h=220" alt="avatarLogo"/>
        
    </div>
  )
}

export default Nav