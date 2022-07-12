//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from '././Form';


function App() {
 /* const getData =(data)=>{
    console.log('coming from Appjs',data)
  }*/
  const [data,setData] = useState('')
  //const getData =(data) => setData(data)

  return (
    <div className="App m-2">
      <h1>from parent {data}</h1>
      {/* we can also use getdata function or setData is also inbuit function  */}
    <Form fromParent ={setData}/>

    </div>
  );
}

export default App;
