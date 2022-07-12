import React, { useState } from "react";
//refer geeksforgeek
  
function CheckBox() {
  const [userinfo, setUserInfo] = useState({
    languages: []
   
  });
  
  
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;
      
    console.log(`${value} is ${checked}`);
   console.log(`${e.target.value} of ${e.target.checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value]
     
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value)
      });
    }
  };
  //console.log(userinfo.languages)
  const know=()=>{
      if(userinfo.languages.length===0) return '';
      else if(userinfo.languages.length>0 && userinfo.languages.length<3) return 'bad'
      else return 'good';
      
  }
  console.log(know())
    
  return (
    <>
      <div className="container-fluid top ">
        <div className="container mt-5  pb-5 pt-5">
          <h3 className="form-head-contact-h3 ">
            Your programming expertise lies in what languages?{" "}
          </h3>
  
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="Javascript"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      Javascript
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="Python"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      Python
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="Java"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      Java
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="PHP"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      PHP
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="C#"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      C#
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="C++"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      C++
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="C"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      C
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="Typescript"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      Typescript
                  </label>
                </div>
              </div>
            </div>
  
          </form>
          <h1>checked is {know()}</h1>
        </div>
      </div>
     
    </>
  );
}
  
export default CheckBox;