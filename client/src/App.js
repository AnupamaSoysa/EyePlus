import React from 'react';
import Questionaries from './components/Questionaries';
import FileUpload from './components/FileUpload';
import About from './components/About';
//import Routes from './Routes';
import './App.css';

const App = () => (
  <div className='container mt-4'>
    {/* <h4 className='display-4 text-center mb-4'>
      Eye Plus
    </h4> */}

    <FileUpload />
    {/* <Questionaries />
    <About /> */}
    
    {/* <Routes /> */}
  </div>
);

export default App;
