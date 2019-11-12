import React from 'react';
import './App.css';
import Forms from './FormEmployee'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
    }
  }
  render() {
    return (  <div className="App">
      <header className="App-header">
        <Forms/>
      </header>
    </div>)
  }
}


export default App;
