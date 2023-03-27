import React,{useState} from "react";

const Button=(props)=>{
  const [data, setData] = useState(Data);

  const removeItem = (id) => {
    setData((oldItem) => {
      let newItem = oldItem.filter((details) => details.id !== id);
     return newItem;
    });
   console.log(id);
 };
return(
  <>
  
  <Button
          variant="outline-success"
          type="button"
          className="btn"
          onClick={() => removeItem(id)}
        >
          Not Interested
        </Button>
  
  </>
)


}

export default Button;