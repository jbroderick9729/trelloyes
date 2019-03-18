import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
                <button>Delete</button>
            </div>
        )
    }
}

export default Card;