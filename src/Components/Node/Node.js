import React, { useEffect } from "react";
import CopyRight from "../DashBoard/CopyRight";
import figmadownlod from "./../../Assets/downloadIcon.png"
import figmafork from "./../../Assets/figmafork(2).png"
import Group6 from "./../../Assets/Group6.png"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Overlay from "../Ui/Overlay";
import GoogleLogin from "react-google-login";
import { userLoggedIn } from "../Store/Action";
import googleIcon from "./../../Assets/googleIcon.svg"
import { getAllnodes } from "../Store/Action";
import { useLocation } from "react-router";

const Node = (props) => {
  const is_authenticated = useSelector((state) => state.auth.isauthenticated)
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  useEffect(() => {
      getAllnodes()
  })
  const loc = useLocation();

  const HandleFailure = (result) => {
    // alert(result);
  }
  const handleLogin = (googleData) => {  
    dispatch(userLoggedIn( googleData.accessToken, googleData.profileObj.email))  
  }


  return (
    <div className="w-full flex  md:flex flex-col items-center justify-between  md:px-auto py-0 md:h-full">
      {is_authenticated?<div className="w-full pl-10 pr-6 md:px-20 flex justify-end items-center pt-2"><div className="flex gap-1"><GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText = {user}
      onSuccess={ handleLogin }
      onFailure = {HandleFailure}
      cookiePolicy = {'single_host_origin'}
      >
      </GoogleLogin></div></div>:null}
       {is_authenticated?null:<Overlay />}
      {is_authenticated?
     
    <div className="flex flex-col items-center w-full h-full px-10">
     <div className="hidden flex-1 sm:flex items-center w-[90%] max-w-2xl">
       <table className="w-full max-w-4xl text-sm md:table min-h-[300px] box-shadow-table" style={{"fontFamily": "inter-Regular"}} >
         <thead className="text-gray-400 border-r">
           <tr className="">
             <th className="border-r pt-5"><h3 className="text-center"> Name</h3></th>
             {/* <th className=""><h3 className="text-left"> Wallet Address</h3></th> */}
             <th className="border-r pt-5">
              
               VLD
          
               
             </th>
             <th className="border-r pt-5"> <h3 className="">Daily ROI</h3></th>
             <th className="">
               <h3 className="border-r pt-5">Rewards(VLD)
 
               </h3>
             </th>
             
             <th className=""></th>
             <th></th>
           </tr>
         </thead>
 
         <tbody className="">
           <tr className="border-r">
             <td className=" border-r "><h1 className="text-center">Node 1</h1></td>
             {/* <td className="text-left ">02BA....92E</td> */}
             <td className=" border-r"><h3 className="text-center">5000</h3></td>
             <td className=" border-r text-center">1%</td>
             <td className=" border-r text-center"><h2>5000000</h2>  </td>
             <td className="pr-3">
             <div className="w-7  hover:cursor-pointer" onClick={() => props.show()}><img src={figmadownlod} className = "w-full"/></div>
             </td>
             <td>
             <div className="w-4  hover:cursor-pointer "><img src={figmafork} className = "w-full"/></div>
             </td>
             
           </tr>
 
           <tr className="border-r">
           <td className=" border-r "><h1 className="text-center">Node 1</h1></td>
             {/* <td className="text-left ">02BA....92E</td> */}
             <td className=" border-r"><h3 className="text-center">5000</h3></td>
             <td className="text-center border-r">1%</td>
             <td className="border-r text-center"><h2>5000000</h2> </td>
             <td>
             <div className="w-7 hover:cursor-pointer" onClick={() => props.show()}><img src={figmadownlod} className = "w-full"/></div>
             </td>
             <td>
             <div className="w-4  hover:cursor-pointer"><img src={figmafork} className = "w-full"/></div>
             </td>
             
           </tr>
 
           <tr className="border-r">
           <td className=" border-r "><h1 className="text-center">Node 1</h1></td>
             {/* <td className="text-left">02BA....92E</td> */}
             <td className=" border-r"><h3 className="text-center">5000</h3></td>
             <td className="border-r text-center">1%</td>
             <td className="border-r text-center"><h2>5000000</h2> </td>
             <td className="">
             <div className="w-7 hover:cursor-pointer" onClick={() => props.show()}><img src={figmadownlod} className = "w-full"/></div>
             </td>
             <td  className="w-fit pr-4">
             <div className="w-4 hover:cursor-pointer"><img src={figmafork} className = "w-full"/></div>
             </td>
           </tr>
           <tr className="border-r">
           <td className=" border-r "><h1 className="text-center">Node 1</h1></td>
             {/* <td className="text-left ">02BA....92E</td> */}
             <td className=" border-r"><h3 className="text-center">5000</h3></td>
             <td className="text-center border-r">1%</td>
             <td className="text-center border-r"><h2>5000000</h2> </td>
             <td className="">
             <div className="w-7 hover:cursor-pointer" onClick={() => props.show()}><img src={figmadownlod} className = "w-full"/></div>
             </td>
             <td  className="w-fit bot">
             <div className="w-4 hover:cursor-pointer"><img src={figmafork} className = "w-full"/></div>
             </td>
           </tr>
         </tbody>
       </table>
 
       </div>
       <div className="w-full flex flex-col justify-center mt-10 gap-2 ">
       <div className="flex sm:hidden px-2 text-center text-linear text-color md:gap-16" style={{ fontFamily: "inter-Regular" }}>
            {loc.pathname == "/nodes" ? "Nodes" : null}
    </div>
       <ul className="sm:hidden w-full mb-10 flex flex-col gap-3 border" style={{ fontFamily: "inter-Regular" }}>
         <li className="flex flex-col gap-3 px-3   font-poppins py-3 border-r"  style={{ fontFamily: "inter-Regular" }}>
           <div className="flex justify-between">
           <h1 className="">Node1 </h1>
           <h3 className="text-xs">amount :<span>5000 USD</span></h3>
           </div>
           {/* <div className="flex justify-between items-center">
             <div className="text-center text-xs">02BA....92E</div> */}
             <div className="flex gap-6 justify-end">
             <h3 className="text-xs"> Reward: 25021 vld</h3>
            <div className="w-7 hover:cursor-pointer"><img src={figmadownlod} className = "w-full hover:cursor-pointer"/></div>
            <div className="w-4 hover:cursor-pointer"><img src={figmafork} className = "w-full hover:cursor-pointer"/></div>
            </div>
           {/* </div> */}
         </li>

         
         <li className="flex flex-col gap-3 px-3    font-poppins py-3  border-r">
           <div className="flex justify-between">
           <h1 className="">Node2</h1>
           <h3 className="text-xs">amount: <span>5000 USD</span></h3>
           </div>
           {/* <div className="flex justify-between items-center">
           <div className="text-center text-xs">02BA....92E</div> */}
           <div className="flex gap-6 justify-end">
             <h3 className="text-xs"> <span className="text-[0.7rem]">Reward:</span> 25021 VLD</h3>
            <div className="w-7 hover:cursor-pointer"><img src={figmadownlod} className = "w-full"/></div>
            <div className="w-4 hover:cursor-pointer"><img src={figmafork} className = "w-full"/></div>
           {/* </div> */}
           </div>
         </li>
         <li className="flex flex-col gap-3 px-3   font-poppins py-3  border-r">
           <div className="flex justify-between">
           <h1 className="">Node1</h1>
           <h3 className="text-xs">amount: <span>5000 USD</span></h3>
           </div>
           {/* <div className="flex justify-between items-center"> */}
           {/* <div className="text-center text-xs">02BA....92E</div> */}
           <div className="flex gap-6 justify-end">
              <h3 className="text-xs"> <span className="text-[0.7rem]">Reward:</span> 25021 VLD</h3>
            <div className="w-7 hover:cursor-pointer"><img src={figmadownlod} className = "w-full"/></div>
            <div className="w-4 hover:cursor-pointer"><img src={figmafork} className = "w-full"/></div>
           </div>
           {/* </div> */}
         </li>
         
         <li className="flex flex-col gap-3 px-3   font-poppins py-3  border-r">
           <div className="flex justify-between">
           <h1 className="">Node1</h1>
           <h3 className="text-xs">amount: <span>5000 USD</span></h3>
           </div>
           {/* <div className="flex justify-between items-center"> */}
           {/* <div className="text-center text-xs">02BA....92E</div> */}
           <div className="flex gap-6 justify-end">
           <h3 className="text-xs"> <span className="text-[0.7rem]">Reward:</span> 25021 VLD</h3>
            <div className="w-7  hover:cursor-pointer"><img src={figmadownlod} className = "w-full"/></div>
            <div className="w-4 hover:cursor-pointer"><img src={figmafork} className = "w-full"/></div>
           {/* </div> */}
           </div>
         </li>
         <li className="flex flex-col gap-3 px-3   font-poppins py-3  border-r">
           <div className="flex justify-between">
           <h1 className="">Node1</h1>
           <h3 className="text-xs">amount: <span>5000 USD</span></h3>
           </div>
           {/* <div className="flex justify-between items-center">
           <div className="text-center text-xs">02BA....92E</div> */}
           <div className="flex gap-6 justify-end">
           <h3 className="text-xs"> <span className="text-[0.7rem]">Reward:</span> 25021 VLD</h3>
            <div className="w-7 hover:cursor-pointer"><img src={figmadownlod} className = "w-full"/></div>
            <div className="w-4 hover:cursor-pointer"><img src={figmafork} className = "w-full"/></div>
           {/* </div> */}
           </div>
         </li>
       </ul>
       </div>
     
  
     </div>: 
     
     <div className="w-full h-full flex justify-center items-center">
      
       <div className="mx-auto cursor-pointer relative z-50">
       <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText = 'Log in With Google'
      onSuccess={ handleLogin }
      onFailure = {HandleFailure}
      cookiePolicy = {'single_host_origin'}
      >
      </GoogleLogin>
      </div>
       </div>
       }
      <CopyRight />
    </div>
  );
};

export default Node;
