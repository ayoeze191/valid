import React from "react";
import discard from "./../Assets/discard.svg"
import Twitter from "./../Assets/Twitter.svg"



const SideComp = () => {
    return (
        <div className="h-full md:ml-10 pt-52  absolute top-0 right-4">
    <div className=" bg-myWhite h-fit p-3 rounded-2xl box-shadow-col my-auto">
        <div className="w-10"><img src={discard} className = "w-full"/>
        <h3>Discord</h3>
        </div>
        <div className="w-10"><img src={Twitter} className = "w-full"/></div>
        <h3>Twitter</h3>
        </div>
        </div>
    )
}


export default SideComp