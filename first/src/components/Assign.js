import React from 'react';
import {useState,useEffect} from 'react'

export default function Assign(){
    const [state,setState] =useState([])
     let list1=['chennai','Banglore','Hyderabad']
     let list2 =['US','Non US']
     const handleSelect1 =(e) =>
     {
         setState(list1)
     }
     const handleSelect2 =(e) =>
     {
         setState(list2)
     }
     let [skills, setSkills] = useState([
        { name: "html", value: false },
        { name: "angular", value: false },
        { name: "react", value: false }
    ])
    const handleCheckBoxStatus =(ind) =>{
        let skillsArr =[...skills];
        skillsArr[ind].value =!skillsArr[ind].value;
        setSkills(skillsArr)
    }


    return(
        <form className ="w-50 mx-auto mt-3">
        
          <input type ="text"
           name="associatename"
         placeholder="Associate Name"
          // onChange= {(e)=>setUsername(e.target.value)} 
          className ="form-control mb-3"/>

    
        <input type ="number"
          name="id"
          placeholder="Associate id"
        
         
          className ="form-control mb-3"/>


    <input type ="number"
          name="projectid"
          placeholder="Project ID"
          
           
          className ="form-control mb-3"/>
          {/* location onshore or offshore */}
    
    <div>
                <input type="radio" name="location" id="on" value="onshore" onChange={handleSelect1} />
                <label htmlFor="on">On-shore</label>

                <input type="radio" name="location" id="off" value="offshore" onChange={handleSelect2} />
                <label htmlFor="off">Off-shore</label>
                <br></br>

                <select name="name id=">
                    {
                        state.map((v,ind) =>{
                            return(
                               <option value={v}>{v}</option>
                            )
                        })
                    }
                </select>
                <div>
                    
                </div>


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