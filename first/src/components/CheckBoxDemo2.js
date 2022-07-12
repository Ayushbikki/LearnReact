import {useForm} from 'react-hook-form';
//import styles from '../App.module.css';


function CheckBoxDemo2(){
    let{ register,handleSubmit,formState: {errors}} =useForm();

    //form submit
    const onFormSubmit =(userObj) =>{
        console.log(userObj)
    }

    return(
        <form className="form-label w-50 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
            {/* username */}
           
            <input type="text" id="un" {...register('username',{required:true,minLength:4})}  className="form-control mb-3"/>
        
            {errors.username?.type==='required' && <p className="text-danger"> username is required</p>}
            {errors.username?.type==='minLength' && <p className="text-danger"> please provide at least 4 char</p>}
           

            <label htmlFor="pw">Password</label>
            <input type="password" id="pw" {...register('password',{required:true,minLength:2})}  className="form-control mb-3"/>
            {errors.password?.type==='required' && <p className="text-danger"> username is required</p>}
            {errors.password?.type==='minLength' && <p className="text-danger">Set min 2 char password</p>}
            {/* Select city */}
            <label htmlFor="city">Select city</label>
            <select id="city" className="form-select mb-3" {...register('city')}>
                <option value="">select city</option>
                <option value="bangalore">Bangalore</option>
                <option value="pune">Pune</option>
                <option value="coimbatore">Coimbatore</option>
            </select>

            {/* radio buttens */}
            <label>Select gender</label>
            <div className="form-check mt-2 mb-2">
                <input type="radio" id="m" className="form-check-input" value="male" {...register('gender',{required:true})}></input>
                <label htmlFor="m" className="form-check-label">Male</label>
                </div>
                <div className="form-check mb-2">
                <input type="radio" id="f" className="form-check-input" value="female" {...register('gender',{required:true})}></input>
                <label htmlFor="f" className="form-check-label">Female</label>
                </div>
                {errors.gender && <p className="text-danger">--Please select a gender--</p>}
                {/* checkboxes */}

            <label>Choose skills</label>
            <div className="form-check">
                <input type="checkbox" id="html" className="form-check-input" {...register('html')} />
                <label htmlFor="html" className="form-check-label">HTML</label>
            </div>
            <div className="form-check">
                <input type="checkbox" id="css" className="form-check-input" {...register('css')} />
                <label htmlFor="css" className="form-check-label">CSS</label>
            </div>
            <div className="form-check">
                <input type="checkbox" id="javascript" className="form-check-input" {...register('javascript')} />
                <label htmlFor="javascript" className="form-check-label">JAVSCRIPT</label>
            </div>



            

         

        <button type="submit" className="btn btn-danger">Submit</button>
        </form>
    )
}
export default CheckBoxDemo2;