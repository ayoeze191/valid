import React from "react";
import CopyRight from "../DashBoard/CopyRight";

const Node = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between pt-10 h-full">
      <h1 className="text-color text-3xl " style={{ fontFamily: "inter-Bold" }}>
        Your Current Nodes
      </h1>

      <table className="w-full max-w-4xl" style={{"fontFamily": "inter-Regular"}}>
        <thead className="mb-64">
          <tr className="">
            <th className="flex items-center pl-3"><h3 className="flex h-full text-center items-center w-28"> name</h3></th>
            <th className="w-32 text-left">
              <h3> Amount in Node <span>
              (VLD)
              </span>
              </h3>
              
            </th>
            <th className="h-full flex"> <h3 className="flex h-full text-center items-center p-10">Daily ROI</h3></th>
            <th className="w-32 text-left">
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
            <td className="">
              <div className=" flex items-center justify-center py-4 ">
                <button
                  className=" w-32 bg-linear rounded text-white py-1 mx-auto my-auto text-sm" 
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
                <div className=" flex items-center justify-center py-4 ">
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
                <div className=" flex items-center justify-center py-4 ">
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
                <div className="flex items-center justify-center py-4">
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
      <CopyRight />
    </div>
  );
};

export default Node;
