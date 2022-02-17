import React from 'react';
import '../../components/style.css';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';

const FoodCard = ({data}) => {
    const user=JSON.parse(localStorage.getItem("user"));
    const history=useHistory();
    const handleDelete=async()=>{
        const res=await axios.delete(`http://localhost:5000/server/item/${data._id}`);
        console.log(res.data);
        window.location.reload(false)
    }
    return <div class="mx-auto d-flex pt-3 pb-3" style={{ width: "100%", borderBottom: "1px solid gray" }}>
        <div class="ms-3 mt-3" style={{ width: "100%" }}>
            <div class="food-info">
                <h4>{data.name}</h4>
                {data.veg ? <span class="me-4" style={{ color: "green", fontWeight: "600" }}>Veg</span>: <span class="me-4" style={{ color: "red", fontWeight: "600" }}>Non Veg</span>}
            </div>
            <p style={{ marginTop: "-10px", color: "gray" }}>{data.description}</p>
            <div class="food-info me-4">
                <p style={{ marginTop: "-7px", fontSize: "20px", fontWeight: "600" }}>Rs {data.price}/-</p>
                <div>
                    <Link to="/admin/edititem" class="link">
                        <button className="btn btn-primary ps-3 pe-3" style={{backgroundColor:"white",border:"2px solid green",fontSize:"15px",fontWeight:"600",color:"green",marginTop:"-20px",marginLeft:"50px"}}>Edit</button>
                    </Link>
                    <button className="btn btn-primary ps-3 pe-3" style={{backgroundColor:"white",border:"2px solid red",fontSize:"15px",fontWeight:"600",color:"red",marginTop:"-20px",marginLeft:"10px"}} onClick={handleDelete}>Delete</button>

                </div>
            </div>
        </div>
        <div>
            <img class="ms-auto me-3 " src={data.image} style={{ width: "180px", height: "120px", borderRadius: "10px" }} />
        </div>
    </div>;
};

export default FoodCard;
