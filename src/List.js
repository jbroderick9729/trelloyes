import React, { Component } from 'react';
import Card from './Card.js';

class List extends Component {
    render() {
        let cards = store.lists.cardIds;
        let cardsArr = [];
        for (let i = 0; i < cards.length; i++) {
            cardsArr.push(<Card key={cards[i]} />)
        }

        return (
            <div key={this.props.key}>
                <section className="List">
                    <header className="List-header">
                        <h2>{this.props.header}</h2>
                    </header>
                        <div className="List-cards">
                            {cardsArr}
                        </div>
                </section>
                
            </div>
        )
    }
}

export default List;