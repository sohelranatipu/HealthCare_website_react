import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut,sendEmailVerification,updateProfile  } from "firebase/auth";
 
// import initializeAuthentication from './Firebase/firebase.initialize';
import {useState} from 'react' ;
import { Link } from "react-router-dom";
import initializeAuth from "../Firebase/firebase.init";
 

initializeAuth();

// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

const auth = getAuth();

const Register = () => {

    const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const [ischecked,setIschecked] = useState(false);

  const handleSignIn = e =>{
    // console.log(email,password);
    e.preventDefault();

    if(password.length < 6){
      setError('Password should be at least 6 characters');
      return ;
    }
    if(!/(?=.*[A-Z])/.test(password)){
      setError('Password must contain at least 1 uppercase alphabetical character ');
      return ;
    }

    if(ischecked){
      loginProcess(email,password);
    }
    else{
      registerNewUser(email,password);
    }
   
    
  }

  // if register new user
  const registerNewUser = (email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      setError('Your Registration Succcesful');
      emailVerify();
      setUserName();
    })
    .catch(error=>{
      setError(error.message);
    })
  }

  // if already Login 
  const loginProcess = (email,password)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(result=> {
      const user = result.user;
      console.log(user);
      setError('Your Login Successful');
    })
  }

  // email verification 
  const emailVerify = () => {
    sendEmailVerification(auth.currentUser)
    .then(result =>{
      console.log(result);
    })
  }

  const handleChacked = e => {
    setIschecked(e.target.checked);
  }

  const handleName = e =>{
    setName(e.target.value);
  }

  const setUserName = ()=>{
    updateProfile(auth.currentUser,{displayName:name})
    .then(result =>{
      
    })
  }

  const handleInputEmail = e =>{
    setEmail(e.target.value);
  }
  
  const handlePassword = e =>{
    setPassword(e.target.value);
  }



    return (

        <div style={{margin:'0 400px'}} className="">

    <h3 className="text-primary" style={{textAlign:'center',marginBottom:'30px'}}>Register:Create New Account  </h3>

      <form onSubmit={handleSignIn}>
        {(!ischecked) &&  <div className="mb-3">
           
          <input onBlur={handleName} type="text" placeholder="Enter Your Full-Name" className="form-control" id="exampleInputPassword1" required/>
        </div>}
     
        <div className="mb-3">
          
          <input onBlur={handleInputEmail} type="email" placeholder="Enter Your Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          
          <input onBlur={handlePassword} type="password" placeholder="Enter Your Password" className="form-control" id="exampleInputPassword1" required/>
        </div>
        
        {/* <div className="mb-3 form-check">
          <input onChange={handleChacked} type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Already Register?</label>
        </div> */}
        <div className="mb-3 text-danger">
            <h4>{error}</h4>
        </div>
        <button type="submit" className="btn btn-primary">{(ischecked)?'Login':'Register'}</button>
        <p>Already Register ? <Link to="/login">Login</Link> </p>
        
     
      </form>














      
    </div>


        // <div>
        //     <h2 className="mt-3">Register: Create Account</h2>
        //    <div className="myForm">
                
        //         <form onSubmit=""  action="">
        //             <input type="text" placeholder="Enter Your Fullname" name="" id="" />
        //             <br/>
        //             <input type="email" placeholder="Enter Your Email" name="" id="" />
        //             <br/>
        //             <input type="password" placeholder="Enter Your password" name="" id="" />
        //             <br/>
        //             <input className="btn btn-primary" type="submit" value="Sign in" />
        //         </form>
        //         <p>Already Register ? <Link to="/login">Login</Link> </p>
        //         <div>-------------Or------------</div>
        //         <br/>
        //         <button   className="btn btn-warning">Google SignIn</button>
                
        //     </div>
        // </div>
    );
};

export default Register;