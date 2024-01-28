import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    let dispatch=useDispatch();

    let navigate=useNavigate();
  
    let emailInputRef=useRef();

    let passwordInputRef=useRef();
    
   useEffect(()=>{
   //emailInputRef.current.value=localStorage.getItem("email");
  // passwordInputRef.current.value=localStorage.getItem("password");

  if(localStorage.getItem("token")){
    
    validateLoginonLoad();
  }
   },[]);

   let validateLoginonLoad=async()=>{
    let dataToSend=new FormData();
 
    dataToSend.append("token",localStorage.getItem("token"));
   

   let reqOption={
      method:"POST",
      body:dataToSend,  };

  let JSONData=await fetch("/validateToken",reqOption);
  let JSOData=await JSONData.json();
  console.log(JSOData)

if(JSOData.status=="failure"){
  alert(JSOData.msg);
}else{
   

 dispatch({type:"login",data:JSOData.data})
   navigate("/home")
}

;
};


    let sendLoginDataToServerThtuFD=async()=>{
          let dataToSend=new FormData();

          dataToSend.append("email",emailInputRef.current.value);
          dataToSend.append("password",passwordInputRef.current.value);
       

        let reqOption={
            method:"POST",
            body:dataToSend,  };

        let JSONData=await fetch("/login",reqOption);
        let JSOData=await JSONData.json();
        console.log(JSOData)

     if(JSOData.status=="failure"){
        alert(JSOData.msg);
     }else{
        // localStorage.setItem("email",emailInputRef.current.value);
        // localStorage.setItem("password",passwordInputRef.current.value);
     localStorage.setItem("token",JSOData.data.token)
       dispatch({type:"login",data:JSOData.data})
         navigate("/home")
     }

      ;
    };

  return (
    <div className='App'>
        <form>
            <h2>Login</h2>
            
            <div>
                <label>email</label>
                <input ref={emailInputRef}></input>
            </div>
            <div>
                <label>password</label>
                <input ref={passwordInputRef}></input>
            </div>
           
          
          <div>
            <button type="button" onClick={()=>{
                sendLoginDataToServerThtuFD();
            }}>Login</button>
          </div>

        </form>
        <div>
            <Link to="/signup">Signup</Link>
        </div>
    </div>
  )
}

export default Login