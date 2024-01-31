import React, { useState } from "react";
import { NameProvider, useName } from '../contextApi';

const Leftbar = () => {
  const {setNameValue,getNameValue} = useName();
  // console.log(getNameValue())
  return (
    <div>
      <form onClick={(e) => setNameValue(e.target.value)}>
        <label>
          <input type="radio" name="location" value="Delhi" /> Delhi
        </label>
        <label>
          <input type="radio" name="location" value="Noida" /> Noida
        </label>
        <label>
          <input type="radio" name="location" value="Gurugram" /> Gurugram
        </label>
      </form>
    </div>
  );
};

export default Leftbar;
