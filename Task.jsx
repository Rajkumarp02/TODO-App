import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {  signOut } from "firebase/auth";
import { auth } from '../Configure/Firebase';

export default function Task() {

const navigate = useNavigate();
 function handleLogout () {           
    signOut(auth).then(() => {
   
        navigate("");
        console.log("Signed out successfully")
    }).catch((error) => {
  
    })
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const uid = user.uid;
        
          console.log("uid", uid)
        } else {
          
          console.log("user is logged out")
        }
      });
     
}, []) 
  return (
    <>
  
  
 
       
      <nav>
                
 
                <div>
        			<button onClick={handleLogout}>
                   
                    </button>
        		</div>
            </nav>
        </>
    )
}

    
    