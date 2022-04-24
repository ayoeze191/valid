import React from "react";
// import Logo from "./../Assets/Logo.svg"
import logo from "./../Assets/logo.png";
import navBar from "./../Assets/navBar.svg";
// import { Navigate } from "react-router";
import { NavLink } from "react-router-dom";
// import { useLocation } from "react-router";

const Header = (props) => {
  // const loc = useLocation();
  // console.log(loc.pathname);
//   <div className="flex md:hidden h-full text-center items-center font-poppins-bold">
//   {loc.pathname == "/nodes" ? "Nodes" : null}
// </div>
  return (
    <div className="pl-10 pr-2 md:px-20 flex justify-between py-2  box-shadow-header w-full h-fit header mt-10 md:mt-0">
      {/* <div className="flex-1"> */}
      <div className="w-14 shrink-0">
        <NavLink to="/">
          {" "}
          <img src={logo} className="full" />{" "}
        </NavLink>
      </div>
     
      {/* </div> */}
      <div className=" flex justify-between items-center gap-5 md:gap-16 ">
        <ul
          className="md:flex justify-between items-center text-color md:gap-16 hidden sm:gap-2"
          style={{ fontFamily: "inter-Regular" }}
        >
          <NavLink to="/nodes" className="h-fit">
            {" "}
            <li className=" ">Nodes</li>
          </NavLink>

          <NavLink to="/calculator">
            <li className=" shrink-1 ">Calculator</li>
          </NavLink>

          <li className="flex shrink-1 cursor-pointer"><a href="https://validnode.gitbook.io/validnode-whitepaper/">whitespace</a></li>
        </ul>
        <div style={{ fontFamily: "inter-Bold" }}>
          <span
            className="ml-2 text-gray-500 "
            style={{ fontFamily: "inter-Regular" }}
          >
            $0.0001
          </span>
        </div>
        <button
          className="btn px-5 shrink-1 text-xs md:text-base"
          style={{ fontFamily: "inter-Bold" }}
          onClick={() => props.submit()}
        >
          Buy VLD
        </button>
        <img
          src={navBar}
          className="md:hidden cursor-pointer z-10"
          onClick={() => props.modalStatus()}
        />
      </div>
    </div>
  );
};

export default Header;
