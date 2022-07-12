import React, {Component} from 'react'
import './App.css';
import Child from './child';

class App extends Component {
  state={
    name:'bikki'
  }
  constructor(){
    super()
    this.state={
      name:'ayush'
    };
    console.log('constructor')
  }

  //before rendering component will mount
  componentWillMount(){
    if(window.innerWidth<500){
      this.setState({innerWidth:window.innerWidth})
    }
    console.log('component will mount');
  }
  componentWillReceiveProps(){
    console.log(' componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate')
    return true;
  }
  componentwillUpddate(){
    console.log('componentwillUpddate')
  }
  componentDidUpdate(previousProps,previousstate){
    console.log('previousProps',previousProps)
    console.log('previousState',previousstate)
    console.log('componentDidUpdate')
}
  //after rendering
  componentDidMount(){
    console.log('componentDidMount');
  }
  changeState(){
    this.setState({name:'jill'})
  }
  
  render(){
    console.log('render')
  return (
    <div className="App">
      {/* <h1>Lifecycle</h1> */}
      {this.state.name} <br/>
     innerWidth: {this.state.innerWidth}
     <Child name={this.state.name} />
     {/* here name is key passed to child and this.state.name is value from parent passed as props to child */}
     <button onClick={this.changeState.bind(this)}>changestate</button>
      
    </div>
  );
}
}

export default App;
