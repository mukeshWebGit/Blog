import './App.css';
import Login from './components/account/Login';
import Home from './components/home/home';
import { DataProvider } from './context/dataprovider';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
        <Routes>
         <Route path="/" element={ <Login/>} />  
         <Route path="/home" element={ <Home/>} /> 
          </Routes>
       </BrowserRouter>
       </DataProvider>
    </div>
  );
}

export default App;
