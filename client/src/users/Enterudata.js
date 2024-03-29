
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Navbbar from "./Navbbar"
const UserEdit = () => {

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

        const res = await fetch(`/api/user/userprofile/${token}`, {
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


    const updateuser = async (e) => {
        e.preventDefault();

        const { name, email, phoneno, age, address, city } = inpval;

        const res2 = await fetch(`/api/user/useredit/${token}`, {
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
            history.push(`/userhome/${token}`);
        }
    }


    return (
        <>
            <Navbbar />
        <div className="container">
            <h1 class="textstyle-h1">edit profile</h1>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" token="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">phoneno</label>
                        <input type="number" value={inpval.phoneno} onChange={setdata} name="phoneno" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">age</label>
                        <input type="number" value={inpval.age} onChange={setdata} name="age" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">address</label>
                        <input type="text" value={inpval.address} onChange={setdata} name="address" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">city</label>
                        <input type="text" value={inpval.city} onChange={setdata} name="city" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default UserEdit