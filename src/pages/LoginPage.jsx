import { Toaster } from "react-hot-toast";
import { toast } from 'react-hot-toast';
import '../App.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function LoginPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { userName, email, password } = user;
        console.log(user);

        console.log(user, typeof user);
        if (password.length < 2) {
            toast.error('Password must be at least 6 characters long');
            return;
        }


        try {
            const response = await axios.post(`http://localhost:3002/api/v1/user/login`, {
                userName: userName,
                email: email,
                password: password,
                // Add other key-value pairs as needed
            });

            if (response.data.statusCode === 400 || response.data.statusCode === 401) {
                toast.error(response.data.message);
            }
            if (response.data.statusCode === 200) {
                console.log('Response with 200:', response.data.message);
                return navigate('/home');
            }

        } catch (error) {
            if (error.response) {
                console.log('Server Error:', error.response.data, error.response);
                // Extract the error message from the response
                const errorMessage = error.response.data.message;
                toast.error(errorMessage);
            } else if (error.request) {
                // The request was made but no response was received
                console.log('Request Error:', error.request);
                toast.error("Somthing wents wrong try after some time");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error:', error.message);
                toast.error("Somthing wents wrong try after some time");
            }

        }
    }

    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="img-fluid" alt="Phone image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form>

                                <div className="form-outline mb-4">
                                    <input type="email" value={user.email} id="email" name="email" onChange={(e) => setUser({ ...user, email: e.target.value })} className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="email" >Email address</label>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="text" value={user.userName} id="username" name="username" onChange={(e) => setUser({ ...user, userName: e.target.value })} className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="username" >User name</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" value={user.password} id="password" name="password" onChange={(e) => setUser({ ...user, password: e.target.value })} className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="password"  >Password</label>
                                </div>

                                <div className="d-flex justify-content-around align-items-center mb-4">

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                        <label className="form-check-label" htmlFor="remember"> Remember me </label>
                                    </div>
                                    <a href="#!">Forgot password?</a>
                                </div>


                                <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg btn-block">login</button>



                                {/* <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#3b5998" }} href="#!"
                                    role="button">
                                    <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                                </a>
                                <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#55acee"}} href="#!"
                                    role="button">
                                    <i className="fab fa-twitter me-2"></i>Continue with Twitter</a> */}

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}