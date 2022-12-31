import React from "react";
import Story1 from "../assets/lara1.jpg";
import Story2 from "../assets/lara2.jpg";
import Story3 from "../assets/lara3.jpg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <div className="mt-5" style={{ height: "300px", backgroundColor:"white" ,border: "solid 3px blue" }}> 
        <Row>
          <Col>
            <Card></Card>
          </Col>
        </Row> 
    </div>
  );
}

export default Footer;
