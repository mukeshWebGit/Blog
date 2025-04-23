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
         <Route path='/login' element={ <Login/>} />  
         <Route path='/' element={ <Home/>} /> 
          </Routes>
       </BrowserRouter>
       </DataProvider>
    </div>
  );
}

export default App;
