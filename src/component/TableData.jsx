import React from "react";
import Table from "react-bootstrap/Table";

function TableData({listeData}) {
  console.log("listeData", listeData);
  return (
    !listeData ? <h1>please wait</h1> : 
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>N° Route</th>
          <th>Gouvernorat</th>
          <th>Catégorie</th>
          <th>Annomalie</th>
          <th>OBSERVATION</th>
          <th>see photo</th>
        </tr>
      </thead>
      <tbody>
        {listeData.map((el,i)=>
            
            <tr>
              <td>{i+1}</td>
              <td>{el.route}</td>
              <td>{el.gouve}</td>
              <td>{el.caseType}</td>
              <td>{el.caseDet}</td>
              <td>{el.detail}</td>
              <td><a href={`https://routerserv.herokuapp.com${el.image}`} >click here</a></td>
            </tr>
            )}

      </tbody>
    </Table>
  );
}

export default TableData;
