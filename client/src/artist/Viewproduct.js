import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Navbbar from "./Navbbar"



const ViewProduct = () => {


    const [getProductdata, setProductData] = useState([]);
    console.log("----------------");
    console.log("Array Size " + getProductdata?.length)

    console.log("----------------");
    const { token } = useParams("token");
    const getdata = async () => {

        const res = await fetch(`/api/product/viewproduct/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();


        if (res.status === 422 || !data) {
            alert("no product found");

        } else {
            setProductData(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])




    return (
        <>
            <Navbbar />
            <div>
                <table class="table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <td >
                                <div class="text-center">
                                    name
                                </div>
                            </td>
                            <td >
                                <div class="text-center">
                                    description
                                </div>
                            </td>
                            <td >
                                <div class="text-center">
                                    price
                                </div>
                            </td>
                            <td >
                                <div class="text-center">
                                    instock
                                </div>
                            </td>
                            <td >
                                <div class="text-center">
                                    image
                                </div>
                            </td>
                        </tr>
                        {

                            getProductdata.map((element, id) => {
                                return (
                                    <>
                                        <tr>
                                            <td >
                                                <div class="text-center">
                                                    {element.name}
                                                </div>
                                            </td>
                                            <td >
                                                <div class="text-center">
                                                    {element.description}
                                                </div>
                                            </td>
                                            <td >
                                                <div class="text-center">
                                                    {element.price}
                                                </div>
                                            </td>
                                            <td >
                                                <div class="text-center">
                                                    {element.instock}
                                                </div>
                                            </td>
                                            <td >
                                                <div class="text-center">
                                                    <img src={element.url} style={{ width: 150, height: 150 }} alt="profile" />
                                                </div>
                                            </td>

                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ViewProduct