import React,{useState } from 'react';
function Form(props) {
    const [name,setName]= useState('')
    const handleChange = (e)=>{
        setName(e.target.value)
      //  console.log(e.target.value)

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
       props.fromParent(name)
      //console.log(name)
    }
  return (
   <form onSubmit={handleSubmit}>
       <input type="text" value={name} onChange={handleChange} />
           <button type='submit'>submit</button>
     
   </form>
  )
}

export default Form