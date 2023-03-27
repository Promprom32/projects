import React, { useState } from "react";
import MyData from "./MyData";
const Buttons = ({filterItem,setItem,menuItems }) => {
    return (
    <>
      <div className="btn-container">
        <button
          className="btn1"
          onClick={()=>setItem(MyData)}
        >
          All
        </button>
      {menuItems.map((val, id) => {
          return (
            <button
              className="btn1"
              key={id} onClick={()=>filterItem(val)}
            >
              {val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;
