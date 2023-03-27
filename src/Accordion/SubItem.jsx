import React,{useState} from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";

const SideItem=(props)=>{
  const [isActive, setIsActive] = useState(false);
return(
  <div
  className="question"
  
  onClick={() => setIsActive(!isActive)}
>
  <header>
    <h2
      style={{
        fontSize: "20px",
        display: "flex",
        marginTop: "0.75rem",
        marginLeft: "4rem",
      }}
    >
      {props.name}
    </h2>
    <div>
      {isActive ? (
        <button className="question-btn">
          <AiOutlineMinus />
        </button>
      ) : (
        <button className="question-btn">
          <BsPlusLg />
        </button>
      )}
    </div>
  </header>
  {isActive && <div className="accordion-content">{props.ans}</div>}
</div>
)
}

export default SideItem;