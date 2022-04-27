import React, {useState, useRef} from "react";
import CalculatorHeader from "./../../Assets/CalculatorHeader.png"
import CopyRight from "../DashBoard/CopyRight";
// import useState  from "react"
const Calculator = () => {
    const bod = new Array(15)
     const [value, setValue] = useState(null)
    const ref = useRef(null)
     const onClickHandler = (e) => {
        setValue(e.target.innerText)
     }

     const OnchangeHandler = (e) => {
        const children = ref.current.children
        console.log(ref)
        for(let key in children){
            if(children[key].innerText.contain(e.target.value)){
                ref.current.innerHTML = <div>{e.target.value}</div>
            }
        }
      
     }

    return(
        <div className="pt-20  flex flex-col items-center flex-1 justify-between h-full ">
            <div className="flex flex-col justify-center items-center flex-[0.8]">
            <div className="mb-16 w-28">
                <img src={CalculatorHeader}  />
            </div>
            <div className="mb-16">
                <div><input type="number" placeholder="Amount in VLD" className="px-5  border border-black mb-5 flex rounded-md w-64 py-2"/>
                
                </div>
                <div className="relative inputbox"><input type="date" placeholder="Number of years" className="px-5  border border-black rounded-md w-64 py-2 cursor-pointer" />
                
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