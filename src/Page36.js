// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import RequestMaintenance from './pages/RequestMaintenance';
// import Tables from './components/Tables';
// import MaintenanceRequestManagement from './pages/MaintenanceRequestManagement';
// import Header1 from './components/Header1';

import React, { useContext, useState, useEffect, useRef } from 'react';
 import Page36Form from './Page36Form';
 import Imagez from './Imagez'
import { Table, Input, Button, Popconfirm, Form, Space, Alert } from 'antd';
import { Steps, Divider } from 'antd';

import { CloseOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';


function Page36(prop) {
   
  return (

    <div className="Page36 ">
 
<div className="padding">
   <div><CloseOutlined style={{fontSize:"25px", backgroundColor:"red", marginBottom:"10px", float:"right", color:"white", padding:"10px"}}/></div>
    <div className="colorW">
<Page36Form/>
<Imagez/>
    </div>
  
</div>

    </div>
  );
}

export default Page36;
