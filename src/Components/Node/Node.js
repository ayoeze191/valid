import React from "react";
import CopyRight from "../DashBoard/CopyRight";
import downloadIcon from "./../../Assets/downloadIcon.png"
import forkIcon from "./../../Assets/forkIcon.png"

const Node = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between pt-10 h-full px-10 md:px-auto">
      <h1 className="text-color text-3xl " style={{ fontFamily: "inter-Bold" }}>
        Your Current Nodes
      </h1>

      <table className="w-full max-w-4xl text-sm hidden md:table" style={{"fontFamily": "inter-Regular"}}>
        <thead className="">
          <tr className="">
            <th className="flex items-center pl-3"><h3 className="flex h-full text-center items-center w-20"> name</h3></th>
            <th className="text-left">
              <h3> Amount in Node <span>
              (VLD)
              </span>
              </h3>
              
            </th>
            <th className="h-full flex"> <h3 className="flex h-full text-center items-center ">Daily ROI</h3></th>
            <th className=" text-left">
              <h3>Current Rewards <span>(VLD)</span>

              </h3>
            </th>
            <th className=""></th>
            <th></th>
          </tr>
        </thead>

        <tbody className="box-shadow-table">
          <tr className="">
            <td className="text-left pl-3">Node 1</td>
            <td className="text-left ">5000 <span className="md:hidden">USD</span></td>
            <td className="text-center">1%</td>
            <td className="text-left">5000000</td>
            <td>
              <div className="flex items-center justify-center">
              <button
                className=" px-8 bg-claimed rounded-md py-1 text-white text-xs hidden md:block"
                style={{ fontFamily: "inter-SemiBold" }}
              >
                Claim
              </button>
              </div>
            </td>
            <td className="">
              <div className=" flex items-center justify-center py-1 ">
                <button
                  className=" w-32 bg-linear rounded text-white py-1 mx-auto my-auto text-s hidden md:block" 
                  style={{ fontFamily: "inter-SemiBold" }}
                >
                  Compound Rewards
                </button>
              </div>{" "}
            </td>
          </tr>
          <tr>
            <td className="text-left pl-3">Node 1</td>
            <td className="text-left">5000</td>
            <td className="text-center">1%</td>
            <td className="text-left">5000000</td>
            <td>
              <div className="flex items-center justify-center">
              <button
                className=" px-8 bg-claimed rounded-md py-1 text-white text-xs"
                style={{ fontFamily: "inter-SemiBold" }}
              >
                Claim
              </button>
              </div>
            </td>
            <td>
                <div className=" flex items-center justify-center py-1 ">
              <button
                className=" w-32 bg-linear rounded text-white px-5 py-1 text-sm" 
                style={{ fontFamily: "inter-SemiBold" }}
              >
                Compound Rewards
              </button>{" "}
              </div>
            </td>
            
          </tr>

          <tr>
            <td className="text-left pl-3">Node 1</td>
            <td className="text-left">5000</td>
            <td className="text-center">1%</td>
            <td className="text-left">5000000</td>
            <td>
              <div  className="flex items-center justify-center">
              <button
                className=" px-8 bg-claimed rounded-md py-1 text-white text-xs"
                style={{ fontFamily: "inter-SemiBold" }}
              >
                Claim
              </button>
              </div>
            </td>
            <td  className="w-fit">
                <div className=" flex items-center justify-center py-1 ">
              <button
                className="w-32 bg-linear rounded text-white px-5 py-1 text-sm"
                style={{ fontFamily: "inter-SemiBold" }}
              >
                Compound Rewards
              </button>{" "}
              </div>
            </td>
          </tr>

          <tr>
            <td className="text-left pl-3">Node 1</td>
            <td className="text-left">5000</td>
            <td className="text-center">1%</td>
            <td className="text-left">5000000</td>
            <td className="h-full">
              <div className="flex items-center justify-center">
              <button
                className=" px-8 bg-claimed rounded-md py-1 text-white text-xs mx-auto"
                style={{ fontFamily: "inter-SemiBold" }}
              >
                Claim
              </button>
              </div>
            </td>
            <td>
                <div className="flex items-center justify-center py-1">
              <button
                className=" w-32 bg-linear rounded text-white py-1 text-sm"
                style={{ fontFamily: "inter-SemiBold" }}
              >
                Compound Rewards
              </button>{" "}
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <ul className="md:hidden w-full  border mb-10">
        <li className="flex flex-col gap-3 px-3 border-b font-poppins py-3">
          <div className="flex justify-between">
          <h1 className="text-2xl">Node1</h1>
          <h3 className="text-sm">amount :<span>5000 USD</span></h3>
          </div>
          <div className="flex gap-6 justify-end">
            <h3> Reward: 25021vld</h3>
           <div className="w-4"><img src={downloadIcon} className = "w-full"/></div>
           <div className="w-4"><img src={forkIcon} className = "w-full"/></div>
          </div>
        </li>
        <li className="flex flex-col gap-3 px-3 border-b  font-poppins py-3">
          <div className="flex justify-between">
          <h1 className="text-2xl">Node2</h1>
          <h3 className="text-sm">amount: <span>5000 USD</span></h3>
          </div>
          <div className="flex gap-6 justify-end">
            <h3> Reward: 25021vld</h3>
           <div className="w-4"><img src={downloadIcon} className = "w-full"/></div>
           <div className="w-4"><img src={forkIcon} className = "w-full"/></div>
          </div>
        </li>
        <li className="flex flex-col gap-3 px-3 border-b font-poppins py-3">
          <div className="flex justify-between">
          <h1 className="text-2xl">Node1</h1>
          <h3 className="text-sm">amount: <span>5000 USD</span></h3>
          </div>
          <div className="flex gap-6 justify-end">
            <h3> Reward: 25021vld</h3>
           <div className="w-4"><img src={downloadIcon} className = "w-full"/></div>
           <div className="w-4"><img src={forkIcon} className = "w-full"/></div>
          </div>
        </li>
        <li className="flex flex-col gap-3 px-3 border-b font-poppins py-3">
          <div className="flex justify-between">
          <h1 className="text-2xl">Node1</h1>
          <h3 className="text-sm">amount: <span>5000 USD</span></h3>
          </div>
          <div className="flex gap-6 justify-end">
            <h3> Reward: 25021vld</h3>
           <div className="w-4"><img src={downloadIcon} className = "w-full"/></div>
           <div className="w-4"><img src={forkIcon} className = "w-full"/></div>
          </div>
        </li>
        <li className="flex flex-col gap-3 px-3 border-b font-poppins py-3">
          <div className="flex justify-between">
          <h1 className="text-2xl">Node1</h1>
          <h3 className="text-sm">amount: <span>5000 USD</span></h3>
          </div>
          <div className="flex gap-6 justify-end">
            <h3> Reward: 25021vld</h3>
           <div className="w-4"><img src={downloadIcon} className = "w-full"/></div>
           <div className="w-4"><img src={forkIcon} className = "w-full"/></div>
          </div>
        </li>
      </ul>
      <CopyRight />
    </div>
  );
};

export default Node;
