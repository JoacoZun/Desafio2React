import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';


const App = () => {
  return (
    <div>
      <Navbar />
      <main>
      {/* <Home />*/}
      {<RegisterPage /> }
      {/*<LoginPage />*/}
      <Footer />
      </main>
    </div>
  );
};

export default App;
