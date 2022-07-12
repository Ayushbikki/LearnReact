import {useLocation} from 'react-router-dom'

function UserProfile(){
    let location = useLocation();

    return(
        <div>
            <h1>welocome,{location.state.username}</h1>
        </div>

    )

}
export default UserProfile