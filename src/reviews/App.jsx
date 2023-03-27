import React, { useState, useEffect } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import "../tours/index.css";
import MyData from "./MyData";
const Reviews = () => {
  const [curr, setCurr] = useState(MyData[0]);

  const nextReview = (item) => {
    // If the current state is the last item in the dummy data(MyData)
    if (item.id === MyData[MyData.length - 1].id) {
      setCurr(MyData[0]); //set the current state to the first item in the dummy data
    } else {
      // Find the index of the current state in the dummy data
      setCurr(MyData[MyData.indexOf(item) + 1]); // set the current state to the next element in the dummy data
    }
  };
  const prevReview = (item) => {
    //if the current state is the first item in the dummy array
    if (item.id === MyData[0].id) {
      //set the current state to the last item in the dummy data
      setCurr(MyData[MyData.length - 1]);
    } else {
      // find the index of the current state in the dummy data
      setCurr(MyData[MyData.indexOf(item) - 1]); // set the current state to the prev element in the dummy data
    }
  };
  const shuffle = () => {
    const getRandom = Math.floor(Math.random() * (MyData.length - 0) + 0);
    setCurr(MyData[getRandom]);
  };

  return (
    <>
      <h2>Our Reviews</h2>
      <div className="card-container">
        <section className="reviews">
          <img
            style={{ width: "70px" }}
            className="img-div"
            src={curr.img}
            alt="bill anderson"
          />
          <h4>{curr.name}</h4>
          <h4 style={{ color: "#965CFF" }}>{curr.role}</h4>
          <h4>{curr.portfolio}</h4>
          <section className="arrow-section">
            <span onClick={() => prevReview(curr)}>
              <MdArrowBackIosNew />
            </span>
            <span onClick={() => nextReview(curr)}>
              <MdOutlineArrowForwardIos />
            </span>
          </section>
          <button
            type="button"
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={() => shuffle()}
          >
            Random Reviews
          </button>
        </section>
      </div>
    </>
  );
};

export default Reviews;
