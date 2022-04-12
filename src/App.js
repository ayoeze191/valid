
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/DashBoard/Dashboard';
import SideComp from './Components/SideComp';
import CopyRight from './Components/DashBoard/CopyRight';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './Components/Calculator/Calculator';
import Node from './Components/Node/Node';


function App() {
  return (
    <Router>
    <div className="flex flex-col  w-full mx-auto justify-between relative md:h-screen ">
      <Header />
      <div className='flex justify-between h-full flex-1'>
        <Routes>
          <Route path='/' element = {<Dashboard/>} />
          <Route path='/calculator' element = {<Calculator/>} />
          <Route path='/Node' element = {<Node/>} />

      </Routes>
      <SideComp />
      </div>
      
      <CopyRight />
     
    </div>
    </Router>
  );
}

export default App;
