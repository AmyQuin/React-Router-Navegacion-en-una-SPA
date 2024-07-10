import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //Utilizazmos react router dom

function App() {

 

  
//Cuando enviamos informacion con props no es necesario poner <></>
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>     
        <Route path='/sobre' element={<Sobre/>}/>                    
      </Routes>
    </Router>
  );
}

export default App;
