import React from "react";
import { NavLink } from "react-router-dom";
const SideBar = (props) => {
  
    return(
        <div className="bg-white fixed right-0 top-0 h-full w-2/5 pt-10 shadow-sm md:hidden z-20 "
        style={{
            "transform": props.show ? 'translateX(0)' : 'translateX(100vh)',
            "opacity": props.show ? '1' : '0',
            "transition":  "all 0.4s ease-out"
        }}
        >
            <ul className="flex justify-between items-left text-color gap-16 flex-col h-fit pl-5" style={{"fontFamily": "inter-Regular"}}>
        <NavLink to="/nodes">  <li className=" text-left ">Nodes</li></NavLink>

         <NavLink to="/calculator" ><li className=" shrink-1">calculator</li></NavLink>

         <li className="shrink-1 cursor-pointer">whitepaper</li> 
        </ul>
        </div>
    )
}


export default SideBar