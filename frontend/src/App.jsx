import React from 'react';
import Routes from './Routes.jsx';
// import Menu from './components/Menu/mainMenu';
import Footer from './components/Footer';
import './assets/styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      {/* <Menu />  */}
      <Routes />
      <Footer />    
    </>
  );
}

export default App;