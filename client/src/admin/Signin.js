import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SigninUser = () => {
  const history = useHistory("");

  const [inpval, setINP] = useState({
    email: "",
    password: ""

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

    const { email, password } = inpval;

    const res = await fetch("/api/admin/adminsignin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = await res.json();
    if (res.status === 401 || !data) {
      console.log("error ");
      alert("error user not found");

    } else {
      alert("Signin");
      console.log("data added");
      history.push(`/adminhome/${data.token}`);
    }
  }
  return (

    <div id="container-main">
      <div class="login-box">

        <h2>Login</h2>

        <form>
          <div class="user-box">
            <input type="email" value={inpval.email} onChange={setdata} name="email" required="" />
            <label>Email</label>
          </div>
          <br />
          <div class="user-box">
            <input type="password" value={inpval.password} onChange={setdata} name="password" required="" />
            <label>Password</label>
          </div>
          <button class="btn-sub" type="submit" onClick={addinpdata}>
            <a>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </button>
        </form>
      </div>
    </div>

  )
}

export default SigninUser;