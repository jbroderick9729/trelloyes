import React, { Component } from 'react';
import List from './List.js'
import './App.css';

class App extends Component {
  render() {
    let store = this.props.store;
    let list = store.lists;
    let listArr = list.map(item => {
      let cards = item.cardIds;
      let listCards = cards.map(card => store.allCards[card]);
      return (
      <List key={item.id} header={item.header} cards={listCards}/>
      )
    });
    return (
      <div className="App-list">
        <header className="App-header">
          <h1>Trelloyes</h1>
        </header>
          {listArr}
      </div>
    );
  }
}

export default App;
