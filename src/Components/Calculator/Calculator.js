import React, {useState, useRef, useEffect} from "react";
import CalculatorHeader from "./../../Assets/CalculatorHeader.png"
import CopyRight from "../DashBoard/CopyRight";
import iconNext from "./../../Assets/iconNext.svg"
import iconPrevious from "./../../Assets/iconPrevious.svg"

// import useState  from "react"
const Calculator = () => {
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [value, setValue] = useState(null)
    const [months, setMonth] = useState(['january','febuary','march', 'april','may','june','july','august','september','october','november','december'
    ])
    const [presentday, setpresentday] = useState(null)
    const [presentmonth, setpresentmonth] = useState(null)
    const [presentyear, setpresentyear] = useState(null)
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    const [touched, setTouched] = useState(false)
    // const b = Array(15)
    const [populateDate, setPopulatedDate] = useState(31)
    
    const showdatesPickerHandler = () => {
        setShowDatePicker(true)
        console.log(showDatePicker)
    }
    const runfunction = () =>{
        if((months[presentmonth]) == 'febuary'){
            setPopulatedDate(28)
        }
        if((months[presentmonth] == 'april' || months[presentmonth] == 'september' || months[presentmonth] == 'june' || months[presentmonth] == 'november')){
            setPopulatedDate(30)
        }
        else{
            setPopulatedDate(31)
        }
    }   
    


    const setDate = (month, year, day) => {
        setpresentmonth(month)
        setpresentday(day)
        setpresentyear(year)
    }
    



    const increaseMonth = () => {
        if (presentmonth < 11){
        setpresentmonth(presentmonth + 1)
        
        }
        else{
            setpresentmonth(0)
            setpresentyear(presentyear + 1)
        }
       
    }
    const decreaseMonth = () => {
        if(presentmonth == 1 ){
            setpresentmonth(11)
            setpresentyear(presentyear - 1)
        }
        else{
            setpresentmonth(presentmonth - 1)
        }
    }

    const changedateHandler = (e) => {
        if(e.target.innerHTML >= day && presentmonth >= month){
            setpresentday(e.target.innerHTML)
            setTouched(true)
        }
        else{
            alert("you cant select a day before Today")
        }
    }

    useEffect(() => {
        setDate(month, year, day)
    }, [])

    useEffect(() => {
        runfunction()
    })


    return(
        <div className="pt-20  flex flex-col items-center flex-1 justify-between h-full ">
            <div className="flex flex-col justify-center items-center flex-[0.8]">
            <div className="mb-16 w-28">
                <img src={CalculatorHeader}  />
            </div>
            <div className="mb-16">
                <div className=""><input type="number" placeholder="Amount in VLD" className="px-5  border border-black mb-5 flex rounded-md w-64 py-2"/>
                </div>
                <div className="date-picker relative">
                    <input type='text' placeholder="Select a date" className="mb-4 w-64 py-2 px-5 rounded-md border border-black" value={touched?`${presentmonth}/${presentyear}/${presentday}`:null}/>
                    <div className="dates hidden absolute w-full bg-white">
                        <div className="month flex justify-between">
                            <div className="cursor-pointer" onClick={() => decreaseMonth()}><img src={iconPrevious} /></div>
                            <div className="mth flex gap-2">
                                <div>{months[presentmonth]}</div>
                               <div>{presentyear}</div>
                            </div>
                            <div className="cursor-pointer" onClick={() => increaseMonth()}><img src={iconNext} /></div>
                        </div>
                        <div className="grid grid-cols-7 cursor-pointer">
                      {[...Array(populateDate + 1)].map((a, index) => index != 0?<div onClick={(e) => changedateHandler(e)} className = "hover:bg-linear text-center hover:text-white">{index}</div>:null)}
                        </div>
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