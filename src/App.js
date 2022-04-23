
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
import { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login'
import Claimed from './Components/Claimed';
import CreateNode from './Components/CreateNode';
import axios from 'axios';
import Store from './Components/Store';
import { LoadUser, userLoggedIn } from './Components/Store/Action';
import googleIcon from './Assets/googleIcon.svg'

function App() {
  const [showSideBar, setShowSideBar] = useState(false)
  const [showOverlay, setOverlay] = useState(false)
  const [claim, setclaim] = useState(false)
  // const [user, setUser] = useState()
  const [Createnode, setCreatenode] = useState(false)
  
  const changeModalStatus = () => {
    setShowSideBar(!showSideBar)
    setOverlay(!showOverlay)
    setclaim(false)
    setCreatenode(false)
  }

  useEffect(() => {
    Store.dispatch(LoadUser())
  })


  


  const AddNodes = (nodes) => {
    axios.post('https://valid-9f976-default-rtdb.firebaseio.com//nodes.json', nodes)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => 
    console.log(err))
  }

  const createNodeHandler = (name, amount) => {
  
    const body = {
      Node_name: name,
      Node_amount: amount,
      user: Store.getState().auth.user?Store.getState().auth.user:'anonymous'
    }
    AddNodes(body)
    console.log('finished working')
  }



  const showClaim = () => {
    setclaim(!claim)
    setOverlay(!showOverlay)
  }
  
  const showCreatenode = () => {
    setCreatenode(!Createnode)
    setOverlay(!showOverlay)
  }



  return (
    <Router>
    <div className="flex flex-col  relative md:h-screen my-auto h-full items-center justify-center">

      <Header modalStatus = {changeModalStatus}/>
      
      <div className='flex-1 w-full h-full'>
        <Routes>
          <Route path='/' element = {<Dashboard/>} />
          <Route path='/calculator' element = {<Calculator/>} />
          <Route path='/Nodes' element = {<Node show = {showClaim} showCreatenode = {showCreatenode}/>} />
      </Routes>
      <SideComp />
      </div>
      
      {showOverlay&&<Overlay clear = {changeModalStatus}/>}
      {claim && <Claimed />}
      {Createnode && <CreateNode submit = {createNodeHandler}/>}
      <SideBar show = {showSideBar}/>
    </div>
  
    </Router>
  );
}

export default App;
