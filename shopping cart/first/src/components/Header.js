import React from 'react'

function Header() {
  return (
 <header className='row block center'>
     <div>
         <h1> Shopping cart</h1>
     </div>
     <div>
     <a href='/cart'>
         cart
        </a>  <a href='/signin'>
        signin
        </a>
        
     </div>

       </header>
  )
}

export default Header