import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {
    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let emailInputRef=useRef();
    let ageInputRef=useRef();
    let passwordInputRef=useRef();
    let profilePicInputRef=useRef();
    let[profilePicPath,setProfilePicPath]=useState("./images/no-image.jpg");

    let sendSignupDataToServerThruJSON=async()=>{
        let dataToSend={
            firstName:firstNameInputRef.current.value,
            lastName:lastNameInputRef.current.value,
            age:ageInputRef.current.value,
            email:emailInputRef.current.value,
            password:passwordInputRef.current.value,
            profilePic:profilePicInputRef.current.value,
        };
        let dataToSendInJSON=JSON.stringify(dataToSend);

        let myHeader=new Headers();
        myHeader.append("content-type","application/json")
        let reqOptions={
            method:"POST",
            body:dataToSendInJSON,
            headers:myHeader,};

            let JSONData=await fetch("http://localhost:4567/signup",reqOptions);
            let JSOData= await JSONData.json();
            console.log(JSOData);
    };
    let sendSignupDataToServerThruURLE=async()=>{
        let dataToSend=new URLSearchParams();
        dataToSend.append("firstName",firstNameInputRef.current.value)
        dataToSend.append("lastName",lastNameInputRef.current.value)
        dataToSend.append("age",ageInputRef.current.value)
        dataToSend.append("email",emailInputRef.current.value)
        dataToSend.append("password",passwordInputRef.current.value)
        dataToSend.append("profilePic",profilePicInputRef.current.value)

        let myHeader=new Headers();
        myHeader.append("content-type","application/x-www-form-urlencoded")

        let reqOption={
            method:"POST",
            body:dataToSend,
            headers:myHeader,
        };

        let JSONData=await fetch("http://localhost:4567/signup",reqOption);
        let JSOData=await JSONData.json();
        console.log(JSOData)
    };

    let sendSignupDataToServerThruFD=async()=>{
        let dataToSend=new FormData();
        dataToSend.append("firstName",firstNameInputRef.current.value)
        dataToSend.append("lastName",lastNameInputRef.current.value)
        dataToSend.append("age",ageInputRef.current.value)
        dataToSend.append("email",emailInputRef.current.value)
        dataToSend.append("password",passwordInputRef.current.value)

        for(let i=0; i<profilePicInputRef.current.files.length;i++){
        dataToSend.append("profilePic",profilePicInputRef.current.files[i])
        }
       

        let reqOption={
            method:"POST",
            body:dataToSend,

        };

        let JSONData=await fetch("http://localhost:4567/signup",reqOption);
        let JSOData=await JSONData.json();

    if(JSOData.status=="success"){
    alert(JSOData.msg)
    }else{
        alert(JSOData.msg)
    }

        console.log(JSOData)
    };

  return (
    <div className='App'>
        <form>
            <h2>Signup</h2>
            <div>
                <label>firstName</label>
                <input ref={firstNameInputRef}></input>
            </div>
            <div>
                <label>lastName</label>
                <input ref={lastNameInputRef}></input>
            </div>
            <div>
                <label>age</label>
                <input ref={ageInputRef}></input>
            </div>
            <div>
                <label>email</label>
                <input ref={emailInputRef}></input>
            </div>
            <div>
                <label>password</label>
                <input ref={passwordInputRef}></input>
            </div>
            <div>
                <label>profilePic</label>
                <input ref={profilePicInputRef} type="file" onChange={(eventObj)=>{
                  let selectedImagePath=URL.createObjectURL(eventObj.target.files[0]);
                  setProfilePicPath( selectedImagePath)
                }}></input>
            </div>
            <div>
                <img className='profilePic' src={profilePicPath}></img>
            </div>

          <div>
          <button type="button" onClick={()=>{
               sendSignupDataToServerThruFD();
               }}>Signup(FormData)</button>
          </div>

        </form>
        <div>
            <Link to="/">Login</Link>
        </div>
    </div>
  )
}

export default Signup