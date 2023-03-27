import React, { useState, useEffect } from "react";
import Data from "./Data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Item = (props) => {
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

  return (
    <Card style={{ width: "20rem" }} className="col-3">
      <Card.Img
        variant="top"
        src={props.img}
        alt="best of italy top 7 cities"
      />
      <span className="tour-price">{props.dollar}</span>
      <Card.Body>
        <Card.Title>{props.head}</Card.Title>
        <Card.Text>
          {readMore ? props.paragraph : props.paragraph.substring(0, 100)}
          <button className="btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? (
              <p className="p-1">show less...</p>
            ) : (
              <p className="p-2">read more...</p>
            )}
          </button>
        </Card.Text>
      </Card.Body>
      <Button
        variant="outline-success"
        type="button"
        className="btn"
        onClick={() => props.removeItem(props.id)}
      >
        Not Interested
      </Button>
      <br />
    </Card>
  );
};

export default Item;
