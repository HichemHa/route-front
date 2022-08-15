import React,{useEffect} from 'react'
import SimpleMap from './SimpleMap'
import axios from 'axios'
function Mapss() {

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


  console.log("first",superData)


  return (
    <div> <SimpleMap markes={superData} /></div>
  )
}

export default Mapss