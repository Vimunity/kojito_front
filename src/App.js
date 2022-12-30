import logo from "./logo.svg";
import "./App.css"; 
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import ColorSchemesExample from "./components/navbar_header";  
import OurStory from "./components/our_story";
import DishCarousel from "./components/dish_carousel";
import GalleryCard from "./components/gallary";
function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <ColorSchemesExample />
      <OurStory />
      <DishCarousel />
      <GalleryCard />
      </header> 
    </div>
  );
}

export default App;

