import React, { useState, useEffect } from "react";
import "../tours/index.css";
import Items from "./Items";
import MyData from "./MyData";
import Buttons from "./Buttons";
const Menu = () => {
  const [item, setItem] = useState(MyData);
  const menuItems = [...new Set(MyData.map((val) => val.category))];
  const filterItem = (curcat) => {
    const newItem = MyData.filter((newVal) => {
      return newVal.category === curcat; 
        	// comparing category for displaying data
    });
    setItem(newItem);
  };
  return (
    <section className="menu">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="title-underline"></div>
      </div>
      <Buttons filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}/>
      <div className="section-center">
       <Items item={item}/>
      </div>
    </section>
  );
};

export default Menu;
