import './App.css';
import {Switch,Route} from "react-router-dom"
import HomeNavbar from "./overall/HomeNavbar";
import Signin from "./artist/Signin";
import Signup from "./artist/Signup";
import ArtistHome from "./artist/ArtistHome"
import Profile from "./artist/Profile";
import Artistimage from "./artist/Addimage";
import Artistedit from "./artist/Artistedit";
import Artistproduct from "./artist/Addproduct";
import ArtistviewProuct from "./artist/Viewproduct"
function App() {
  return (
   <>
    <Switch>
      <Route exact path="/" component={HomeNavbar} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/artisthome/:token" component={ArtistHome} />
      <Route exact path="/profile/:token" component={Profile} />
      <Route exact path="/artistimage/:token" component={Artistimage} />
      <Route exact path="/artistedit/:token" component={Artistedit} />
      <Route exact path="/artistproduct/:token" component={Artistproduct} />
      <Route exact path="/artistviewproduct/:token" component={ArtistviewProuct} />
      
     </Switch>
   </>
  );
}

export default App;
