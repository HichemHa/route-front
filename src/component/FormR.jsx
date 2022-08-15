import React from "react";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./compo.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextareaAutosize } from "@mui/material";
import { green } from "@mui/material/colors";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Grid from "@mui/material/Grid";

import { Container, Row, Col } from "react-bootstrap";
function FormR() {
  const listdescas = ["chaussée", "pont", "danger", "ralenti"];
  const chaussée = [
    "orniere a grand rayon",
    "affaissement de rive",
    "fissure transversale",
    "fissure oblique",
    "ressuage",
    "Glaçage",
  ];
  const ralenti = [
    "manque signalisation vertical",
    "manque signalisation horizontal",
    "mauvaise géometrie",
    "manque éclérage",
  ];
  const pont = [
    "super structure",
    "drainage",
    "joint de chaussée",
    "appareil d'appuis",
    "secrurité",
  ];
  const gouvList = ["Ariana","Tunis","Ben Arous","Manouba","Bizerte","Beja","Jendouba","El kef","Seliana","Zaghouan","Nabeul","Sousse","kairouan","Sidi Bouzid","Kasserine","Gafsa","Sfax","Mahdia","Monastir","Gabes","Mednine","Tataouin","Touzeur","kebili"]
  const danger = ["point blue", "point noir"];

  const theme = createTheme();

  const navigate = useNavigate();

  const [loadingUpload, setLoadingUpload] = React.useState(false);
  const [pos, setPos] = React.useState("");
  const [route, setRoute] = React.useState(false);
  const [obs, setObs] = React.useState("");
  const [msg, setMsg] = React.useState(null);
  console.log("first", pos);
  const [typed, setTypeD] = React.useState(false);
  const [typedd, setTypeDd] = React.useState(false);
  const [gouve, setGouve] = React.useState("Tunis");

  console.log("typed", typed);

  const handleChange = (event) => {
    setTypeD(event.target.value);
  };
  const handleChangedeux = (event) => {
    setTypeDd(event.target.value);
  };
  const handleChangegouve = (event) => {
    setGouve(event.target.value);
  };

  const locationH = async () => {
    var successHandler = function (position) {
      setPos(position);
    };

    var errorHandler = function (errorObj) {
      alert(errorObj.code + ": " + errorObj.message);
    };
    await navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      { enableHighAccuracy: true, maximumAge: 10000 }
    );
  };
  const handelFinish = async (event) => {
    let latitude = JSON.stringify(pos.coords.latitude);
    let longitude = JSON.stringify(pos.coords.longitude);
    let aze = { latitude: latitude, longitude: longitude };

    var bodyFormData = new FormData();

    bodyFormData.append("image", loadingUpload);
    bodyFormData.append("localisation", JSON.stringify(aze));
    bodyFormData.append("route", route);
    bodyFormData.append("caseType", typed.toLocaleUpperCase());
    bodyFormData.append("caseDet", typedd);
    bodyFormData.append("gouve", gouve.toLocaleUpperCase());
    bodyFormData.append("detail", obs);

    try {
      const aa = await axios({
        method: "post",
        url: "https://routerserv.herokuapp.com/casetest/addcase",
        data: bodyFormData,
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
    setMsg("data inserted");
    setTimeout(() => {
      navigate(0);
    }, 2000);
  };

  return (
    <Container >
      <Row  style={{
         
            margin: "10px",
            padding: "10px",
          }}>
        <Col sm={6} style={{ display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",}}>
          <h3>PHOTO DE LA DEGRADATION</h3>

          <Button variant="contained" component="label">
            Upload <PhotoCamera />
            <input
              hidden
              onChange={(e) => setLoadingUpload(e.target.files[0])}
              multiple
              type="file"
            />
          </Button>
        </Col>
        <Col sm={6} style={{ display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", border: "1px solid black",
            borderRadius: "5px",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",
            padding: "10px",}}>
          <h3>LOCALITATION GPS</h3>

          <Button onClick={locationH}>
            Position <AddLocationIcon />{" "}
          </Button>
        </Col>
      </Row>
      <Row style={{
           
            margin: "10px",
            padding: "10px",
          }}>
        <Col sm={6} style={{ display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",}}>
          {" "}
          <h3>ROUTE</h3>
          <TextField
            id="outlined-basic"
            label="entrer le numéro de la route "
            variant="outlined"
            name="route"
            onChange={(e) => setRoute(e.target.value)}
          />
        </Col>
        <Col sm={6} style={{ display: "flex",
            flexDirection: "column",
            justifyContent: "center",border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",
            alignItems: "center",}}><h3>Gouvernorat</h3>
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
            </Col>
      </Row>
      <Row style={{
           
            margin: "10px",
            padding: "10px",
          }}>
        <Col sm={6} style={{ display: "flex",
            flexDirection: "column",
            justifyContent: "center",border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",
            alignItems: "center",}}><h3>Choisir cas </h3>
        <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">choisir</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typed}
                label="TypeD"
                onChange={handleChange}
              >
                {listdescas.map((el) => (
                  <MenuItem value={el}>{el}</MenuItem>
                ))}
              </Select>
            </FormControl>
        </Col>
        {typed ? 
        <Col sm={6} style={{ display: "flex",
            flexDirection: "column",
            justifyContent: "center",border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",
            alignItems: "center",}}>
        <h3>Choisir cas parmi {typed}</h3>
       
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">choisir</InputLabel>
            {typed === "chaussée" ? (
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typedd}
                label="chaussée"
                onChange={handleChangedeux}
              >
                {chaussée.map((el) => (
                  <MenuItem value={el}>{el}</MenuItem>
                ))}
              </Select>
            ) : typed === "pont" ? (
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typedd}
                label="pont"
                onChange={handleChangedeux}
              >
                {pont.map((el) => (
                  <MenuItem value={el}>{el}</MenuItem>
                ))}
              </Select>
            ) : typed === "danger" ? (
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typedd}
                label="danger"
                onChange={handleChangedeux}
              >
                {danger.map((el) => (
                  <MenuItem value={el}>{el}</MenuItem>
                ))}
              </Select>
            ) : (
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typedd}
                label="ralenti"
                onChange={handleChangedeux}
              >
                {ralenti.map((el) => (
                  <MenuItem value={el}>{el}</MenuItem>
                ))}
              </Select>
            )}
          </FormControl>
        
      </Col>
        : null}
      </Row>
      <Row style={{ display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "1px solid black",
            borderRadius: "5px",
            margin: "10px",
            padding: "10px",
            alignItems: "center",textAlign:"center"}}><h3>OBSERVATION</h3>
      <TextareaAutosize
              style={{ width: '-moz-available', height: '200px' }}
              id="outlined-basic"
              label="entrer votre observation "
              variant="outlined"
              name="obs"
              onChange={(e) => setObs(e.target.value)}
            />
      </Row>

      <Row style={{ display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",textAlign:"center"}}>
      <Button onClick={handelFinish} style={{ width: '-moz-available', height: '60px' }}>
            {" "}
            Envoyé
          </Button>
      </Row>
    </Container>
  );
}

export default FormR;
