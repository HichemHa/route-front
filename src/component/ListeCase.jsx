import React,{useEffect} from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './compo.css';


import SimpleMap from './SimpleMap'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TableData from './TableData';
import ShortForm from './ShortForm';
function ListeCase() {

  const [navData,setNavData] = React.useState(0);

  const  [superData,setSuperData] = React.useState(null) || ['']; 
   let fn = async ()=>{
    var x = await axios.get('https://routerserv.herokuapp.com/casetest/getallcases');
    return x;
   }
 
 
  useEffect(()=>{
    let aer = fn();
    aer.then(x=>
      setSuperData(x.data))
  },[])
  return (
  //  <div className='listecases'>
   
  //  {console.log("last",superData)}
  //  {!superData ? <p>please wait</p> : superData.map((el)=> 
  //    <Card sx={{ maxWidth: 345 }} style={{margin:"20px"}}>
  //    <CardActionArea>
  //      <CardMedia
  //        component="img"
  //        height="140"
  //        image={`https://routerserv.herokuapp.com${el.image}`}
  //        alt="green iguana"
  //      />
  //      <CardContent>
  //        <Typography gutterBottom variant="h5" component="div">
  //          {el.caseType}
  //        </Typography>
  //        <Typography variant="body2" color="text.secondary">
  //         {el.detail}
  //        </Typography>
  //      </CardContent>
  //    </CardActionArea>
  //  </Card>
  //  )}
      
  //  </div>
    <Container>
      <Row>
        <Col sm={6}> <h2 className='head2'>liste des cas</h2></Col>
        <Col sm={6}><ul className='list-items'>
          <li><a onClick={()=>setNavData(0)}>tous</a></li>
          <li><a onClick={()=>setNavData(1)}>par gouve </a></li>
          <li>par route </li>
          <li>par type de dégradation</li>
        </ul></Col>
      </Row>
    
      <Row>

      {
        navData === 0 ? <TableData listeData={superData} /> : navData===1 ? <ShortForm/> : null
      }
      </Row>
      
    </Container>
  )
}

export default ListeCase