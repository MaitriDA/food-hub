import React from 'react';
import FoodCard from './FoodCard';

const Restraunt = () => {
  return <div class="container-fluid" style={{ position: 'absolute', marginTop: "80px" }}>
    <div class="container-fluid p-3" style={{ height: "fit-content", backgroundColor: "rgb(241,241,241)" }}>
      <div style={{ width: "100%" }}>
        <div class="mx-auto d-flex" style={{ width: "fit-content" }}>
          <div class="row">
            <div class="col">
              <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/10/domino-s-pizza-1571307449.jpg" style={{ height: "175px", width: "280px" }} />
            </div>
            <div className="col">
              <div className="ps-3" style={{ width: "400px" }}>
                <h3>Restraunt Name</h3>
                <p style={{ marginTop: "-10px" }}>Address</p>
                <p style={{ marginTop: "-5px", fontWeight: "500" }}>South Indian</p>
                <div class="d-flex" style={{ fontWeight: "600" }}>
                  <div >
                    <i class="fa fa-star" style={{ alignItems: "center" }}></i>
                    <span class="ms-2">3.9</span>
                  </div>
                  <div >
                    <span class="ms-5" style={{ color: "green" }}>Pure Veg</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div style={{ width: "250px" }}>
                <div class="mt-4 " style={{ height: "70%", borderBottom: "1px solid gray", borderTop: "1px solid gray" }}>
                  <div class="text-center " style={{ color: "gray", fontSize: "20px", fontWeight: "600" }}>Offers</div>
                  <ul>
                    <li>dasf</li>
                    <li>dsaf</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row pt-3">
      <div class="mx-auto" style={{ width: "60%" }}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  </div>;
};

export default Restraunt;
