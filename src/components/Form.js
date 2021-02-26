import React from "react";
import "../components/Form.css";
import Input from "../components/Input";
import Select from "../components/Select";
import MultiCheckBox from "../components/MultiCheckBox";

function Form(props) {
  const options = [
    { value: "blues", label: "Blues", key: 1 },
    { value: "rock", label: "Rock", key: 2 },
    { value: "jazz", label: "Jazz", key: 3 },
    { value: "orchestra", label: "Orchestra", key: 4 },
  ];
  console.log(props);
  return (
    <>
      <form>
        <fieldset>
          <legend>
            <span className="number">1</span>Your basic info
          </legend>
          <Input
            labelData="Name :"
            typeData="text"
            inputName="name"
            placeholderData="Enter Name"
            id="name"
          />
          <Input
            labelData="Email :"
            typeData="email"
            inputName="email"
            placeholderData="Enter Email"
            id="email"
          />
          <Input
            labelData="Password :"
            typeData="password"
            inputName="password"
            placeholderData="Enter Password"
            id="password"
          />
          <label>Age:</label>
          <input
            type="radio"
            id="under_13"
            value="under_13"
            name="user_age"
          ></input>
          <label htmlFor="under_13" className="light">
            Under 13
          </label>
          <br></br>
          <input
            type="radio"
            id="over_13"
            value="over_13"
            name="user_age"
          ></input>
          <label htmlFor="over_13" className="light">
            13 or older
          </label>
        </fieldset>
        <fieldset>
          <legend>
            <span className="number">2</span>Your profile
          </legend>
          <label>Biography:</label>
          <textarea id="bio" name="user_bio"></textarea>
        </fieldset>
        <fieldset>
          <Select labelSelect="Job Role:">
              {options}
          </Select>
          <label>Interests:</label>
          <MultiCheckBox checkType="checkbox" id="1" checkValue="interest_design" checkName="user_interest" checkBoxName="Design"/>
          <MultiCheckBox checkType="checkbox" id="2" checkValue="interest_business" checkName="user_interest"  checkBoxName="Business"/>
          <MultiCheckBox checkType="checkbox" id="3" checkValue="interest_design" checkName="user_interest"  checkBoxName="Design"/>
          <br></br>
          <br></br>
          <Input
            labelData="Upload File/Photo :"
            typeData="file"
            id="file"
          />
          <br></br>
          <br></br>
          <button type="submit">Sign Up</button>
        </fieldset>
      </form>
    </>
  );
}

export default Form;
