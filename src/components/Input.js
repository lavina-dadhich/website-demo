import React from "react";
import '../components/Form.css';
function Input({typeData,inputName,placeholderData,id,labelData}) {
  return (
    <>
      <label>{labelData}</label>
      <input type={typeData} id={id} name={inputName} placeholder={placeholderData}></input>
      {/* <label for="mail">Email:</label>
      <input type="email" id="mail" name="user_email"></input>
      <label for="password">Password:</label>
      <input type="password" id="password" name="user_password"></input> */}
    </>
  );
}

export default Input;
