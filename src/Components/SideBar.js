import React from "react";

const SideBar = () => {
    return(
        <div className="bg-black opacity-50 ">
            <ul className="flex justify-between items-center text-color gap-16 flex-col" style={{"fontFamily": "inter-Regular"}}>
        <NavLink to="/nodes">  <li className=" text-linear ">Nodes</li></NavLink>

         <NavLink to="" ><li className=" shrink-1">Whitepaper</li></NavLink>

          <li className="flex shrink-1">VLD:<span className="ml-2">$0.0001</span></li>

         <NavLink to="/calculator"> <li className="shrink-1">Calculator</li> </NavLink>
        </ul>
        </div>
    )
}


export default SideBar