import { useState,useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import initializeAuth from '../Components/Firebase/firebase.init'

initializeAuth();

const useFirebase =()=>{
    const [user,setUser] = useState({});

    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();


     

    const signInUsingGoogle =()=>{
        signInWithPopup(auth, GoogleProvider)
        .then(result =>{
            console.log(result.user);
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } 
        });

    },[])

    const logOut = ()=>{
        signOut(auth)
        .then(() => {
             setUser({});
          })
    }


    return {
        signInUsingGoogle,
        user,
        logOut
    }

}

export default useFirebase ;