import React from "react";
import CopyRight from "../DashBoard/CopyRight";
import downloadIcon from "./../../Assets/downloadIcon.png"
import forkIcon from "./../../Assets/forkIcon.png"

const Node = () => {
  return (
    <div className="w-full flex  md:flex flex-col items-center justify-between h-full  md:px-auto py-0">
     
    <div className="  hidden flex-1 md:flex items-center w-1/2 max-w-2xl">
      <table className="w-full max-w-4xl text-sm md:table min-h-[300px]" style={{"fontFamily": "inter-Regular"}} >
        <thead className="text-gray-400">
          <tr className="">
            <th className="flex items-center pl-10 pr-5"><h3 className="flex h-full text-center items-center w-20 pb-2"> Name</h3></th>
            <th className="text-left pr-5">
              <h3 className="pb-2">
              <span>
              VLD
              </span>
              </h3>
              
            </th>
            <th className="h-full flex pr-5"> <h3 className="flex h-full text-center items-center pb-2">Daily ROI</h3></th>
            <th className=" text-left pr-5">
              <h3 className="pb-2">Rewards <span>(VLD)</span>

              </h3>
            </th>
            <th className=""></th>
            <th></th>
          </tr>
        </thead>

        <tbody className="box-shadow-table">
          <tr>
            <td className="text-left pl-10">Node 1</td>
            <td className="text-left">5000</td>
            <td className="text-center">1%</td>
            <td className="text-left">5000000</td>
            <td>
            <div className="w-7  hover:cursor-pointer"><img src={downloadIcon} className = "w-full"/></div>
            </td>
            <td>
            <div className="w-4  hover:cursor-pointer"><img src={forkIcon} className = "w-full"/></div>
            </td>
            
          </tr>

          <tr>
            <td className="text-left pl-10">Node 1</td>
            <td className="text-left">5000</td>
            <td className="text-center">1%</td>
            <td className="text-left">5000000</td>
            <td>
            <div className="w-7  hover:cursor-pointer"><img src={downloadIcon} className = "w-full"/></div>
            </td>
            <td>
            <div className="w-4  hover:cursor-pointer"><img src={forkIcon} className = "w-full"/></div>
            </td>
            
          </tr>

          <tr>
            <td className="text-left pl-10">Node 1</td>
            <td className="text-left">5000</td>
            <td className="text-center">1%</td>
            <td className="text-left">5000000</td>
            <td className="">
            <div className="w-7 hover:cursor-pointer"><img src={downloadIcon} className = "w-full"/></div>
            </td>
            <td  className="w-fit ">
            <div className="w-4 hover:cursor-pointer"><img src={forkIcon} className = "w-full"/></div>
            </td>
          </tr>
          <tr>
            <td className="text-left pl-10">Node 1</td>
            <td className="text-left">5000</td>
            <td className="text-center">1%</td>
            <td className="text-left">5000000</td>
            <td className="">
            <div className="w-7 hover:cursor-pointer"><img src={downloadIcon} className = "w-full"/></div>
            </td>
            <td  className="w-fit ">
            <div className="w-4 hover:cursor-pointer"><img src={forkIcon} className = "w-full"/></div>
            </td>
          </tr>
        </tbody>
      </table>

      </div>
      <ul className="md:hidden w-full  border mb-10 flex flex-col gap-8 border-hidden px-10 mt-10">
        <li className="flex flex-col gap-3 px-3   font-poppins py-3 border-b">
          <div className="flex justify-between">
          <h1 className="">Node1 </h1>
          <h3 className="text-xs">amount :<span>5000 USD</span></h3>
          </div>
          <div className="flex gap-6 justify-end">
            <h3 className="text-xs"> Reward: 25021 vld</h3>
           <div className="w-7 hover:cursor-pointer"><img src={downloadIcon} className = "w-full hover:cursor-pointer"/></div>
           <div className="w-4 hover:cursor-pointer"><img src={forkIcon} className = "w-full hover:cursor-pointer"/></div>
          </div>
        </li>
        <li className="flex flex-col gap-3 px-3    font-poppins py-3  border-b">
          <div className="flex justify-between">
          <h1 className="">Node2</h1>
          <h3 className="text-xs">amount: <span>5000 USD</span></h3>
          </div>
          <div className="flex gap-6 justify-end">
            <h3 className="text-xs"> Reward: 25021 vld</h3>
           <div className="w-7 hover:cursor-pointer"><img src={downloadIcon} className = "w-full"/></div>
           <div className="w-4 hover:cursor-pointer"><img src={forkIcon} className = "w-full"/></div>
          </div>
        </li>
        <li className="flex flex-col gap-3 px-3   font-poppins py-3  border-b">
          <div className="flex justify-between">
          <h1 className="">Node1</h1>
          <h3 className="text-xs">amount: <span>5000 USD</span></h3>
          </div>
          <div className="flex gap-6 justify-end">
            <h3 className="text-xs"> Reward: 25021 vld</h3>
           <div className="w-7 hover:cursor-pointer"><img src={downloadIcon} className = "w-full"/></div>
           <div className="w-4 hover:cursor-pointer"><img src={forkIcon} className = "w-full"/></div>
          </div>
        </li>
        <li className="flex flex-col gap-3 px-3   font-poppins py-3  border-b">
          <div className="flex justify-between">
          <h1 className="">Node1</h1>
          <h3 className="text-xs">amount: <span>5000 USD</span></h3>
          </div>
          <div className="flex gap-6 justify-end">
            <h3 className="text-xs"> Reward: 25021 vld</h3>
           <div className="w-7  hover:cursor-pointer"><img src={downloadIcon} className = "w-full"/></div>
           <div className="w-4 hover:cursor-pointer"><img src={forkIcon} className = "w-full"/></div>
          </div>
        </li>
        <li className="flex flex-col gap-3 px-3   font-poppins py-3  border-b">
          <div className="flex justify-between">
          <h1 className="">Node1</h1>
          <h3 className="text-xs">amount: <span>5000 USD</span></h3>
          </div>
          <div className="flex gap-6 justify-end">
            <h3 className="text-xs"> Reward: 25021vld</h3>
           <div className="w-7 hover:cursor-pointer"><img src={downloadIcon} className = "w-full"/></div>
           <div className="w-4 hover:cursor-pointer"><img src={forkIcon} className = "w-full"/></div>
          </div>
        </li>
      </ul>
      <CopyRight />
    </div>
  );
};

export default Node;
