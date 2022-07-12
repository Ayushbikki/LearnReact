import React, { useState } from 'react'

function Form() {
    const [name,setName] = useState('')
    const [password,setPassWord] = useState('')
    const [email,setEmail ] = useState('')

    const submitForm = (e)=>{
        e.preventDefault();
        console.log(name,email,password)
        setName('')
        setEmail('')
        setPassWord('')
        


    }
   /* const onTextChange= (e)=>{
        switch(e.target.value){
            case "name":
                setName(e.target.value);
                break;
            case "email":
            setEmail(e.target.value);
            break;
            case "password":
                setPassWord(e.target.value)
                break;
                default:
                    return true;
        }

    }*/
    const updatename = (e)=>{
        setName(e.target.value)
       
    }

    const updateemail =(e)=>{
        setEmail(e.target.value)
    }
    /*
    const updatepassword = (e)=>{
        setPassWord(e.target.value)
    }*/

  return (
    <div>
    <h1>Simple form</h1>
    <form onSubmit={submitForm}>
        <label>Name</label>
        <input type="text" value={name} onChange={updatename}></input>
        <br></br>
        <label>Email</label>
        <input type="email" value={email} onChange={updateemail}/>
        <br></br>
        <label>password</label>
        <input type="password" value={password} onChange={(e)=>setPassWord(e.target.value)}></input>
        <br></br>
    <button type='submit'>Login</button>
    </form>
        
   </div>
  )
}

export default Form