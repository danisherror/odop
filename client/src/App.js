import './App.css';
import {Switch,Route} from "react-router-dom"

import HomeNavbar from "./overall/HomeNavbar";



import ArtistSignin from "./artist/Signin";
import ArtistSignup from "./artist/Signup";
import ArtistHome from "./artist/ArtistHome"
import ArtistProfile from "./artist/Profile";
import Artistimage from "./artist/Addimage";
import Artistedit from "./artist/Artistedit";
import Artistproduct from "./artist/Addproduct";
import ArtistviewProuct from "./artist/Viewproduct"

import UserSignin from "./users/Signin";
import UserSignup from "./users/Signup"
import UserHome from "./users/Uhome";
import UserProfile from "./users/Profile";
import Userimage from './users/Addimage';
import Useredit from "./users/Enterudata";
function App() {
  return (
   <>
    <Switch>
      <Route exact path="/" component={HomeNavbar} />

      <Route exact path="/artistsignup" component={ArtistSignup} />
      <Route exact path="/artistsignin" component={ArtistSignin} />
      <Route exact path="/artisthome/:token" component={ArtistHome} />
      <Route exact path="/artistprofile/:token" component={ArtistProfile} />
      <Route exact path="/artistimage/:token" component={Artistimage} />
      <Route exact path="/artistedit/:token" component={Artistedit} />
      <Route exact path="/artistproduct/:token" component={Artistproduct} />
      <Route exact path="/artistviewproduct/:token" component={ArtistviewProuct} />
      
      <Route exact path="/usersignin" component={UserSignin} />
      <Route exact path="/usersignup" component={UserSignup} />
      <Route exact path="/userhome/:token" component={UserHome} />
      <Route exact path="/userprofile/:token" component={UserProfile} />
      <Route exact path="/userimage/:token" component={Userimage} />
      <Route exact path="/useredit/:token" component={Useredit} />
      
     </Switch>
   </>
  );
}

export default App;
