import React, { useState } from "react";
import "../tours/index.css";
import MyData from "./MyData";
import Tab from "./tab";
const Tabs = () => {
  const [selected, setSelected] = useState(MyData[0]);

  const showItem = (id) => {
    let found = MyData.filter((user) => user.id === id);
    setSelected(found[0]);
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Tabs</h2>
      <section className="tabs">
        <div className="btns-container">
          {MyData.map((user, index) => {
            const { Name, id } = user;
            return (
              <div key={index}>
                <button
                  className={selected.id === id ? "jobs--active" : "jobs-btn" }

                  
                  onClick={() => showItem(id)}
                >
                  {Name}
                </button>
              </div>
            );
          })}
        </div>
        <Tab {...selected} />
        {/* {next.map((user, index) => {
          return <Tab key={index} {...user} />;
        })} */}
      </section>
    </>
  );
};

export default Tabs;
