import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import camera from '../camera'
import FormR from './FormR';
import MenuPopupState from './MenuPopupState';
import './compo.css'
import { Container, Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IonAvatar, IonChip, IonItem, IonLabel, IonContent } from '@ionic/react';

import Button from 'react-bootstrap/Button';

function HomePage() {
    let hhhhhh = useNavigate()
    var item_value = localStorage.getItem("token")
  

  return (
  
    <Container style={{display:"flex",justifyContent: "center",alignItems: "center",height:" 100vh"}}>
      
      <Row style={{flexDirection : "column", }}>
        <Col style={{display:"flex",justifyContent: "center",alignItems: "center"  }}>
        <Link to="/insertdata" style={{ textDecoration:"none"}}>  <h2 style={{ border:"1px solid black", padding:"20px",width:"350px",textAlign:"center",backgroundColor:"#ffc107",color:"black",cursor:"pointer" }}> Insert Data</h2></Link>
        </Col>
        <Col style={{display:"flex",justifyContent: "center",alignItems: "center"  }}>
        <Link to="/map" style={{ textDecoration:"none"}}>  <h2 style={{ border:"1px solid black", padding:"20px",width:"350px",textAlign:"center",backgroundColor:"#ffc107",color:"black",cursor:"pointer" }}> MAP</h2></Link>
        </Col>
        <Col style={{display:"flex",justifyContent: "center",alignItems: "center"  }}>
        <Link to="/liste" style={{ textDecoration:"none"}}> <h2 style={{ border:"1px solid black", padding:"20px",width:"350px",textAlign:"center",backgroundColor:"#ffc107",color:"black",cursor:"pointer" }}>see cases</h2></Link>
        </Col>
        <Col style={{display:"flex",justifyContent: "center",alignItems: "center"  }}>
          <h2 style={{ border:"1px solid black", padding:"20px",width:"350px",textAlign:"center",backgroundColor:"#ffc107",color:"black",cursor:"pointer" }}>See profile</h2>
        </Col>
      </Row>
  

    </Container>
  )
}

export default HomePage