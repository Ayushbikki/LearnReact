import React from 'react'
import {useState} from 'react'

function Search(props) {
    const {products} = props;
    //console.log(products)
    const[searchKey,setSearchKey]= useState('');
    const[itemList,setItemList]= useState(products);
    function filter(){
        const duplicate = products;
        const flterList=duplicate.filter((item)=>item.name.toLowerCase().includes(searchKey.toLowerCase()))
        //console.log(flterList)
        if(flterList.length!==0){
            setItemList(flterList)
        }
        
        
    }
  console.log(itemList[0].name)
  return (
   <>
   <input type='text' className='search' value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} placeholder='search product'
   onKeyUp={filter}>
   </input>
   
  {itemList.length ===1 && <div>{itemList[0].name}</div>}  
  
   </>
  )
}

export default Search