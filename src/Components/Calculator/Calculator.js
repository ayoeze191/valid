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
                <div className="relative inputbox"><input type="text" placeholder="Number of years" className="px-5  border border-black rounded-md w-64 py-2 bg-red-100 cursor-pointer" value={value} onChange = {(e) => OnchangeHandler(e)}/>
                <div className="border w-full absolute max-h-24 overflow-y-scroll scroll-bar-width bg-white hidden show cursor-pointer " ref={ref}>
                   <div className="hover:bg-slate-200 cursor-pointer"  onClick={(e) => onClickHandler(e)}>1 year</div>
                   <div className="hover:bg-slate-200  cursor-pointer"  onClick={(e) => onClickHandler(e)}>2 year</div>
                   <div className="hover:bg-slate-200 cursor-pointer"  onClick={(e) => onClickHandler(e)}> 3 year</div>
                   <div className="hover:bg-slate-200"  onClick={(e) => onClickHandler(e)}>4 year</div>
                   <div className="hover:bg-slate-200"  onClick={(e) => onClickHandler(e)}>5 year</div>
                   <div className="hover:bg-slate-200"  onClick={(e) => onClickHandler(e)}>6 year</div>
                   <div className="hover:bg-slate-200"  onClick={(e) => onClickHandler(e)}>7 year</div>
                   <div className="hover:bg-slate-200"  onClick={(e) => onClickHandler(e)}>8 year</div>
                   <div className="hover:bg-slate-200"  onClick={(e) => onClickHandler(e)}>9 year</div>
                   <div className="hover:bg-slate-200"  onClick={(e) => onClickHandler(e)}>10 year</div>
                   <div className="hover:bg-slate-200"  onClick={(e) => onClickHandler(e)}>11 year</div>
                   <div className="hover:bg-slate-200"  onClick={(e) => onClickHandler(e)}>12 year</div>
                </div>
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