import React from "react";
import CalculatorHeader from "./../../Assets/CalculatorHeader.png"
const Calculator = () => {
    return(
        <div className="pt-20 pl-10 sm:pl-20 flex flex-col items-center flex-1 justify-between h-full ">
            <div className="mb-16 w-28">
                <img src={CalculatorHeader}  />
            </div>
            <div className="mb-16">
                <div><input type="text" placeholder="AMOUNT VLD" className="px-5  border border-black mb-5 flex rounded-md w-64"/></div>
                <div><input type="text" placeholder="year" className="px-5  border border-black rounded-md w-64"/></div>

            </div>


            <div>
                <button className="btn px-10">CALCULATE</button>
            </div>

        </div>
    )
}

export default Calculator