import {useState}  from 'react';

function CheckBoxDemo(){
let [skills, setSkills] = useState([
    { name: "html", value: false },
    { name: "angular", value: false },
    { name: "react", value: false }
])
const onFormSubmit=(e) =>{
    e.preventDefault();
    console.log(skills);
}

const handleCheckBoxStatus =(ind) =>{
    let skillsArr =[...skills];
    skillsArr[ind].value =!skillsArr[ind].value;
    setSkills(skillsArr)
}
return(
    <form className="w-50 mx-auto mb-3" onSubmit={onFormSubmit}>
        <label>select Ur skills</label>
        {
            skills.map((skillObj,ind) =>{
                return(
                    <div className="form-check" key={ind}>
                        <input type="checkbox"
                        onChange ={ e =>{handleCheckBoxStatus(ind)}}
                        id={skillObj.name} className="form-check-input" />
                        <label htmlFor={skillObj.name} className="form-check-input mb-3">{skillObj.name}</label>
                    </div>
                )
            })
        }
        <button type="submit" className="btn btn-primary">Submit</button>
      
    </form>
)


}
export default CheckBoxDemo;