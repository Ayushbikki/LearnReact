import React, {Component} from 'react'
import './App.css';

class Child extends Component {
  state={
    name:'bikki'
  }
  constructor(){
    super()
    this.state={
      name:'ayush'
    };
    console.log(' child constructor')
  }

  //before rendering component will mount
  componentWillMount(){
    
    console.log(' child component will mount');
  }
  componentWillReceiveProps(){
    console.log(' child componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log(' child shouldComponentUpdate')
    return true;
  }
  componentwillUpddate(){
    console.log(' child componentwillUpddate')
  }
  componentDidUpdate(previousProps,previousstate){
      console.log(' child previousProps',previousProps)
      console.log('child previousState',previousstate)
      console.log(' child componentDidUpdate')
  }
  //after rendering
  componentDidMount(){
    console.log(' child componentDidMount');
  }

  
  render(){
    console.log('child render')
  return (
    <div className="App">
      {/* <h1>Lifecycle</h1> */}
      child name: {this.props.name}
      
    </div>
  );
}
}

export default Child;
