import React, { useState } from "react";
import { useName } from "../contextApi";
import Rightbar from "./Rightbar";
import stateData from '../data.json'

const Middlebar = () => {
  const [band,setBand]= useState("true")
  const { getNameValue,setNameValue } = useName();


  const stateName = getNameValue();
  console.log(stateData);
  const detail = stateData.filter(r => r.name === stateName)
  console.log('detail: ', detail.description);
  const handleClick =()=>{
    
  }

  return (
    <div>
      {band ?<h1>{detail.description}</h1>:""}

      <button onClick={()=>handleClick()}></button>
      {stateName ? <Rightbar/>:""}
      
    </div>
  );
};

export default Middlebar;
