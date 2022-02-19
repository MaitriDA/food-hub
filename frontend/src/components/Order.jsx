import React,{useEffect,useState} from 'react';
import Navbar from '../components/Navbar';
import './style.css';
import axios from "axios";



const Order = () => {
    const [cart,setCart]=useState([]);
    const user=JSON.parse(localStorage.getItem("user"));
    const getCart=async()=>{
        const res=await axios.get(`http://localhost:5000/server/cart/${user._id}/cart`);
        setCart(res.data);
    }

    useEffect(()=>{
        getCart();
    },[])
  return (
    <div>
        <div>
            <Navbar/>
            <div class="container-fluid" style={{ position: 'absolute', marginTop: "80px" }}>
            <div className="d-flex">
                {cart.length!==0 ?<div style={{width:"80%"}} class="mx-auto">
                    {cart.map((i,index)=>(<div class="mx-auto d-flex pt-3" style={{ width: "80%", borderBottom: "1px solid gray" }}>
                        <div class="ms-5 mt-3" style={{ width: "100%" }}>
                            <div class="food-info">
                                <h5>{i.name}</h5>
                                {i.veg ? <span class="me-4" style={{ color: "green", fontWeight: "600" }}>Veg</span>:<span class="me-4" style={{ color: "red", fontWeight: "600" }}>Non Veg</span>}
                            </div>
                            <div>{i.price} x {i.quantity}</div>
                            <div class="food-info me-4">
                                <p style={{ marginTop: "-7px", fontSize: "18px", fontWeight: "600" }}>Rs {i.price*i.quantity}/-</p>
                                <div class="d-flex quantity" style={{ color: "#d35100", marginTop: "-20px", fontWeight: "600" }}>
                                    <div style={{ fontSize: "20px" }}>{i.quantity}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img class="ms-auto me-3 " src={i.image} style={{ width: "150px", height: "90px", borderRadius: "10px" }} />
                        </div>
                    </div>))}
                </div>:<div style={{width:"80%",textAlign:"center"}} class="mx-auto">No Orders</div>}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Order