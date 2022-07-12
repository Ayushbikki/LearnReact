function DeleteUsers(props) {
    
    let delUser =props.dusers;
  
return(
   
    <table className ="table mt-2">
        <h1>Deleted user is</h1>
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
            delUser.map((obj,ind) => {
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
                         {obj.phone}</td>
                         <td>{obj.website}</td>
                         </tr>
                )
            })
            
            }
        </tbody>
    </table>
)
}
export default DeleteUsers;