import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <h3>Card Title</h3>
                <p>Card body</p>
                <button>Delete</button>
            </div>
        )
    }
}

export default Card;