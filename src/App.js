import logo from "./logo.svg";
import {Container,Row} from 'react-bootstrap';
import SignInSide from "./component/SignInSide";
import { Routes ,Route } from 'react-router-dom';
import SignUp from "./component/SignUp";
import HomePage from "./component/HomePage";
import ListeCase from "./component/ListeCase";
import {isMobile} from 'react-device-detect';
import './App.css';
import Mapss from "./component/Mapss";
import FormR from "./component/FormR";


function App() {
  var item_value = sessionStorage.getItem("item_key");
  return (
   <>
        <Routes>
    
            
            <Route exact path="/" element={<SignInSide  isMobile={isMobile}/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/map" element={<Mapss />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/insertdata" element={<FormR />} />
            <Route path="/liste" element={<ListeCase />} />
      
        </Routes>
        </>
  );
}

export default App;
