import React from 'react';
import {useState} from 'react';


 function Home(){
     const [state,setState] =useState([])
     let list1=['one','two']
     let list2 =['three','four']
     const handleSelect1 =(e) =>
     {
         setState(list1)
         console.log(list1)
     }
     const handleSelect2 =(e) =>
     {
         setState(list2)
         console.log(list2)
     }

    
    
        return(
            <div>
                <input type="radio" name="gender" id="m" value="male" onChange={handleSelect1} />
                <label htmlFor="m">On-shore</label>

                <input type="radio" name="gender" id="f" value="female" onChange={handleSelect2} />
                <label htmlFor="f">Off-shore</label>
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


            </div>
        )

}
export default Home;