import React, { useState, useRef, useEffect } from "react";
import CalculatorHeader from "./../../Assets/CalculatorHeader.png";
import CopyRight from "../DashBoard/CopyRight";
import iconNext from "./../../Assets/iconNext.svg";
import iconPrevious from "./../../Assets/iconPrevious.svg";
import { FaGreaterThan, FaLessThan} from "react-icons/fa"

const Calculator = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [value, setValue] = useState(null);
  const [months, setMonth] = useState([
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  const [presentday, setpresentday] = useState(null);
  const [presentmonth, setpresentmonth] = useState(null);
  const [presentyear, setpresentyear] = useState(null);

  const [touched, setTouched] = useState(false);
  // const b = Array(15)
  const [populateDate, setPopulatedDate] = useState(31);

  const showdatesPickerHandler = () => {
    setShowDatePicker(true);
    console.log(showDatePicker);
  };
  const runfunction = () => {
    if (months[presentmonth] == "Febuary") {
      setPopulatedDate(28);
    }
    else if (
      months[presentmonth] == "April" ||
      months[presentmonth] == "September" ||
      months[presentmonth] == "June" ||
      months[presentmonth] == "November"
    ) {
      setPopulatedDate(30);
    } else {
      setPopulatedDate(31);
    }
  };

  const setDate = (month, year, day) => {
    setpresentmonth(month);
    setpresentday(day);
    setpresentyear(year);
  };

  const increaseMonth = () => {
    if (presentmonth < 11) {
      setpresentmonth(presentmonth + 1);
    } else {
      setpresentmonth(0);
      setpresentyear(presentyear + 1);
    }
  };
  const decreaseMonth = () => {
    if (presentmonth == 1) {
      setpresentmonth(11);
      setpresentyear(presentyear - 1);
    } else {
      setpresentmonth(presentmonth - 1);
    }
  };

  const changedateHandler = (e) => {
    if (
      presentyear < year ||
      (presentmonth < month && presentyear < year) ||
      (presentyear == year && presentmonth < month)
    ) {
      return false;
    } else {
      setpresentday(e.target.innerHTML);
      setTouched(true);
    }
  };

  useEffect(() => {
    setDate(month, year, day);
  }, []);

  useEffect(() => {
    runfunction();
  });

  return (
    <div className="pt-20  flex flex-col items-center flex-1 justify-between ">
      <div className="flex flex-col justify-center items-center flex-[0.8]">
        <div className="mb-16 w-28">
          <img src={CalculatorHeader} />
        </div>
        <div className="mb-16">
          <div className="">
            <input
              type="number"
              placeholder="Amount in VLD"
              className="px-5  border border-black mb-5 flex rounded-md w-64 py-2"
            />
          </div>
          <div className="date-picker relative">
            <input
              type="text"
              placeholder="Select a date"
              className="mb-4 w-64 py-2 px-5 rounded-md border border-black"
              value={
                touched
                  ? `${presentday}/${presentmonth + 1}/${presentyear}`
                  : null
              }
            />
            <div className="dates hidden absolute w-full bg-white border rounded-lg py-2">
              <div className="month flex justify-between">
                <div className="cursor-pointer p-2 hover:bg-blue-100" onClick={() => decreaseMonth()}>
                  <FaLessThan color="grey"/>
                </div>
                <div className="mth flex gap-2 ">
                  <div>{months[presentmonth]}</div>
                  <div>{presentyear}</div>
                </div>
                <div className="cursor-pointer p-2 hover:bg-blue-100" onClick={() => increaseMonth()}>
                <FaGreaterThan color="grey"/>
                </div>
              </div>
              <div className="grid grid-cols-7 cursor-pointer">
                {[...Array(populateDate + 1)].map((a, index) =>
                  index != 0 ? (
                    <div
                      onClick={(e) => changedateHandler(e)}
                      className={
                        presentyear < year ||
                        (presentmonth < month && presentyear < year) ||
                        (presentyear == year && presentmonth < month) ||
                        (presentyear == year &&
                          presentmonth == month &&
                          index < day
                          )
                          ? "text-slate-300 hover:bg-linear text-center hover:text-white"
                          : "text-black hover:bg-linear text-center hover:text-white"
                      }
                    >
                      {/* {console.log()} */}
                      {index}
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="btn px-10">CALCULATE</button>
        </div>
      </div>
      <div className="w-full">
        <CopyRight />
      </div>
    </div>
  );
};

export default Calculator;
