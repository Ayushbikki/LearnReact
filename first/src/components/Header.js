//import UserList from './UserList'
function Header(props){
    let list =props.lists;

    return(
        <ul className="nav bg-secondar">
            {
                list.map((ele,key) =>
                {
                    return(<li className="nav-item" key={key}>
                        <a className="nav-link" href="#">{ele}</a>
                    </li>)
                })
            }
        </ul>
      /*  <div>
            <h1>Display Userlist data</h1>
            {
                UserList.map((item)=>{
                    <diV>
                        <h3>{item.UserName}</h3>
                    </diV>

                })
            }

        </div>*/
        

    )

}


export default Header;
