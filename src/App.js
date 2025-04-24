import { useState } from 'react';
import './App.css';
import Login from './components/account/Login';
import Header from './components/header/header';
import Home from './components/home/home';
import { DataProvider } from './context/dataprovider';
import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom';


  const PrivateRoute = ({isAuthenticated, ...props}) => {
    return isAuthenticated ? (
      <>
       <Header/>
        <Outlet />
      </>
    ) : (
      <Navigate replace to="/" />
    );
  };

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
        <Routes>
         <Route path="/login" element={ <Login setIsAuthenticated={setIsAuthenticated} />} />  
         <Route path="/" element={ <PrivateRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/" element={ <Home/>} /> 
         </Route>
          </Routes>
       </BrowserRouter>
       </DataProvider>
    </div>
  );
}

export default App;
