import React, { useState } from "react";
import "../tours/index.css";
import { AiOutlineMinus } from "react-icons/ai";
import MyData from "./MyData";
import SideItem from "./SubItem";
import { BsPlusLg } from "react-icons/bs";
const Accordion = () => {
  const [data, setData] = useState(MyData);
    return (
    <article className="accord-container">
      <h2 style={{ marginBottom: "3rem", textAlign: "center" }}>Questions</h2>
      <section className="accordion">
        {data.map((datas, index) => {
          const { id, quest, Answer } = datas;
          return (
          <SideItem name={quest} key={id} ans={Answer}/>
          );
        })}
      </section>
    </article>
  );
};

export default Accordion;
