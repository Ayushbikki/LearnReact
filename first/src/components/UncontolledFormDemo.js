import {useRef} from 'react';


//username



function UncontrolledFormDemo(){ 

    let refUsername =useRef(null);
let refDob =useRef(null);
let refAge =useRef(null);
let refEmail =useRef(null);
let refTechnology= useRef(null)
let refGender = useRef(null);

const handleFormSubmit =(e) =>{
    e.preventDefault();
    let username =refUsername.current.value;
    let dob = refDob.current.value;
    let age= refAge.current.value;
    let technology =refTechnology.current.value;
    let gender = refGender.current.value;
    let userObj ={username,dob,age,technology,gender}
    console.log(userObj);
}

    return(
        <form className="w-75 mx-auto mt-4" onSubmit={handleFormSubmit}>

            <label>UserName</label>
            <input type="text" name="username" className="form-control" ref={refUsername}  />

            <label>Age</label>
            <input type="number" name="age" className="form-control" ref={refAge}  />

            <label>Email</label>
            <input type="email" name="email" className="form-control" ref={refEmail}  />

            <label>Date of birth</label>
            <input type="date" name="dob" className="form-control" ref={refDob}></input>

            <label>Technology</label>
                <select name="technology" className="form-select" ref={refTechnology}>
            <option value="react">React</option>
            <option value="machine Learning">Machine Learning</option>
            <option value="aws">Aws</option>
            </select>
            <label>Select Gender</label>

            <div className="form-check">
            <input type="radio" name="gender" id="m" className="form-check-control" ref={refGender}>  </input>
            <label htmlFor="m" className="form-check-label"  >Male</label></div>

            <div className="form-check">
            <input type="radio" name="gender" id="f" className="form-check-control mb-3" ref={refGender}></input> 
            <label htmlFor="f" className="form-check-label"   >Female</label>
            </div>

            <button type="submit" className="btn btn-primary mt-3">Submit</button>



        </form>
    )

}


export default UncontrolledFormDemo;