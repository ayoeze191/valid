
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/DashBoard/Dashboard';
import SideComp from './Components/SideComp';
import CopyRight from './Components/DashBoard/CopyRight';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './Components/Calculator/Calculator';
import Node from './Components/Node/Node';
import SideBar from './Components/SideBar';
import Overlay from './Components/Ui/Overlay';
import { useState } from 'react';
import GoogleLogin from 'react-google-login'
import Claimed from './Components/Claimed';




function App() {
  const [showSideBar, setShowSideBar] = useState(false)
  const [showOverlay, setOverlay] = useState(false)
  const [claim, setclaim] = useState(false)
  const changeModalStatus = () => {
    setShowSideBar(!showSideBar)
    setOverlay(!showOverlay)
    setclaim(false)
  }

  const HandleFailure = (result) => {
    // alert(result);
  }
  const handleLogin = (googleData) => {
    console.log(googleData)
  }

  const showClaim = () => {
    setclaim(!claim)
    setOverlay(!showOverlay)

    // setInterval(() => {
    //   setclaim(!claim)
    //   setOverlay(!Overlay)
    // }, 1000)
  }
  

  return (
    <Router>
    <div className="flex flex-col justify-between relative md:h-screen my-auto h-full ">
      {/* <ReactGoogleLogin></ReactGoogleLogin> */}
      <div className=' pl-10 md:pl-20 mx-auto w-full'>
        <div className='w-fit h-fit bg-linear'>
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
      <Header modalStatus = {changeModalStatus}/>
      <div className='flex-1 bg-red-100 w-full'>
        <Routes>
          <Route path='/' element = {<Dashboard/>} />
          <Route path='/calculator' element = {<Calculator/>} />
          <Route path='/Nodes' element = {<Node show = {showClaim}/>} />
      </Routes>
      <SideComp />
      </div>
      
      {showOverlay&&<Overlay clear = {changeModalStatus}/>}
      {claim && <Claimed />}
      <SideBar show = {showSideBar}/>
    </div>
  
    </Router>
  );
}

export default App;
