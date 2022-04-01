import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Slider from "react-slick";
import { TodoListComponent } from './apps/TodoList'
import { VectorMap } from "react-jvectormap"
import {Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Certificate, download } from './certificate.js';
import './dashboard/Dashboard.css'
const mapData = {
  "IN": 10,
  "BZ": 50,
  "US": 20,
  "AU": 30,
  "GB": 40,
  "GE": 60
}


export function Dating () {

    let isMarried = true
    let treeMinted = true
    let marriageMinted = true
    return (
      <div>

          <Form.Group className="d-flex" style={{width:"40vw", marginLeft:"calc(50% - 20vw)"}}>
            <Form.Control as="select" size="lg" placeholder="User Wallet Address" onChange={()=>{}} style={{backgroundColor:"#191c24", color:"white"}}>
              <option value="1">0x3b5CE9F8cfCaa5BEBddcB31215A6864Ac991E3d2</option>
              <option value="2">0xD6e2143D7CDcAfBe9B29073e429b4a251395369E</option>
              <option value="3">0x52D51Ea0C93F3a0A22dC0Aa7364cEedDB23535d5</option>
            </Form.Control>
            <Button variant="primary" id="button-addon2" onClick={()=>{}}>
                      Fetch User NFTs
            </Button>
          </Form.Group>
          <div className="purchase__detailsBuy">
                          <button style={{marginLeft:"calc(50% - 106.4px)"}}onClick={() => {alert("Minted!")}}>
                              Fetch Random User's NFTs
                          </button>
          </div>
        <div className='row'>
        <div className="col-12 grid-margin">
            <div className='card'>
              <div className='card-body'>
                <h2 style={{color:"#f2c96a"}}>User Details</h2>
                <div className='d-flex' style={{fontWeight:"400"}}>
              <h4 style={{marginRight:"1rem"}}>Name: Kriti Sanon</h4> <h4>Gender: Female</h4>
              </div>
              <h4 className="card-title" style={{marginTop:"50px"}}>Their NFTs</h4>
<Row xs={1} md={2} className="g-4">
  {Array.from({ length: 3 }).map((_, idx) => (
    <Col style={{marginLeft:"0vw"}}>
      <Card style={{minWidth:"20vw",maxWidth:"20vw", margin:"10px", borderRadius:"5%", borderColor:"gray", borderStyle:"dashed"}}>
        <Card.Img variant="top" src={require("../assets/rings/male/"+(idx+1)+  ".png")} style={{width:"90%", marginLeft:"5%", marginTop:"5%", borderRadius:"5%"}}/>
        <Card.Body>
          <Card.Title>Ring {idx}</Card.Title>
          <Card.Text>
              Ring Description
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
              </div>
            </div>
          </div>
        </div>
        
      </div> 
    );
  }

export default Dating;