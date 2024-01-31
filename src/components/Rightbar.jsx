import React from "react";
import { useName } from "../contextApi";

const Rightbar = () => {
    const { getNameValue } = useName();
    const stateName = getNameValue();

  return (
    <form >
      <label>
        <input type="radio" name="location" value="Delhi"   checked={stateName === 'Delhi'}/> Delhi
      </label>
      <label>
        <input type="radio" name="location" value="Noida"  checked={stateName === 'Noida'} /> Noida
      </label>
      <label>
        <input type="radio" name="location" value="Gurugram"   checked={stateName === 'Gurugram'}/> Gurugram
      </label>
    </form>
  );
};

export default Rightbar;
