import React from "react";
// import Logo from "./../Assets/Logo.svg"
import logo from "./../Assets/logo.png";
import navBar from "./../Assets/navBar.svg";
// import { Navigate } from "react-router";
import { NavLink } from "react-router-dom";


const Header = (props) => {
  return (
    <div className="px-10 sm:px-20 flex justify-between py-2  box-shadow-header w-full h-fit">
      {/* <div className="flex-1"> */}
      <div className="w-14 shrink-0">
        <img src={logo} className= "full"/>
        </div>
      {/* </div> */}
      <div className=" flex justify-between items-center gap-2 md:gap-16 ">
        <ul className="md:flex justify-between items-center text-color gap-16 hidden" style={{"fontFamily": "inter-Regular"}}>
        <NavLink to="/nodes">  <li className=" text-linear ">Nodes</li></NavLink>

         <NavLink to="" ><li className=" shrink-1">Whitepaper</li></NavLink>

          <li className="flex shrink-1">VLD:<span className="ml-2">$0.0001</span></li>

         <NavLink to="/calculator"> <li className="shrink-1">Calculator</li> </NavLink>
        </ul>
        <img src={navBar} className =  "md:hidden" onClick={ () => props.modalStatus()} />
        <button className="btn px-5 shrink-1" style={{"fontFamily": "inter-Bold"}}>Buy VLD</button>
      </div>
    </div>
  );
};

export default Header;
