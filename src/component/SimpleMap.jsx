import React from "react";
import GoogleMapReact from "google-map-react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import './compo.css';


const AnyReactComponent = ({ text }) => ( <span style={{fontSize:"20px",color:"red"}}>{text}</span>);

export default function SimpleMap( {markes}) {
  console.log("first2",markes)
  const defaultProps = {
    center: {
      lat: 36.7886336,
      lng: 10.1613568,
    },
    zoom: 5,
  };

  return (
    // Important! Always set the container height explicitly
   
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >

          {!markes ? null : markes.map(el => 
            // <AnyReactComponent lat={el.localisation.latitude} lng={el.localisation.longitude} text={el.caseType} />
           <AnyReactComponent lat={el.localisation.latitude} lng={el.localisation.longitude} text={el.caseType} />
          )}

          {/* <AnyReactComponent lat={36.7886336} lng={10.1613568} text="hi" />
          <AnyReactComponent lat={37.7886337} lng={10.1613568} text="hi" /> */}
        </GoogleMapReact>
      </div>
    
  );
}
