
// import React, { useEffect, useState } from 'react'
// import { Helmet } from 'react-helmet';
// //import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
// import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import HeightIcon from '@mui/icons-material/Height';
// import LocationCityIcon from '@mui/icons-material/LocationCity';
// import Person2Icon from '@mui/icons-material/Person2';
// import { NavLink, useParams,useHistory } from 'react-router-dom'
// import Navbbar from "./Navbbar"
// //import { Hidden, colors } from '@mui/material';
// //import { blue } from '@mui/material/colors';
// const UserDetails = () => {

//     const history = useHistory("");


//     const [getuserdata, setUserdata] = useState([]);
//     console.log("dsdsds ", getuserdata);

//     const { token } = useParams("token");
//     //alert(token);
//     const [inpval, setINP] = useState({
//         id:""
//       })
//       const setdata = (e) => {
//         console.log(e.target.value);
//         const { name, value } = e.target;
//         setINP((preval) => {
//             return {
//                 ...preval,
//                 [name]: value
//             }
//         })
//     }


//     const getdata = async () => {

//         const res = await fetch(`/api/user/userproduct/${token}`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const data = await res.json();
//         console.log(data);

//         if (res.status === 422 || !data) {
//             console.log("error ");

//         } else {
//             setUserdata(data.ans)
//             console.log(data);
//             console.log("get data123");
//         }
//     }

//     useEffect(() => {
//         getdata();
//     }, [])
//     const addinpdata = async (e) => {
//         e.preventDefault();


//         const { id} = inpval;
//         const res = await fetch(`/api/user/usercart/${token}`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//             id
//           })
//         });

//         const data = await res.json();

//         if (res.status === 422) {
//           console.log("error ");
//           alert("error1");

//         } else {
//           alert("added");
//           console.log("data added");

//         }


//       }






//     return (
//         <>
//             <Navbbar />
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <div >
//             {getuserdata.map((card, index) => (
//           <div key={index} className="card">
//             <h1>name:{card.name}</h1>
//             <h1>desc:{card.description}</h1>
//             <img src={card.url} style={{ width: 100, height: 100 }} alt="profile" />
//             <h1>price:{card.price}</h1>
//             <h1>selled:{card.selled}</h1>
//             <h1>instock:{card.instock}</h1>
//             <button type="submit" value={card._id} onChange={setdata} onClick={addinpdata} name="id" class="btn btn-primary">add to cart</button>
//           </div>
//         ))}



//       </div>
//         </>
//     )
// }

// export default UserDetails

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './UserDetails.css';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HeightIcon from '@mui/icons-material/Height';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Person2Icon from '@mui/icons-material/Person2';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import Navbbar from './Navbbar';

const UserDetails = () => {
  const history = useHistory('');

  const [getuserdata, setUserdata] = useState([]);
  const { token } = useParams('token');

  const getdata = async () => {
    const res = await fetch(`/api/user/usercart/${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log('error');
    } else {
      setUserdata(data.ans);
      console.log(data);
      console.log('get data123');
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  

  return (
    <>
      <Navbbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div className="card-grid">
        {getuserdata.map((card, index) => (
          <Card key={index} className="embossed-card">
            <img src={card.url} alt="profile" className="card-image" />
            <CardContent>
              <Typography variant="h5" component="div">
                {card.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {card.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sold: {card.selled}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In Stock: {card.instock}
              </Typography>
              
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default UserDetails;
