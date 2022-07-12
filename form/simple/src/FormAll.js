import { useState,useEffect } from "react";
//import "./App.css";

function FormAll() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
   // console.log(formValues)
  // console.log(e.target)
  // console.log(e.target.name,e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)
   
    //console.log(formValues)
  };
  const validate = (values)=>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;

  }
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

 
  

  return (
    <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="message success">Signed in successfully</div>
      ) : (
        ''
      )}
      

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
     
       
         
            <label>Username</label>
            <input
              type="text"
              name="username"
             
              value={formValues.username}
              onChange={handleChange}
            />
            <br></br>
            <p>{formErrors.username}</p>
            <br></br>
         
         
         
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <br></br>
            <p>{formErrors.email}</p>
            <br></br>
          
         
        
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
       <br></br>
       <p>{formErrors.password}</p>
       <br></br>

         
          <button className="submit">Submit</button>
        </form>
      </div>
  );
}

export default FormAll;