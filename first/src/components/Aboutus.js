import {useState,useEffect} from 'react';

function Aboutus()
{
    
    let [formState,setFormState]=useState({
        associateName:"",
        associateId: "",
        projectId:"",
        location:{Offshore:['Chennai','Bangalore','Hyderabad','Pune','Kochi'],
        Onshore:['Us','Non-Us']},
        skill:[{name:"HTML5,CSS3,JS",value:false},
        {name:"Angular 8",value:false},
        {name:"Express JS",value:false},
        {name:"SAAS",value:false},
        {name:"React JS",value:false},
        {name:"Node JS",value:false},
        {name:"ES5,ES6,ES7...",value:false},
        {name:"Veu JS",value:false},
        {name:"Mongo DB",value:false},
        {name:"Bootstrap 4",value:false},
        {name:"TypeScript",value:false}
    ],
        file:"",
        comments:""
      })

      let[state,setState]=useState([])       
    const[errors,setErrors]=useState('')
      const handleChange1=(e)=>{
       setState(formState.location.Offshore)
        //console.log(state)
    }
    const handleChange2=(e)=>{
        setState(formState.location.Onshore)
       // console.log(state)
    }
    const handleCheckbox=(ind)=>{
        let skillArr={...formState}
        skillArr.skill[ind].value=!skillArr.skill[ind].value;
        setFormState(skillArr)
       
        let count=0;
        for(let i=0;i<formState.skill.length;i++)
        {
            if(formState.skill[i].value===true)
            {
                count=count+1;
               
            }
        }
        if(count<5 )
        {
            setErrors({...errors,skillErr:"Please select atleast 5 skills"})
        }
        else{
            setErrors({...errors,skillErr:''})
        }
    }
 const handleSubmit=(e)=>{
           e.preventDefault();
          // console.log(formState);
 }
 //location
 const handleLocationBlur=(e)=>{
    setErrors({...errors,locationRequiredErr:"Please select the location"})
}
//profile
const handleProfileBlur=(e)=>{
    setErrors({...errors,profileRequiredErr:"Please upload Profile Picture"})
}

   //commnets
   const handleCommentBlur=(e)=>{
    setErrors({...errors,commentRequiredErr:"Please Enter Comments "})
   }
   useEffect(()=>{
       setErrors({...errors,commentRequiredErr:''})
   },[formState.comments])

//associate name
const handleNameChange=(e)=>{
    setFormState({...formState,associateName:e.target.value})
    let reg=/^[a-zA-z]*$/g;
    var str=e.target.value
    if(!str.match(reg)){
        setErrors({...errors,associateNameErr:"Accepts Alphabets and Spaces"})
    }

    else{
        setErrors({...errors,associateNameErr:""})
    }
}
const handleNameBlur=(e)=>{
    if(e.target.value===""){
        setErrors({...errors,associateNameRequiredErr:"Please enter the Associate Name."})
    }
}
useEffect(()=>{
    if(formState.associateName.length>=1 && formState.associateName.length<=4){
        setErrors({...errors,associateNameLengthErr:"Min 5 to max 30 characters Accepted",associateNameRequiredErr:""})
    }
    else if(formState.associateName.length>4 || formState.associateName.length<1){
        setErrors({...errors,associateNameLengthErr:""})
    }

    if(formState.associateName.length===0 && errors.associateNameLengthErr!=="" && errors.associateNameRequiredErr===""){
        setErrors({...errors,associateNameRequiredErr:"Please enter the Associate Name.",associateNameLengthErr:""})
    }
    if(formState.associateName.length>30){
        setErrors({...errors,associateNameLengthErr:"Min 5 to max 30 Characters Accepted"})
    }
},[formState.associateName])

{/*associate id */}

const handleIdChange=(e)=>{
    setFormState({...formState,associateId:e.target.value})
    let reg=/\d+/;
    var str1=e.target.value;
    if(!str1.match(reg)){
        setErrors({...errors,associateidErr:"Invalid Associate id."})
    }
    else{
        setErrors({...errors,associateidErr:""})
    }
}
const handleIdBlur=(e)=>{
    if(e.target.value===""){
        setErrors({...errors,associateidRequiredErr:"Please enter the Associate Id."})
    }
}
useEffect(()=>{
    if(formState.associateId.length>=1 && formState.associateId.length<=5){
        setErrors({...errors,associateidLengthErr:"" ,associateidRequiredErr:""})
    }
    else if(formState.associateId.length>5 || formState.associateId.length<1){
        setErrors({...errors,associateidLengthErr:""})
    }
    if(formState.associateId.length===0 && errors.associateIdLengthErr!=="" && errors.associateidRequiredErr===""){
        setErrors({...errors,associateidRequiredErr:"Please enter the Associate id.",associateidLengthErr:""})
    }
    if(formState.associateId.length>6){
        setErrors({...errors,associateidLengthErr:"Min 6 to Max 6 Characters Accepted"})
    }
},[formState.associateId])

{/*project id */}

const handleProjectIdChange=(e)=>{
    setFormState({...formState,projectId:e.target.value})
    let reg=/^[a-zA-z0-9]*$/g;
    var str=e.target.value
    if(!str.match(reg)){
        setErrors({...errors,projectidErr:"Invalid  Project id."})
    }

    else{
        setErrors({...errors,projectidErr:""})
    }

}
const handleProjectIdBlur=(e)=>{
    if(e.target.value===""){
        setErrors({...errors,projectidRequiredErr:"Please enter Project id."})
    }
}
useEffect(()=>{
    if(formState.projectId.length>=1 && formState.projectId.length<=11){
        setErrors({...errors,projectidLengthErr:"" ,projectidRequiredErr:""})
    }
    else if(formState.projectId.length>11 || formState.projectId.length<1){
        setErrors({...errors,projectidLengthErr:""})
    }
    if(formState.projectId.length===0 && errors.projectidLengthErr!=="" && errors.projectidRequiredErr===""){
        setErrors({...errors,projectidRequiredErr:"Please enter Project id.",projectidLengthErr:""})
    }
    if(formState.projectId.length>12){
        setErrors({...errors,projectidLengthErr:"Min Max 12  char Accepted"})
    }
},[formState.projectId])

return(

           <form className="mx-auto w-50 mt-4" onSubmit={handleSubmit}>
            
             <h1 className="mb-3" ><b>Form Validation using React</b></h1>
             
               {/*Associate Name */}
               <input type="text"
               className="form-control mb-3"
               name="associateName"
               placeholder="Associate Name"
               autoComplete="off"
               value={formState.associateName}
               onBlur={handleNameBlur}
               onChange={(e)=>handleNameChange(e)}
               />

           {errors.associateNameRequiredErr && <p className="text-danger">{errors.associateNameRequiredErr}</p>}
            {errors.associateNameLengthErr && <p className="text-danger">{errors.associateNameLengthErr}</p>}
            {errors.associateNameErr && <p className="text-danger">{errors.associateNameErr}</p>}

 
              {/*Associate Id */}
               <input type="text"
               className="form-control mb-3"
               name="associateId"
               placeholder="Associate Id"
               autoComplete="off"
               value={formState.associateId}
               onBlur={handleIdBlur}
               onChange={(e)=>handleIdChange(e)}
               /> 
               {errors.associateidRequiredErr && <p className="text-danger">{errors.associateidRequiredErr}</p>}
            {errors.associateidLengthErr && <p className="text-danger">{errors.associateidLengthErr}</p>}
            {errors.associateidErr && <p className="text-danger">{errors.associateidErr}</p>}


               {/*Project Id */}
              <input type="text"
               className="form-control mb-3"
               name="projectId"
               placeholder="Project Id"
               autoComplete="off"
               value={formState.projectId}
               onBlur={handleProjectIdBlur}
               onChange={(e)=>handleProjectIdChange(e)}
               required
               />
              
              {errors.projectidRequiredErr && <p className="text-danger">{errors.projectidRequiredErr}</p>}
            {errors.projectidLengthErr && <p className="text-danger">{errors.projectidLengthErr}</p>}
            {errors.projectidErr && <p className="text-danger">{errors.projectidErr}</p>}




          {/*radio buttons */}
           <input type="radio" name="shore" id="on" value={formState.Offshore} className="me-2" onChange={handleChange1}></input>
            <label htmlFor="on" className="me-3">OnShore</label>
            <input type="radio" name="shore" id="off" value={formState.Onshore} className="me-2" onChange={handleChange2}></input>
            <label htmlFor="off" className="me-2">OffShore</label>

            <br />
  
                                  {/*select location */}

                            <select name="location" className="form-select mt-3"
                             onBlur={handleLocationBlur}
                             onChange={e=>setFormState({...formState,location:e.target.value})}>
                                       {
                                      state.map((v,ind)=>{
                                        return(
                                           
                                              <option  value={v}>{v}</option>
                                             
                                              )
                                         })
                                        }
                                     </select>


                    {errors.locationRequiredErr && <p className="text-danger">Please select the location</p>}

              
               <br />
               {/*Associate skills */}
               <div className="row row-col-sm-4">
               {
                  formState.skill.map((skillObj,ind)=>{
                       return(
                          
                          <div className="col-sm-4 mt-3" key={ind}>
                              <input type="checkbox"
                              className="form-check-input" 
                              id={skillObj.name} 
                              onChange={e=>handleCheckbox(ind)}
                              />
                              <label className="form-check-label ms-2 "  htmlFor={skillObj.name}
                              >{skillObj.name}</label>

                          </div>
                    
                       )
                   })
               } 
               </div>
               {errors.skillErr && <p className="text-danger">{errors.skillErr}</p>}




               {/*profile */}
               <label htmlFor="myfile" className="mt-3 mb-2">Upload Profile</label>
               <input type="file"
                id="myfile"
               name="file"
               className="form-control mb-3"
              onBl={handleProfileBlur}
               value={formState.file}
               onChange={e=>setFormState({...formState,file:e.target.value})}/>   

                {errors.profileRequiredErr && <p className="text-danger">{errors.profileRequiredErr}</p>}  


                  

             {/*comments */}
               <textarea
               placeholder="Comments"
               name="comments"
             //  value={formState.comments}
               className="form-control mt-3 "
               row="10"
               onBlur={handleCommentBlur}
               onChange={e=>setFormState({...formState,comments:e.target.value})}
               />  

                 {errors.commentRequiredErr && <p className="text-danger">{errors.commentRequiredErr}</p>}  
              

               {/*Submit */}
               <button type="submit" className="btn btn-primary mt-5">Submit</button>          
               <button type="reset" className="btn btn-danger mt-5 ms-4">Reset</button>   
             

           </form>
)
}
export default Aboutus;