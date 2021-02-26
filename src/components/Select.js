import React from "react";
import "../components/Form.css";

function Select({labelSelect,children}) {
//     console.log("optionData",children.map((i) => {
//       return <option value={i.value}/>
//   }))
console.log(children)
  return (
    <>
      <label>{labelSelect}</label>
      <select id="job" name="user_job">
            {children.map((i,key)=>{
                return <option value={i.value} key={key}>{i.value}</option>
            })}
      </select>
    </>
  );
}

export default Select;
