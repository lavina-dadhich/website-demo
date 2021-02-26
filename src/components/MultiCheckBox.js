import React from "react";

export default function MultiCheckBox({checkBoxName,checkName,checkValue,id,checkType}) {
  return (
    <div>
      <input
        type={checkType}
        id={id}
        value={checkValue}
        name={checkName}
      ></input>
      <label className="light" htmlFor="development">
        {checkBoxName}
      </label>
    </div>
  );
}
