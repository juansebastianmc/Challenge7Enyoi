import './App.css';
import Login from './components/login/login.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './components/Users/users.js';
import Portafolio from './components/portafolio/portafolio.js'
import  Protect  from './components/ProtectedRoute/protect.js';
import { useState } from 'react';
import Administracion from './components/administracion/administracion';
import Informacion from './components/Informacion/informacion';
import PaginaPrincipal from './components/home/home.jsx';
import Logout from './components/Logout/logout.js'




const App = () => {
  const [isallowed, setIsallowed] = useState(false)
  const [alert, setAlert] = useState(false)
  console.log(isallowed)


  const handleLogin =()=>{
    setIsallowed(true)
    setAlert(true)
    
  };
  const handleLogaut =()=>{
    setIsallowed(false)
    setAlert(false)
  };



  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='' element={<PaginaPrincipal />}></Route>
        {/* <Route element={<ProtectedRoute isallowed={isallowed}/>}>         */}
        <Route path='/portafolio' element={ <Protect isallowed={isallowed}>
                <Portafolio />
                </Protect>}>      
               </Route>
        {/* </Route> */}
        <Route path='' element={<PaginaPrincipal />}></Route>
        
        <Route path='/users' element={<Users />}> </Route>       
        <Route path='/informacionGeneral' element={<Informacion />}></Route>
        <Route path='/administracion' element={<Administracion />}></Route>
        <Route path='/login' element={<Login alert={alert} handleLogin={handleLogin} handleLogaut={handleLogaut} />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
