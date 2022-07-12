//import User from './user'
function UserList(props) {
    console.log(props)
    let users =props.usersData;
  let deleteUser = props.deleteUser;
  //let obj;
  let delid;
    


return(
    <table className ="table mt-2">
        <thead>
            <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Mobile no</th>
            <th>Website</th>
            </tr>
        </thead>
        <tbody>
            {
            users.map((obj,ind) => {
                return(
                    <tr key={ind}>
                        <td>{obj.id}</td>
                        <td>{obj.username}</td>
                        <td>{obj.name}</td>
                        <td>
                            <b>City : </b> {obj.address.city}<br></br>
                            <b>Zipcode : </b>{obj.address.zipcode}</td>
                        <td>{obj.email}</td>
                        <td>
                         {/* <button className="btn btn-danger" onClick={()=>deleteUser(obj.id)}>X  </button>  */}
                         {obj.phone}</td>
                         <td>{obj.website}</td>
                         <td><button className="btn btn-danger" onClick={()=>deleteUser(obj.id)}>X  </button></td>
                         
                    </tr>
                    //<tbody> <h2>Deleted user is </h2></tbody>
                   

                )
            })
            
            }
        </tbody>
        <h2 >Deleted user is  </h2>

       

    </table>
)
}
export default UserList;