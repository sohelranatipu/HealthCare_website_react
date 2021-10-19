import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css' ;
import useAuth from '../../Hooks/useAuth' ;

const Login = () => {
    const {user,signInUsingGoogle} = useAuth();
    return (
        <>
            <h2 className="mt-5">Login Your Account</h2>
            <div className="myForm">
                
                <form onSubmit=""  action="">
                    <input type="email" placeholder="Enter Your Email" name="" id="" />
                    <br/>
                    <input type="password" placeholder="Enter Your password" name="" id="" />
                    <br/>
                    <input className="btn btn-primary" type="submit" value="Sign in" />
                </form>
                <p>New To Website? <Link to="/register">Create New Account</Link> </p>
                <div>-------------Or------------</div>
                <br/>
                <button onClick={signInUsingGoogle}  className="btn btn-warning">Google SignIn</button>
                
            </div>
        
        </>
    );
};

export default Login;