import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/external.css';


const RegisterArtist = () => {
  const history = useHistory("");

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    password: "",
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
  const addinpdata = async (e) => {
    e.preventDefault();

    const { name, email, password } = inpval;

    const res = await fetch("/api/artist/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password
      })
    });

    const data = await res.json();

    if (res.status === 422) {
      console.log("error ");
      alert("error1");

    } else {
      alert("added");
      console.log("data added");
      history.push("/");
    }


  }


  return (

    <div class="fullscreen-div bimage">
            <h1 class="textstyle-h1">
            Your Work Counts!
            </h1>
            <h2 class="textstyle-h2">
              Signup
            </h2>
      <form>
        <div class="form-signin">
          <input type="text" class="form-control" value={inpval.name} onChange={setdata} name="name" required="" />
          <label>Name</label>
        </div>
        <div class="form-signin">
          <input type="email" class="form-contorl" value={inpval.email} onChange={setdata} name="email" required="" />
          <label>Email</label>
        </div>
        <div class="form-signin">
          <input type="password" class="form-control" value={inpval.password} onChange={setdata} name="password" required="" />
          <label>Password</label>
        </div>

        <button class="btn btn-primary" type="submit" onClick={addinpdata} >
            Submit
        </button>
      </form>
    </div>
  )
}

export default RegisterArtist