
//import {useRef} from 'react';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';

export default function Login(){

    let{ register,handleSubmit,formState: {errors}} =useForm();
    let history= useHistory();
    console.log('history is',history)

    const onFormSubmit =(userObj) =>{
        console.log(userObj)
    

    if(userObj.username!=='ayush'){
        alert('Invalid username')
    }
    else if(userObj.password!=='ayush'){
        alert('Invalid password')
    }
    else{
       history.push('/userprofile',{username: userObj.username})
       //
      
    }
}
return(
    <div>
        <form className="w-50 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
            {/* username */}
            <label htmlFor="un">Username</label>
            <input type="text" id="un" {...register('username',{required:true,minLength:4})}  className="form-control mb-3"/>
            {errors.username?.type==='required' && <p className="text-danger"> username is required</p>}
            {errors.username?.type==='minLength' && <p className="text-danger"> please provide at least 4 char</p>}

            <label htmlFor="pw">Password</label>
            <input type="password" id="pw" {...register('password',{required:true,minLength:2})}  className="form-control mb-3"/>
            {errors.password?.type==='required' && <p className="text-danger"> username is required</p>}
            {errors.password?.type==='minLength' && <p className="text-danger">Set min 2 char password</p>}
            

         

        <button type="submit" className="btn btn-danger">Submit</button>
        </form>
        
    </div>
)

}