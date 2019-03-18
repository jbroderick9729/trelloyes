import React, { Component } from 'react';
import Card from './Card.js';
import './List.css';

class List extends Component {
    render() {
        let cards = this.props.cards;
        let cardsArr = cards.map(item => {
            return (
                <Card key={item} title={item.title} content={item.content} />
            )
        });

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