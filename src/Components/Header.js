import React from "react";
// import Logo from "./../Assets/Logo.svg"
import logo from "./../Assets/logo.png";
import navBar from "./../Assets/navBar.svg";
// import { Navigate } from "react-router";
import { NavLink } from "react-router-dom";


const Header = (props) => {
  return (
    <div className="px-10 md:px-20 flex justify-between py-2  box-shadow-header w-full h-fit">
      {/* <div className="flex-1"> */}
      <div className="w-14 shrink-0">
        <img src={logo} className= "full"/>
        </div>
      {/* </div> */}
      <div className=" flex justify-between items-center gap-2 md:gap-16 ">
        <ul className="md:flex justify-between items-center text-color md:gap-16 hidden sm:gap-2" style={{"fontFamily": "inter-Regular"}}>
        <NavLink to="/nodes">  <li className=" text-linear ">Nodes</li></NavLink>

         <NavLink to="/calculator" ><li className=" shrink-1 text-linear">Calculator</li></NavLink>

          <li className="flex shrink-1 text-linear">whitespace</li>
        </ul>
         <div>VLD:<span className="ml-2 text-gray-500 " style={{"fontFamily": "inter-Bold"}}>$0.0001</span></div>
        <button className="btn px-5 shrink-1" style={{"fontFamily": "inter-Bold"}}>Buy VLD</button>
        <img src={navBar} className =  "md:hidden cursor-pointer z-10" onClick={ () => props.modalStatus()} />
        
      </div>
    </div>
  );
};

export default Header;
