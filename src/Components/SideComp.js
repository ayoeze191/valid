import React from "react";
import discard from "./../Assets/discard.svg"
import Twitter from "./../Assets/Twitter.svg"
import { useLocation } from "react-router";


const SideComp = () => {
    const loc = useLocation()
    

    return (
        <div className={loc.pathname == '/nodes'?"h-full md:ml-10 fixed top-0 right-4 hidden md:flex items-center lg:absolute":'h-full md:ml-10 fixed top-0 right-4 flex items-center lg:absolute'}>
    <div className=" bg-myWhite h-fit p-3 rounded-2xl box-shadow-col my-auto flex flex-col gap-2">
        <div className="w-10 border-b-2"><img src={discard} className = "w-full"/>
        <h3 className="text-xs mb-2">Discord</h3>
        </div>
        <div className="w-10 "><img src={Twitter} className = "w-full"/>
        <h3 className="text-xs">Twitter</h3>
        </div>
        
        </div>
        </div>
    )
}


export default SideComp