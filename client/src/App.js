import './App.css';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  return (
    <>
    <ToastContainer/>
     <PortfolioContainer/>
    </>
  );
}

export default App;
