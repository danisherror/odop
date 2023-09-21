import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/external.css';


const Signinuser = () => {
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

        const res = await fetch("/api/artist/signin", {
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
            history.push(`/artisthome/${data.token}`);
        }
    }
  return (
<div class="fullscreen-div">
        <div>
            <h2>
              Your Work Counts!Enter Login details to list your products.
            </h2>
        </div>
        <form class="form-signin">
            <div class="form-group">
                <h2>Login</h2>
            </div>

            <div class="form-group">
                <input type="email" class="form-control" value={inpval.email} onChange={setdata} name="email" required="" />
                <label>Email</label>
            </div>
            <br/>
            <div class="form-group">
                <input type="password" class="form-control" value={inpval.password} onChange={setdata} name="password" required="" />
                <label>Password</label>
            </div>
            <button class="btn btn-primary" type="submit" onClick={addinpdata}>
            Submit
            </button>
        </form>
    </div>
  )
}

export default Signinuser;