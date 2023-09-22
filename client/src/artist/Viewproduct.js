import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink ,useHistory} from 'react-router-dom';
import Navbbar from "./Navbbar"



const ViewProduct = () => {

    const history = useHistory("");
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
            console.log("no data")
            //history.push(`/artisthome/${token}`);

        } else {
            setProductData(data)
            console.log("get data1231");
            
        }
    }

    useEffect(() => {
        getdata();
    }, [])




    return (
        <>
            <Navbbar />
            <div class="belownav-artist">
                <table class="table table-bordered table-hover tableclass">
                    <tbody>
                        <tr>
                            <td class="tdclass">
                                    name
                            </td>
                            <td class="tdclass">
                                    description
                            </td>
                            <td class="tdclass">
                                    price
                            </td>
                            <td class="tdclass">
                                    instock
                            </td>
                            <td class="tdclass">
                                    image
                            </td>
                        </tr>
                        {

                            getProductdata.map((element, id) => {
                                return (
                                    <>
                                        <tr>
                                            <td class="tdclass">
                                                    {element.name}

                                            </td>
                                            <td class="tdclass">
                                                    {element.description}

                                            </td>
                                            <td class="tdclass">
                                                    {element.price}

                                            </td>
                                            <td class="tdclass">
                                                    {element.instock}

                                            </td>
                                            <td class="tdclass">
                                                    <img src={element.url} style={{ width: 150, height: 150 }} alt="profile" />

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