import './App.css';
import {Switch,Route} from "react-router-dom"

import MartNavbar from "./overall/HomeNavbar";
import Newapp from "./NewApp";
import Pashmina from "./components/CardGrid/Pashmina";
import Walnut from "./components/CardGrid/walnut";
import Kani from "./components/CardGrid/kani";
import Saffron from "./components/CardGrid/saffron";
import Papier from "./components/CardGrid/papier"

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
import UserProduct from "./users/Product";


import AdminSignin from "./admin/Signin";
import AdminSignup from "./admin/Signup";
import AdminHome from "./admin/Uhome";
import AdminProfile from "./admin/Profile";
import Adminimage from "./admin/Addimage";
import Adminedit from "./admin/Enterudata";
function App() {
  return (
   <>
    <Switch>
      
      <Route exact path="/" component={MartNavbar} />
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
      <Route exact path="/userproduct/:token" component={UserProduct} />


      <Route exact path="/adminsignin" component={AdminSignin} />
      <Route exact path="/adminsignup" component={AdminSignup} />
      <Route exact path="/adminhome/:token" component={AdminHome} />
      <Route exact path="/adminprofile/:token" component={AdminProfile} />
      <Route exact path="/adminimage/:token" component={Adminimage} />
      <Route exact path="/adminedit/:token" component={Adminedit} />
      

      <Route exact path="/pashmina" component={Pashmina} />
      <Route exact path="/walnut" component={Walnut} />
      <Route exact path="/kani" component={Kani} />
      <Route exact path="/saffron" component={Saffron} />
      <Route exact path="/papier" component={Papier} />
      
      <Route exact path="/home" component={Newapp} />


     </Switch>
   </>
  );
}

export default App;
