import React from "react";
// import Logo from "./../Assets/Logo.svg"
import logo from "./../Assets/logo.png";
import navBar from "./../Assets/navBar.svg";


const Header = () => {
  return (
    <div className="px-10 sm:px-20 flex justify-between py-2  box-shadow-header w-full">
      {/* <div className="flex-1"> */}
      <div className="w-14 shrink-0">
        <img src={logo} className= "full"/>
        </div>
      {/* </div> */}

      <div className=" flex justify-between items-center gap-2 md:gap-16 ">
        <ul className="md:flex justify-between items-center text-color gap-16 hidden" style={{"fontFamily": "inter-Regular"}}>
          <li className=" text-linear ">Nodes</li>

          <li className=" shrink-1">Whitepaper</li>

          <li className="flex shrink-1">VLD:<span className="ml-2">$0.0001</span></li>

          <li className="shrink-1">Calculator</li>
        </ul>
        <img src={navBar} className =  "md:hidden" />
        <button className="btn px-5 shrink-1" style={{"fontFamily": "inter-Bold"}}>Buy VLD</button>
      </div>
    </div>
  );
};

export default Header;
