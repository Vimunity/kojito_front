import Carousel from "react-bootstrap/Carousel";
import Story1 from "../assets/lara1.jpg";
import Story2 from "../assets/lara2.jpg";
import Story3 from "../assets/lara3.jpg";

function CarouselModal() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img src={Story1} width={300} alt="First slide" />
        <Carousel.Caption> 
        </Carousel.Caption>
        <img src={Story1} width={500} alt="First slide" />
        <Carousel.Caption> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img width={300} src={Story2} alt="Second slide" />
        <Carousel.Caption> 
        </Carousel.Caption>
        <img src={Story1} width={500} alt="First slide" />
        <Carousel.Caption> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img width={300} src={Story3} alt="Third slide" />
        <Carousel.Caption>  
        </Carousel.Caption>
        <img src={Story1} width={500} alt="First slide" />
        <Carousel.Caption> 
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselModal;
