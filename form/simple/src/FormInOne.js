import React from 'react'
import {useState} from 'react'

function FormInOne() {
    const initialValues ={username:'',email:''}
    const [userinfo,setUserInfo]= useState(initialValues)

    const handleChange =(e)=>{
       // console.log(e.target)
       const { name,value } = e.target;
       setUserInfo({...setUserInfo,[name]:value})
       console.log(userinfo)
        
       
    }
    const submitForm = (e)=>{
        e.preventDefault();
        console.log(userinfo)

    }

  return (
    <div className='container'>
        <form onSubmit={submitForm}>
            <label>username</label>
            <input type='text'
            name='username'
            value={userinfo.username} 
            onChange={handleChange}>
            </input>
            <br></br>
            <label>email</label>
            <input type='email'
            name='email'
            value={userinfo.email}
            onChange={handleChange}>
            </input>
            <br></br>
    <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default FormInOne