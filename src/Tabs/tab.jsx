import React, { useState } from "react";
import MyData from "./MyData";
const Tab = (props) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <article className="jobs-info">

        <div>
          <h3>{props.jobtitle}</h3>
          <span className="jobstitle">{props.Name}</span>
          <p className="jobdate">{props.Time}</p>
          <div className="job-desc">
            <div>{props.jobicon}</div>
            <p>{props.jobDesc1}</p>
          </div>
          <div className="job-desc">
            <div>{props.jobicon}</div>
            <p>{props.jobDesc2}</p>
          </div>
          <div className="job-desc">
            <div>{props.jobicon}</div>
            <p>{props.jobDesc3}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Tab;
