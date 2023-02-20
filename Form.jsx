import React, { useState } from "react";
import   "./Form.css";

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    fname:"",
    lname:"",   
    phone:"",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // console.log(e.target.value)

    setFormValues({ ...formValues, [name]: value });
    console.log(formValues)
  };                     
  return (
    <form  className="rk">
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
      />
      <br />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
      />  
      <br />                                    
      <label>Password</label>
      <input
        type="password"
        name="password"
        maxLength={"10"}
        value={formValues.password}
        onChange={handleChange}
      />
      <br />
      <label >fname</label>
      <input
        type="fname"
        name="fname"
        value={formValues.fname}
        onChange={handleChange}
      />
      <br />
      <label>lname</label>
      <input
        type="lname"
        name="lname"
        maxLength="10"
        value={formValues.lname}
        onChange={handleChange}
      />
      <br />
      <label>phone</label>
      <input
        type="number"
        name="number"
        value={formValues.number}
        onChange={handleChange}
      />
      <br />
      <button onClick={()=> setFormValues(formValues*0)} >reset</button>
  
      <button onClick={handleChange} >Click Me</button>
    </form>
  );
};
export default Form;
