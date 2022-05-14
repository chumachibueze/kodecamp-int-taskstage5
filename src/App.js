import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Aboutpage from './Components/Aboutpage';
import Contactpage from './Components/Contactpage';
import Navbar from './Components/Navbar';
import Datapage from './Components/Datapage';
import Details from './Components/Details';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''} >
       <div>
         <Navbar />
         <Routes>
           <Route path='/' element={<Datapage />} />
           <Route path='/about' element={<Aboutpage />} />
           <Route path='/contact' element={<Contactpage />} />
           <Route path='/details/:id' element={<Details />} />
         </Routes>
      </div>
    
    </BrowserRouter>
 
  );
}

export default App;
