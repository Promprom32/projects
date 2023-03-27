import React, { useState, useEffect } from "react";
import "../tours/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Data from "./Data";
import Item from "./Item";
const Tours = () => {
  const [data, setData] = useState(Data);
  const [user, setUser] = useState("Default User");
  const [readMore, setReadMore] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [iserror, setIsError] = useState(false);

  const fetchData = () => {
    // setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isloading) {
    return <h2>Loading....</h2>;
  }

  if (iserror) {
    return <h2>Error Here</h2>;
  }

  //remove item
  const removeItem = (id) => {
    setData((oldItem) => {
      let newItem = oldItem.filter((details) => details.id !== id);
      return newItem;
    });
    console.log(id);
  };

  const refresh = () => {
    setData([...Data]);
  };

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Our Tours</h1>
          <div className="title-underline"></div>
        </div>
        <div className="cards d-flex col-12 flex-wrap">
          {data.length === 0 ? (
            <div className="container">
              <Button
                variant="outline-success"
                type="button"
                className="btn"
                onClick={refresh}
              >
                Refresh Me
              </Button>
              <h2>No More Left</h2>
            </div>
          ) : (
            data.map((details, index) => {
              const { id, img, head, paragraph, dollar } = details;
              return (
                <Item
                  key={id}
                  id={id}
                  img={img}
                  head={head}
                  paragraph={paragraph}
                  dollar={dollar}
                  removeItem={removeItem}
                />
              );
            })
          )}

        </div>
      </div>
    </>
  );
};

export default Tours;
