import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2 className="mt-3">Register: Create Account</h2>
           <div className="myForm">
                
                <form onSubmit=""  action="">
                    <input type="text" placeholder="Enter Your Fullname" name="" id="" />
                    <br/>
                    <input type="email" placeholder="Enter Your Email" name="" id="" />
                    <br/>
                    <input type="password" placeholder="Enter Your password" name="" id="" />
                    <br/>
                    <input className="btn btn-primary" type="submit" value="Sign in" />
                </form>
                <p>Already Register ? <Link to="/login">Login</Link> </p>
                <div>-------------Or------------</div>
                <br/>
                <button   className="btn btn-warning">Google SignIn</button>
                
            </div>
        </div>
    );
};

export default Register;