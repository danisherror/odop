import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Navbbar from "./Navbbar";
import '../styles/external.css';
const Artistedit = () => {


    const history = useHistory("");
    const [inpval, setINP] = useState({
        name: "",
        email: "",
        phoneno: "",
        age: "",
        address: "",
        city: "",
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const { token } = useParams("token");
    console.log(token);



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
            setINP(data.user)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateartistdata = async (e) => {
        e.preventDefault();

        const { name, email, phoneno, age, address, city } = inpval;

        const res2 = await fetch(`/api/artist/artistedit/${token}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phoneno, age, address, city
            })
        });

        const data2 = await res2.json();
        console.log("asdsd", data2.user);

        if (res2.status === 422 || !data2) {
            alert("fill the data");
        } else {
            alert("data updated");
            history.push(`/artisthome/${token}`);
        }
    }


    return (
        <>
        <Navbbar />

            <div className="belownav-artist">
                <h1 class="textstyle-h1">edit profile</h1>
                <form className="form-signin">
                    
                        <div class="form-control">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" class="form-group" value={inpval.name} onChange={setdata} name="name" token="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div class="form-control">
                            <label for="exampleInputPassword1" class="form-label">email</label>
                            <input type="email" class="form-group" value={inpval.email} onChange={setdata} name="email" id="exampleInputPassword1" />
                        </div>

                        <div class="form-control">
                            <label for="exampleInputPassword1" class="form-label">phoneno</label>
                            <input type="number" class="form-group" value={inpval.phoneno} onChange={setdata} name="phoneno" id="exampleInputPassword1" />
                        </div>

                        <div class="form-control">
                            <label for="exampleInputPassword1" class="form-label">age</label>
                            <input type="number" class="form-group" value={inpval.age} onChange={setdata} name="age" id="exampleInputPassword1" />
                        </div>

                        <div class="form-control">
                            <label for="exampleInputPassword1" class="form-label">address</label>
                            <input type="text" class="form-group" value={inpval.address} onChange={setdata} name="address"  id="exampleInputPassword1" />
                        </div>

                        <div class="form-control">
                            <label for="exampleInputPassword1" class="form-label">city</label>
                            <input type="text" class="form-group" value={inpval.city} onChange={setdata} name="city"  id="exampleInputPassword1" />
                        </div>

                        <div class="form-control">
                        <button type="submit" onClick={updateartistdata} class="btn btn-primary">Submit</button>
                        </div>
                </form>
            </div>
        </>
    )
}

export default Artistedit