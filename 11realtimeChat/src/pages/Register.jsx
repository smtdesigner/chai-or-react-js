import Add from '../assets/addAvatar.png'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

function Register() {

  const [err, setErr] = useState(false)

  const handleSubmit = async (e)=> {
    e.preventDefault();
    const displayName =  e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

try {
 const ref = await createUserWithEmailAndPassword(auth, email, password);
const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(
  (error) => {
    setErr(true)
  },  
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL
        
      });
      // await setDoc(db, "users", res.user.uid),{
        //   uid: res.user.uid,
        //   displayName,
        //   email,
        //   photoURL: downloadURL,
        // }
      });
    }
    );
    console.log(storageRef);

    
  
  } catch (err) {
  setErr(true)
  
}

}



return (
  
  <>
    <div className="formContainer">
        <div className="formWrapper"> 
            <span className='logo'>Smt Chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
                {/* {err && <span>Somthing went wrong!</span>} */}
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
    </>
    
  )
}

export default Register