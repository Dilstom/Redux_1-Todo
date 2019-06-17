import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
 return (
  <div className="App">
   <header className="App-header">
    <p>
     Edit <code>src/App.js</code> and save to reload.
    </p>
    <h1>{props.titleOne}</h1>
   </header>
  </div>
 );
}

function mapStateToProps(state) {
 console.log(state);
 return { titleOne: state.title };
}

export default connect(mapStateToProps)(App);
// connect( mapStateToProps, mapDispatchToProps)
