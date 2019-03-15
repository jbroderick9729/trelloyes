import React, { Component } from 'react';
import List from './List.js'
import './App.css';

class App extends Component {
  render() {
    
    let list = store.lists;
    let listArr = [];
    list.map(item => {
      listArr.push(<List key={item.id} header={item.header} />)
    })
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Trelloyes</h1>
        </header>
          {listArr}
      </div>
    );
  }
}

export default App;
