import React from "react";


const Node = () => {
    return (
        <div  className="w-full flex flex-col items-center justify-between py-20  pl-10 sm:pl-20 ">
            <h1>Your Current Nodes</h1>


            <table className="table-spacing-1 w-full">
                <thead className="mb-64">
                <tr className="">
                    <th className="">name</th>
                    <th className="">Amount in Node<br/>(VLD)</th>
                    <th  className="">Daily ROI</th>
                    <th>Current Rewards<br/>(VLD)</th>
                    <th className=""></th>
                    <th></th>
                    </tr>
                    </thead>

                        <tbody className="box-shadow-table">
                    <tr className="">
                        <td>Node 1</td>
                        <td>5000</td>
                        <td>1%</td>
                        <td>5000000</td>
                        <td><button className=" px-8 bg-claimed rounded-md py-1 text-white" style={{"fontFamily": "inter-SemiBold"}}>Claim</button></td>
                        <td><button className=" w-32 bg-linear rounded text-white px-5 py-1" style={{"fontFamily": "inter-SemiBold"}}>Compound Rewards</button> </td>
                       
                    </tr>
                    <tr>
                    <td>Node 1</td>
                        <td>5000</td>
                        <td>1%</td>
                        <td>5000000</td>
                        <td><button className=" px-8 bg-claimed rounded-md py-1 text-white" style={{"fontFamily": "inter-SemiBold"}}>Claim</button></td>
                        <td><button className=" w-32 bg-linear rounded text-white px-5 py-1" style={{"fontFamily": "inter-SemiBold"}}>Compound Rewards</button> </td>
                     
                    </tr>

                    <tr>
                    <td>Node 1</td>
                    <td>5000</td>
                        <td>1%</td>
                        <td>5000000</td>
                        <td><button className=" px-8 bg-claimed rounded-md py-1 text-white" style={{"fontFamily": "inter-SemiBold"}}>Claim</button></td>
                        <td><button className=" w-32 bg-linear rounded text-white px-5 py-1" style={{"fontFamily": "inter-SemiBold"}}>Compound Rewards</button> </td>
                    </tr>

                    <tr>     
                    <td>Node 1</td>
                    <td>5000</td>
                    <td>1%</td>
                        <td>5000000</td>
                        <td><button className=" px-8 bg-claimed rounded-md py-1 text-white" style={{"fontFamily": "inter-SemiBold"}}>Claim</button></td>
                        <td><button className=" w-32 bg-linear rounded text-white px-5 py-1" style={{"fontFamily": "inter-SemiBold"}}>Compound Rewards</button> </td>
                    </tr>
                    </tbody>


                
            </table>
        </div>
    )
}


export default Node