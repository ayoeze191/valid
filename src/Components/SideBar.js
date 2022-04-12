import React from "react";
import { NavLink } from "react-router-dom";
const SideBar = (props) => {
  
    return(
        <div className="bg-white fixed right-0 top-0 h-full w-2/5 pt-10 shadow-sm md:hidden"
        style={{
            "transform": props.show ? 'translateX(0)' : 'translateX(100vh)',
            "opacity": props.show ? '1' : '0',
            "transition":  "all 0.4s ease-out"
            
        }}
        >
            <ul className="flex justify-between items-center text-color gap-16 flex-col h-fit" style={{"fontFamily": "inter-Regular"}}>
        <NavLink to="/nodes">  <li className=" text-linear ">Nodes</li></NavLink>

         <NavLink to="" ><li className=" shrink-1">Whitepaper</li></NavLink>

          <li className="flex shrink-1">VLD:<span className="ml-2">$0.0001</span></li>

         <NavLink to="/calculator"> <li className="shrink-1">Calculator</li> </NavLink>
        </ul>
        </div>
    )
}


export default SideBar