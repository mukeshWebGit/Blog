import './App.css';
import Login from './components/account/Login';
import Home from './components/home/home';
import { DataProvider } from './context/dataprovider';

function App() {
  return (
    <div className="App">
      <DataProvider>
       <Login/>
       <Home/>
       </DataProvider>
    </div>
  );
}

export default App;
