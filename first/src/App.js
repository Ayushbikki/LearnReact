//import logo from './logo.svg';
//import './App.css';
//import { Button } from 'bootstrap';

//import { useState,useEffect } from 'react';

//import styles from './App.module.css';
//import FormsDemo from './components/FormsDemo';
//import Header from './components/Header';
import {BrowserRouter,Switch,Link, Route,Redirect} from 'react-router-dom'
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Login from './components/Login';
//import CheckBoxDemo2 from './components/CheckBoxDemo2';
import UserProfile from './components/UserProfile';
import Technologies from './components/Technologies';
import Assign from './components/Assign';
//import UncontrolledFormDemo from './components/UncontolledFormDemo';
//import UserList from './components/UserList';
//import DeleteUsers from './components/DeleteUsers';
//let list1 =['Home','Login','Register'];
//let list2 =['contactus','aboutus','address']
//import pic1 from './Images/image-1.jpg'
//import pic2 from './Images/image-2.jpg'

function App() {
  
  //let[users,setUsers]= useState(null)
  // let[deleteUser,setDeleteUser] =useState([]);

  // useEffect

  //useEffect(() => {
    //console.log('useEffect is called')
    //fetch("http://localhost:3000/users")
    //.then(res => res.json())
   // .then(data =>{
     // setUsers(data)
  //  })
  //},[]);


// delete 
 // const handleDelete =(user) =>{
   //let id= user.id;
    //console.log('deleted id is',id)
    //let remainingUsers = users.filter(obj => obj.id!=id)
    //setUsers(remainingUsers)
   // deleteUser.push(user)
   //setDeleteuser(deleteUser)
    
  //}

  //
 
 
  return(
    <BrowserRouter>
    <div >
      {/* <h1>{number}</h1> */}
      {/* <button className="btn btn-primary" onClick={handClick}>click me</button> */}
      {/* <Header lists ={list1} />  */}
     {/* <Header lists ={list2} /> */}
    {/*  */}
    {/* <FormsDemo /> */}

    {/* <UncontrolledFormDemo /> */}

    {/* { users && <UserList  usersData={users} deleteUser={handleDelete}/>} */}
    {/* {deleteUser &&  <DeleteUsers dusers={deleteUser}/>} */}

    <ul className="nav bg-light justify-content-center">
      <li className="nav-item">
        {/* <a className="nav-link" href="#">Home</a>  */}
         <Link to ="/home" className="nav-link">Home</Link> 

      </li>
      <li className="nav-item">
      <Link to ="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
      <Link to ="/aboutus" className="nav-link">About Us</Link>
      </li>
      <li className="nav-item">
      <Link to ="/assign" className="nav-link">Assignment</Link>
      </li>
      <li className="nav-item">
      <Link to ="/technology" className="nav-link">Technology</Link>
      </li>
      
      </ul>
       <Switch>
        {/* route for home component  */}
         <Route path="/home"> 
         <Home /> 
        </Route> 
        <Route path="/login"> 
         <Login /> 
        </Route> 
        <Route path="/aboutus"> 
         <Aboutus /> 
        </Route> 
        <Route path="/assign"> 
         <Assign /> 
        </Route>
        <Route path="/userprofile"> 
         <UserProfile /> 
        </Route> 
        <Route path="/technology"> 
         <Technologies /> 
        </Route> 
       </Switch> 
    </div>
    
    </BrowserRouter>
  )
  
}

export default App;
