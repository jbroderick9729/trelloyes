import React, { Component } from 'react';
import List from './List.js'
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };
  
  render() {
    const { store } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(item => (
            <List key={item.id} header={item.header} cards={item.cardIds.map(card => store.allCards[card])}/>
            ))}
        </div>  
      </div>
    );
  }
}

export default App;
