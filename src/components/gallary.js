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
      <div style={{ marginTop: "8rem" }}></div>
      <Row xs={1} md={4} className="g-3">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={Story1} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default GalleryCard;
