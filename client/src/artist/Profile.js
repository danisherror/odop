import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Person2Icon from '@mui/icons-material/Person2';
import { NavLink, useParams } from 'react-router-dom'
import Navbbar from "./Navbbar"

const ArtistDetail = () => {


    const [getartistdata, setArtistData] = useState({});
    console.log("dsdsds ", getartistdata);

    const { token } = useParams("token");
    //alert(token);


    const getdata = async () => {

        const res = await fetch(`/api/artist/profile/${token}`, {
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
            setArtistData(data.user)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])





    return (
        <>
            <Navbbar />

            <div className="container mt-3">
                <Card>
                    {/* sx={{ maxWidth: 100% }} */}
                    <CardContent >
                        <div className="row">
                            <div className="left_view col-lg-6 col-md-6 col-12">



                                <table class="table table-bordered table-hover" >
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={getartistdata.url} style={{ width: 250, height: 175 }} alt="profile" />
                                            </td>
                                            <td>
                                                <div className="add_btn" align="center">
                                                    <NavLink to={`/artistedit/${token}`}> <button className="btn btn-primary" >edit</button></NavLink>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="add_btn" align="center">

                                                    <NavLink to={`/artistimage/${token}`}> <button className="btn btn-primary" >change image</button></NavLink>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h3 className="mt-3"><Person2Icon />Name: <span >{getartistdata.name}</span></h3>
                                            </td>
                                            <td>
                                                <h3 className="mt-3"><MailOutlineIcon /> email: <span >{getartistdata.email}</span></h3>
                                            </td>
                                            <td>
                                                <h3 className="mt-3"><PhoneAndroidIcon />phoneno: <span >{getartistdata.phoneno}</span></h3>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h3 className="mt-3"><LocationOnIcon />address: <span >{getartistdata.address}</span></h3>
                                            </td>
                                            <td>
                                                <h3 className="mt-3"><LocationCityIcon />city: <span >{getartistdata.city}</span></h3>
                                            </td>
                                            <td>
                                                <h3 className="mt-3">age: <span >{getartistdata.age}</span></h3>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>

                        </div>

                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default ArtistDetail