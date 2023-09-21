import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Navbbar from "./Navbbar"
const Addproduct = () => {
  const history = useHistory("");
  const { token } = useParams("token");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");








  console.log(token);

  const [inpval, setINP] = useState({
    name: "",
    description: "",
    price: 0,
    instock: 0,
    url: ""
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
  const addartistproduct = async (e) => {
    e.preventDefault();

    const { name, description, price, instock } = inpval;
    const formdata = new FormData()
    formdata.append("file", image)
    formdata.append("upload_preset", "testing")
    formdata.append("cloud_name", "dpywvy2za")
    const res1 = await fetch('https://api.cloudinary.com/v1_1/dpywvy2za/image/upload', {
      method: "post",
      body: formdata
    })
    const ImgData = await res1.json()
    const url1 = ImgData.url
    setUrl(url1);

    const res2 = await fetch(`/api/product/addproduct/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, description, price, instock, url: url1
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
    <><Navbbar />
      <div class="login-box">

        <h2>product add</h2>
        <form>
          <div class="user-box">
            <input type="text" value={inpval.name} onChange={setdata} name="name" required="" />
            <label>Name</label>
          </div>
          <div class="user-box">
            <input type="text" value={inpval.description} onChange={setdata} name="description" required="" />
            <label>description</label>
          </div>
          <div class="user-box">
            <input type="number" value={inpval.price} onChange={setdata} name="price" required="" />
            <label>price</label>
          </div>
          <div class="user-box">
            <input type="number" value={inpval.instock} onChange={setdata} name="instock" required="" />
            <label>instock</label>
          </div>
          <div class="user-box">
            <label>pic</label>
            <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
          </div>


          <button class="btn-sub" type="submit" onClick={addartistproduct} >
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
    </>
  )
}

export default Addproduct