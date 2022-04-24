import React from "react";
import CalculatorHeader from "./../../Assets/CalculatorHeader.png"
import CopyRight from "../DashBoard/CopyRight";
const Calculator = () => {
    const bod = new Array(15)

    const body = bod.map((j, index) => <div>saas</div>)
        
    
    

    return(
        <div className="pt-20  flex flex-col items-center flex-1 justify-between h-full ">
            <div className="flex flex-col justify-center items-center flex-[0.8]">
            <div className="mb-16 w-28">
                <img src={CalculatorHeader}  />
            </div>
            <div className="mb-16">
                <div><input type="number" placeholder="Amount in VLD" className="px-5  border border-black mb-5 flex rounded-md w-64 py-2"/></div>
                {/* <div><input type="text" placeholder="Number of years" className="px-5  border border-black rounded-md w-64 py-2"/></div> */}
                <div className="w-full bg-red-300">
                    <select name="years" className="w-full">
                    <option value="1">1 Year</option>
                    <option value="2">2 Years</option>
                    <option value="3">3 Years</option>
                    <option value="4">4 Years</option>
                    <option value="5">5 Years</option>
                    <option value="6">6 Years</option>
                    <option value="7">7 Years</option>
                    <option value="8">8 Years</option>
                    <option value="9">9 Years</option>
                    <option value="10">10 Years</option>
                    <option value="11">11 Years</option>
                    <option value="12">12 Years</option>
                    <option value="13">13 Years</option>
                    <option value="14">14 Years</option>
                    <option value="15">15 Years</option>

                    </select>
                </div>
            </div>


            <div>
                <button className="btn px-10">CALCULATE</button>
            </div>
            </div>

            <CopyRight />

        </div>
    )
}

export default Calculator