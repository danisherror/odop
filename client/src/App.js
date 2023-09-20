import './App.css';
import {Switch,Route} from "react-router-dom"
import HomeNavbar from "./overall/HomeNavbar";
import Signin from "./artist/Signin";
import Signup from "./artist/Signup";
import ArtistHome from "./artist/ArtistHome"
import Profile from "./artist/Profile";
function App() {
  return (
   <>
    <Switch>
      <Route exact path="/" component={HomeNavbar} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/artisthome/:token" component={ArtistHome} />
      <Route exact path="/profile/:token" component={Profile} />
     </Switch>
   </>
  );
}

export default App;
