import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Upload from './pages/Upload';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/upload' element={<Upload/>} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
