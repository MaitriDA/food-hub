import React from 'react'
import FoodCard from './FoodCard';
import './style.css';

const Cart = () => {
    return (
        <div class="container-fluid" style={{ position: 'absolute', marginTop: "80px" }}>
            <div className="d-flex">
                <div style={{width:"65%"}}>
                    <div class="mx-auto d-flex pt-3" style={{ width: "80%", borderBottom: "1px solid gray" }}>
                        <div class="ms-5 mt-3" style={{ width: "100%" }}>
                            <div class="food-info">
                                <h5>Veg. Pizza Extra Toppings</h5>
                                <span class="me-4" style={{ color: "green", fontWeight: "600" }}>Pure Veg</span>
                            </div>
                            <div>300 x 2</div>
                            <div class="food-info me-4">
                                <p style={{ marginTop: "-7px", fontSize: "18px", fontWeight: "600" }}>Rs 600/-</p>
                                <div class="d-flex quantity" style={{ color: "#d35100", marginTop: "-20px", fontWeight: "600" }}>
                                    <div style={{ fontSize: "25px", marginRight: "20px" }}>-</div>
                                    <div style={{ fontSize: "20px" }}>2</div>
                                    <div style={{ fontSize: "25px", marginLeft: "20px" }}>+</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img class="ms-auto me-3 " src="https://imageio.forbes.com/specials-images/imageserve/5f98cbc2af157b759b3a6272/Panera-pizza/960x0.jpg?fit=bounds&format=jpg&width=960" style={{ width: "150px", height: "90px", borderRadius: "10px" }} />
                        </div>
                    </div>

                    <div class="mx-auto d-flex pt-3" style={{ width: "80%", borderBottom: "1px solid gray" }}>
                        <div class="ms-5 mt-3" style={{ width: "100%" }}>
                            <div class="food-info">
                                <h5>Veg. Pizza Extra Toppings</h5>
                                <span class="me-4" style={{ color: "green", fontWeight: "600" }}>Pure Veg</span>
                            </div>
                            <div>300 x 2</div>
                            <div class="food-info me-4">
                                <p style={{ marginTop: "-7px", fontSize: "18px", fontWeight: "600" }}>Rs 600/-</p>
                                <div class="d-flex quantity" style={{ color: "#d35100", marginTop: "-20px", fontWeight: "600" }}>
                                    <div style={{ fontSize: "25px", marginRight: "20px" }}>-</div>
                                    <div style={{ fontSize: "20px" }}>2</div>
                                    <div style={{ fontSize: "25px", marginLeft: "20px" }}>+</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img class="ms-auto me-3 " src="https://imageio.forbes.com/specials-images/imageserve/5f98cbc2af157b759b3a6272/Panera-pizza/960x0.jpg?fit=bounds&format=jpg&width=960" style={{ width: "150px", height: "90px", borderRadius: "10px" }} />
                        </div>
                    </div>
                </div>
                <div class="ps-5 pe-5"style={{ width:"30%",backgroundColor: "rgb(241,241,241)" ,height:"fit-content" }}>
                    <h4 class="mx-auto mt-3" style={{width:"fit-content",color:"#d35100"}}>CART TOTAL</h4>
                    <div class="d-flex mt-3" style={{fontSize:"18px"}}>
                        <p >Sub - Total:</p>
                        <span class="ms-auto" style={{fontWeight:"600"}}>Rs 600/-</span>
                    </div>
                    <div class="d-flex" style={{fontSize:"18px",marginTop:"-20px"}}>
                        <p >Discount:</p>
                        <span class="ms-auto" style={{fontWeight:"600"}}>Rs 50/-</span>
                    </div>
                    <div class="d-flex" style={{fontSize:"18px",marginTop:"-20px"}}>
                        <p >Delivery:</p>
                        <span class="ms-auto" style={{fontWeight:"600"}}>Rs 35/-</span>
                    </div>
                    <div class="d-flex" style={{fontSize:"18px",marginTop:"-20px"}}>
                        <p >Tax:</p>
                        <span class="ms-auto" style={{fontWeight:"600"}}>Rs 35/-</span>
                    </div>
                    <hr style={{marginTop:"-5px"}}/>
                    <div class="d-flex" style={{fontSize:"20px",fontWeight:"600",color:"#d35100"}}>
                        <p >Total:</p>
                        <span class="ms-auto">Rs 35/-</span>
                    </div>
                    <button className="btn btn-primary mt-3" style={{width:"100%",backgroundColor:"black",border:"none"}}>Pay Online</button>
                    <button className="btn btn-primary mt-3 mb-5" style={{width:"100%",backgroundColor:"black",border:"none"}}>Cash On Delivery</button>
                </div>
            </div>
        </div>
    )
}

export default Cart