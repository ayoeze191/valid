import React from "react";
import { NavLink } from "react-router-dom";
import Ellipse1 from "./../../Assets/Ellipse1.svg"
import Ellipse2 from "./../../Assets/Ellipse2.svg"
import CopyRight from "./CopyRight";


const Dashboard = () => {
    return(
        <div className="w-full flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col justify-between md:flex-row">
                <div className="order-2">
                <div className="mb-20 pl-10 md:pl-20 pt-10">
                <h1 className="text-4xl text-linear flex flex-col mb-2 " style={{"fontFamily": "Poppins-Bold"}}>
                Welcome to <span> ValidNode</span>
                </h1>
                <h3 className="text-blak text-base mb-6"  style={{"fontFamily": "inter-Regular"}}>A simple way to earn Passive income</h3>
                
                <NavLink to="/nodes"><button className="btn px-8" style={{"fontFamily": "inter-Bold"}}>NODES</button></NavLink>
                </div>
                <div className="flex flex-col text-blak pl-10 md:pl-20 pt-10" style={{"fontFamily": "inter-Medium"}}>
                <h3 className="mb-4">Cost to make 1 Node is 10,000 VLD</h3>
                <h3 className="mb-4">Start earning at 1% per day</h3>
                <h3 className="mb-4">Earn up to 1.35% by not claiming </h3>
            </div>
            </div>
            <div className="flex mb-10 sm:mb-0 min-w-fit pl:10 md:pl-0 pt-10 md:mr-32 order-1 md:order-2 px-5 md:px-0">
            <div className=" max-w-18 relative flex items-start "><img src={Ellipse1} className = "w-full relative -z-10"/></div>
            <div className=" max-w-xs -ml-44 flex items-start"><img src={Ellipse2} className = "w-full mt-2"/></div>
        </div>
        </div>
    
        
       

        <div className="text-base text-sky-600 pl-10 md:pl-20 pt-10 mb-4"  style={{"fontFamily": "inter-Bold"}}>
        Feel free to reach us on <span className="text-indigo-900">Twitter</span> or <span className="text-indigo-900">Discord</span> for any questions
        </div>

        <CopyRight />
       


        </div>
    )
}


export default Dashboard