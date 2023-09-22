
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
//import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HeightIcon from '@mui/icons-material/Height';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Person2Icon from '@mui/icons-material/Person2';
import { NavLink, useParams } from 'react-router-dom'
import Navbbar from "./Navbbar"
//import { Hidden, colors } from '@mui/material';
//import { blue } from '@mui/material/colors';
const UserDetails = () => {

    //const history = useHistory("");


    const [getuserdata, setUserdata] = useState([]);
    console.log("dsdsds ", getuserdata);

    const { token } = useParams("token");
    //alert(token);


    const getdata = async () => {

        const res = await fetch(`/api/user/userproduct/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data.ans)
            console.log(data);
            console.log("get data123");
        }
    }

    useEffect(() => {
        getdata();
    }, [])





    return (
        <>
            <Navbbar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div >
            {getuserdata.map((card, index) => (
          <div key={index} className="card">
            <h1>name:{card.name}</h1>
            <h1>desc:{card.description}</h1>
            <img src={card.url} style={{ width: 100, height: 100 }} alt="profile" />
            <h1>price:{card.price}</h1>
            <h1>selled:{card.selled}</h1>
            <h1>instock:{card.instock}</h1>
          </div>
        ))}
            
          
       
      </div>
        </>
    )
}

export default UserDetails