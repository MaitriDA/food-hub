import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './style.css';
import axios from "axios";
import bake from '../../img/bake.png';
import bike from '../../img/bike.png';
import delivered from '../../img/delivered.png';


const AdminOrder = () => {
    const [order, setOrder] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    const getOrder = async () => {
        const res = await axios.get(`http://localhost:5000/server/order/${user._id}`);
        setOrder(res.data);
    }

    useEffect(() => {
        getOrder();
    }, [])

    console.log(order)
    return (
        <div>
            <div>
                <Navbar />
                <div class="container-fluid" style={{ position: 'absolute', marginTop: "70px" }}>
                    <div className="d-flex">
                        <div style={{ width: "100%"}} class="mx-auto">
                            <div class="mx-auto d-flex pt-3 mb-3" style={{ width: "90%"}}>
                                <div class="d-flex justify-content-between mx-auto" style={{ width: "95%" ,fontSize:"20px",fontSizeAdjust:"700"}}>
                                    <div style={{width:"120px"}}></div>
                                    <div style={{ width: "20%" ,fontWeight:"700"}}>
                                        Order 
                                    </div>
                                    <div style={{ width: "20%", fontWeight:"700" }}>
                                        Customer
                                    </div>
                                    <div style={{ width: "20%",fontWeight:"700" }}>
                                        Payment
                                    </div>
                                    <div style={{ width: "10%", fontWeight:"700" }}>
                                        Status
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid" style={{ position: 'absolute', marginTop: "120px" }}>
                    <div className="d-flex">
                        {order.length !== 0 ? <div style={{ width: "100%"}} class="mx-auto">
                            {order.map((i, index) => (<div class="mx-auto d-flex pt-3 mb-3" style={{ width: "90%", borderBottom: "1px solid gray" }}>
                                <div class="d-flex justify-content-between mx-auto" style={{ width: "95%" }}>
                                    <img src={i.image} style={{ width: "120px", height: "80px", borderRadius: "5px" }} />
                                    <div style={{ width: "20%" }}>
                                        <div class="d-flex align-items-center" >
                                            <div style={{ fontSize: "18px", fontWeight: "500" }}>16/09/2021, </div>
                                            <div style={{ marginLeft: "10px" }}>21:05 PM</div>
                                        </div>
                                        <div style={{ fontSize: "12px" }}>Order Id:  {i._id}</div>
                                        <div style={{ marginTop: "5px", fontSize: "15px", color: "gray" }}>
                                            <span>Item: </span>
                                            <span style={{ fontWeight: "500" }}>{i.name}</span>
                                        </div>
                                        
                                    </div>
                                    <div style={{ width: "20%", fontSize: "15px"}}>
                                        <div>
                                            <span style={{ fontWeight: "500" }}>Maitri Amin</span>
                                        </div>
                                       <div>318, At Pots Chinchani</div>
                                       <div>Pin: 401503</div>
                                        <div style={{marginBottom:"10px"}}>9324689206</div>
                                    </div>
                                    <div style={{ width: "20%", fontSize: "15px"}}>
                                        <div>
                                            <span style={{ fontWeight: "500" }}> Rs. {i.price} /-</span>
                                            <span style={{ fontSize: "12px" }}> (Delivery Excluded)</span>
                                        </div>
                                        {i.paymentMode===1?<div>Online Pay</div>:<div>Cash On Delivery</div>}
                                        {i.paymentStatus ? <div style={{ color: "green", fontWeight: "600" }}>Paid</div>:<div><div style={{ color: "red", fontWeight: "600" }}>Not Paid</div>
                                        <button class="ps-5 pe-5" style={{border:"1px solid black"}}>Paid</button></div> }
                                    </div>
                                    <div style={{ width: "10%"}}>
                                        {i.status===0 && <div class="d-flex flex-column">
                                            <img src={bake} style={{width:"40px",height:"50px",opacity:"0.65"}}/>
                                            <button class="ps-2 pe-2 mt-3" style={{border:"1px solid black"}}>Next</button>
                                            </div>}
                                        {i.status===1 && <div class="d-flex flex-column">
                                            <img src={bike} style={{width:"40px",height:"50px",opacity:"0.65"}}/>
                                            <button class="ps-2 pe-2 mt-3" style={{border:"1px solid black"}}>Next</button>
                                            </div>}
                                        {i.status===2 && <img src={delivered} style={{width:"40px",height:"50px",opacity:"0.65"}}/>}
                                    </div>
                                        

                                </div>
                            </div>))}
                        </div> : <div style={{ width: "80%", textAlign: "center" }} class="mx-auto">No Orders</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminOrder