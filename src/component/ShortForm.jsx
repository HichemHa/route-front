import React from 'react'
import { Form,Button } from 'react-bootstrap'
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from 'axios';

function ShortForm() {
    const gouvList = ["Ariana","Tunis","Ben Arous","Manouba","Bizerte","Beja","Jendouba","El kef","Seliana","Zaghouan","Nabeul","Sousse","kairouan","Sidi Bouzid","Kasserine","Gafsa","Sfax","Mahdia","Monastir","Gabes","Mednine","Tataouin","Touzeur","kebili"]
    const [gouve, setGouve] = React.useState("");
    const [gouveData, setgouveData] = React.useState("");

    const handleChangegouve = (event) => {
        setGouve(event.target.value);
      };
    const handelSubmit = async(e)=>{
        e.preventDefault();
        try {
            let x = await axios.get(`https://routerserv.herokuapp.com/casetest/getcases/gouve/${gouve}`)
            setgouveData(x.data)
        } catch (error) {
            console.log("first",error)
        }
      
    }
  return (
    <>
    <Form onSubmit={handelSubmit}>
         <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gouve}
                    label="gouve"
                    onChange={handleChangegouve}
                  >
                    {gouvList.map((el) => (
                      <MenuItem value={el}>{el}</MenuItem>
                    ))}
            </Select>
            <Button type="submit">
            {" "}
            Envoyé
          </Button>
    </Form>
    {!gouveData ? "pas de data" : gouveData.map(el=>
    <div>
         <p>{el.gouve}</p>
        <p>{el.route}</p>
        <p>{el.caseType}</p>
        <p>{el.caseDet}</p>
    </div>
       
        ) }
    </>
    

  )
}

export default ShortForm