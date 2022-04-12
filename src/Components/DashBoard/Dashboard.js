import React from "react";
import Ellipse1 from "./../../Assets/Ellipse1.svg"
import Ellipse2 from "./../../Assets/Ellipse2.svg"



const Dashboard = () => {
    return(
        <div className="pt-20 pl-10 sm:pl-20  flex justify-between flex-1 h-full pb-2 flex-col mr-28">
            <div>
            <div className="flex justify-between h-full flex-col md:flex-row">
                <div className="flex flex-col gap-20 mb-10 sm:mb-0">
                <div className="">
                <div className="mb-6">
                <h1 className="text-4xl text-linear flex flex-col mb-2 " style={{"fontFamily": "inter-Bold"}}>
                Welcome to <span> ValidNode</span>
                </h1>
                <h3 className="text-blak text-base"  style={{"fontFamily": "inter-Regular"}}>A simple way to earn Passive income</h3>
                </div>
                <button className="btn px-8" style={{"fontFamily": "inter-Bold"}}>NODES</button>
            </div>

            <div className="flex flex-col text-blak" style={{"fontFamily": "inter-Medium"}}>
                <h3 className="mb-4">Cost to make 1 Node is 10,000 VLD</h3>
                <h3 className="mb-4">Start earning at 1% per day</h3>
                <h3 className="mb-4">Earn up to 1.35% by not claiming </h3>
            </div>
            </div>

            <div className="flex mb-10 sm:mb-0 min-w-fit">
            <div className=" max-w-18 relative flex items-start "><img src={Ellipse1} className = "w-full relative -z-10"/></div>
            <div className=" max-w-xs -ml-36 flex items-start"><img src={Ellipse2} className = "w-full mt-2"/></div>
        </div>
        {/* max-w-56 */}
 {/* max-w-67 */}
            </div>
        
       

        <div className="text-base text-sky-600"  style={{"fontFamily": "inter-Bold"}}>
        Feel free to reach us on <span className="text-indigo-900">Twitter</span> or <span className="text-indigo-900">Discord</span> for any questions
        </div>
        </div>
       


        </div>
    )
}


export default Dashboard