import { useState } from "react";

function Employee(){

    let [username,setUsername] = useState('')
   // console.log('username is',username);
    let [uage,setAge] = useState('')
    let[city,setCity] = useState('')
    let[mobile,setMobile] = useState('')
    let[state,setState] =useState('chennai')
    let[gender,setGender] =useState('')

//submit function
const handleFormSubmit= (e) =>{
    e.preventDefault();
    let age= parseInt(uage)
    //key and value can be  defined one ata time
    let userObj ={username,age,city,mobile,state,gender}
   console.log(userObj)

 /*fetch("http://localhost:3000/users",
{
    method: "POST",
    headers : {
        'Content-type' : 'application/json',
    },
    body: JSON.stringify(userObj)
})
.then(res =>{
    alert("New user")
})
.catch(err => {
    console.log("err is ",err)
})*/
}


    return(
        <form className ="w-50 mx-auto mt-3" onSubmit={handleFormSubmit}>
            <label>Username</label>
              <input type ="text"
               name="username"
              value={username}
               onChange= {(e)=>setUsername(e.target.value)} 
              className ="form-control mb-3"/>

        <label>Age</label>
            <input type ="number"
              name="Age"
              value={uage}
               onChange= {(e)=>setAge(e.target.value)} 
              className ="form-control mb-3"/>

    <label>City</label>
        <input type ="text"
              name="City"
              value={city}
               onChange= {(e)=>setCity(e.target.value)} 
              className ="form-control mb-3"/>
              
    
              <label>Mobile-no</label>
        <input type ="number"
              name="Mobile_no"
              value={mobile}
               onChange= {(e)=>setMobile(e.target.value)} 
              className ="form-control mb-3"/>

        <label>State</label>
        <select name="state" onChange={(e)=>setState(e.target.value)} value={state} className="form-select">
            <option value="karnatka">Karnatka</option>
            <option value="chennai">Chennai</option>
            <option value="delhi">Delhi</option>

        </select>
        <label>Select Gender</label>
        <div className="form-check">
        <input type="radio" name="gender" id="m" className="form-check-control" value="male"  onChange={(e)=>setGender(e.target.value)} />
            <label htmlFor="m" className="form-check-label">Male</label></div>

        <div className="form-check">
            <input type="radio" name="gender" id="f" className="form-check-control mb-3" value="female"  onChange={(e)=>setGender(e.target.value)} />
            <label htmlFor="f" className="form-check-label">Female</label>
            </div>
        {/* <label><b>Write feeback</b></label> */}
        {/* <div className="form-outline">
         <textarea className="form-control" id="textAreaExample1" rows="4"></textarea>
            <label className="form-label" for="textAreaExample">Message</label>
</div> */}
               
           
      
        
        <button type="submit" className="btn btn-primary mt-3">submit</button>
        </form>
    )
          
        
}

export default Employee;