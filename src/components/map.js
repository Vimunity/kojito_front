import React from "react";
import Story1 from "../assets/lara1.jpg";
import Story2 from "../assets/lara2.jpg";
import Story3 from "../assets/lara3.jpg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Map() {
  return (
    <div className="mt-5 container">
      <Row>
        <Col>
          <Card>
            <Card.Img
              style={{ height: "500px", border: "solid 3px white" }}
              variant="top"
              src={Story2}
            />
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "500px", border: "solid 3px white" }}></Card>
        </Col>
      </Row>
    </div>
  );
}

export default Map;
