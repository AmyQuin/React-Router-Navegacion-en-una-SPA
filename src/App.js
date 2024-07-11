import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Page404 from './pages/Page404'; //Pagina 404
import Header from './Components/Header';
import Post from './pages/Post';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //Utilizazmos react router dom

function App() {

 
//CREANDO RUTAS
//Route path='*' es una ruta aleartoria, si no existe se muestra el mensaje del h1
//Cuando enviamos informacion con props no es necesario poner <></>
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>     
        <Route path='/sobre' element={<Sobre/>}/> 
        <Route path='/posts/:id' element={<Post/>}/>   
        <Route path='*' element={<Page404/>}/>                
      </Routes>
    </Router>
  );
}

export default App;
