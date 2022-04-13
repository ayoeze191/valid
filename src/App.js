
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


function App() {
  const [showSideBar, setShowSideBar] = useState(false)
  const [showOverlay, setOverlay] = useState(false)
  const changeModalStatus = () => {
    setShowSideBar(!showSideBar)
    setOverlay(!showOverlay)
  }
  return (
    <Router>
    <div className="flex flex-col justify-between relative md:h-screen h-full my-auto">
      <Header modalStatus = {changeModalStatus}/>
      <div className='flex-1 '>
        <Routes>
          <Route path='/' element = {<Dashboard/>} />
          <Route path='/calculator' element = {<Calculator/>} />
          <Route path='/Nodes' element = {<Node/>} />
      </Routes>
      <SideComp />
      </div>
      
      {showOverlay&&<Overlay clear = {changeModalStatus}/>}
      <SideBar show = {showSideBar}/>
    </div>
    
    </Router>
  );
}

export default App;
