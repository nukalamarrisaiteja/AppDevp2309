import React from 'react'
import TopNavigation from './TopNavigation'
import { useSelector } from 'react-redux'

function Home() {

  let storeObj=useSelector((store)=>{
    return store;
  });
  console.log("inside sai home");
  console.log(storeObj);

  return (
    <div>
        <TopNavigation/>
        <h1>Home</h1>

        <h2>welcom {storeObj.loginDetails.firstName} {storeObj.loginDetails.lastName}</h2>

        <img src={`/${storeObj.loginDetails.profilePic}`}></img>
    </div>
  )
}

export default Home