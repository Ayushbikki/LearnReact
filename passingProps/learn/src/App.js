//import logo from './logo.svg';
import './App.css';
import '././ChildComponent'
import { useState } from 'react'
import ChildComponent from '././ChildComponent';

function App() {

  const [word,setWord] = useState('parent')
  const changeW= (word)=> setWord(word)
return (
  <div className='parent'>
   <h1>{word}</h1>
    <ChildComponent
    changeWord ={ changeW}/>
  </div>
);
}

export default App;
