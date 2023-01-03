import Carousel from "react-bootstrap/Carousel";
import Story1 from "../assets/lara1.jpg";
import Story2 from "../assets/lara2.jpg";
import Story3 from "../assets/lara3.jpg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function GalleryCard() {
  return (
    <>
    <div className="container mt-5">
      <div style={{ marginTop: "8rem", border:"solid 2px green" }}></div>
      <Row xs={1} md={4} className="g-3">
 
          <Col>
            <Card>  
              <Card.Img variant="top" src={Story1} />
            </Card>
          </Col>
 
          <Col>
            <Card>  
              <Card.Img variant="top" src={Story2} />
            </Card>
          </Col>

           
          <Col>
            <Card>  
              <Card.Img variant="top" src={Story3} />
            </Card>
          </Col>
           
          <Col>
            <Card>  
              <Card.Img variant="top" src={Story1} />
            </Card>
          </Col>
                     
          <Col>
            <Card>  
              <Card.Img variant="top" src={Story1} />
            </Card>
          </Col>
                     
          <Col>
            <Card>  
              <Card.Img variant="top" src={Story2} />
            </Card>
          </Col>
                     
          <Col>
            <Card>  
              <Card.Img variant="top" src={Story3} />
            </Card>
          </Col>
                     
          <Col>
            <Card>  
              <Card.Img variant="top" src={Story1} />
            </Card>
          </Col>
      </Row>
      </div>  
    </>
  );
}

export default GalleryCard;
