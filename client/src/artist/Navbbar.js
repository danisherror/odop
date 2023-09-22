
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AdminNavbar = () => {
  const [getartistdata, setartistdata] = useState([]);
  console.log(getartistdata);

  const { token } = useParams("token");
  console.log(token);

  // const history = useHistory("");

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
      setartistdata(data)
      console.log("get data");
    }
  }

  useEffect(() => {
    getdata();
  }, [])



  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <a class="navbar-brand mt-2 mt-lg-0" href="">
            <img
              src="http://res.cloudinary.com/dpywvy2za/image/upload/v1695362102/c9sutnglkc0yjyafdrwy.jpg"
              height="35"
              alt="idop Logo"
              loading="lazy"
              class="navbarimg"
            />
          </a>

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">

              <a class="nav-link" href={`/artisthome/${token}`}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={`http://localhost:3000/artistprofile/${token}`}> View Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={`http://localhost:3000/artistproduct/${token}`}> add product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={`http://localhost:3000/artistviewproduct/${token}`}> view product</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  )
}

export default AdminNavbar