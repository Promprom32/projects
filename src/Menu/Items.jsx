import React from "react";

const Items = ({ item }) => {
  return (
    <>
      <article className="menu-item">
        {item.map((val) => {
          return (
            <div key={val.id}>
              <img src={val.img} alt={val.type} className="img" />
              <div className="item-info">
                <header>
                  <h5>{val.type}</h5>
                  <span className="item-price">${val.price}</span>
                </header>
                <p className="item-text">{val.portfolio}</p>
              </div>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Items;
