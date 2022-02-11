import React from 'react';
import { Link } from 'react-router-dom';

const UserRegister = () => {
    return (
        <div class="vh-100" style={{ backgroundColor: "rgb(241, 241, 241)" }}>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong" style={{ borderRadius: "10px" }}>
                            <div class="card-body p-5 text-center">
                                <h3 class="mb-5">REGISTER</h3>
                                <div class="form-outline mb-4">
                                    <input type="text" class="form-control form-control-lg" placeholder='Name' autoComplete='off'/>
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="email" class="form-control form-control-lg" placeholder='Email' autoComplete='off' />
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="password" class="form-control form-control-lg" placeholder='Password' />
                                </div>
                                <button class="btn btn-primary btn-lg btn-block" style={{ width: "100%", backgroundColor: "#d35100", border: "none" }} type="submit">Register</button>
                                <Link to="/login">
                                <button class="/registerbtn btn-primary btn-lg btn-block mt-3" style={{ width: "100%", backgroundColor: "black", border: "none" }} type="submit">Login Here</button>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserRegister