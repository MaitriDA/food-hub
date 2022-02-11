import React from 'react';
import './style.css';

const FoodCard = () => {
    return <div class="mx-auto d-flex pt-3 pb-3" style={{ width: "60%", borderBottom: "1px solid gray" }}>
        <div class="ms-3 mt-3" style={{ width: "100%" }}>
            <div class="food-info">
                <h4>Veg. Pizza Extra Toppings</h4>
                <span class="me-4" style={{ color: "green", fontWeight: "600" }}>Pure Veg</span>
            </div>
            <p style={{ marginTop: "-10px", color: "gray" }}>Decription dsfa ads da d</p>
            <div class="food-info me-4">
                <p style={{ marginTop: "-7px", fontSize: "20px", fontWeight: "600" }}>Rs 300/-</p>
                <button className="btn btn-primary ps-3 pe-3" style={{backgroundColor:"white",border:"2px solid #d35100",fontSize:"15px",fontWeight:"600",color:"#d35100",marginTop:"-20px",marginLeft:"50px"}}>ADD</button>
            </div>
        </div>
        <div>
            <img class="ms-auto me-3 " src="https://imageio.forbes.com/specials-images/imageserve/5f98cbc2af157b759b3a6272/Panera-pizza/960x0.jpg?fit=bounds&format=jpg&width=960" style={{ width: "180px", height: "120px", borderRadius: "10px" }} />
            
        </div>
    </div>;
};

export default FoodCard;
