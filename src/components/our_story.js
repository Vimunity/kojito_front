import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Story1 from "../assets/lara1.jpg";
import Story2 from "../assets/lara2.jpg";
import Story3 from "../assets/lara3.jpg";
import "./navbar.css";
import CarouselModal from "./our_car";
function OurStory() {
  return (
    <>
      <div className="ourStory">
        <p className="Story">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
      </div>
      <div className="Carousel">
        <CarouselModal />
      </div>
    </>
  );
}

export default OurStory;
