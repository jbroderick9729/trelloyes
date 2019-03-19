import React, { Component } from 'react';
import Card from './Card.js';
import './List.css';

export default function List(props) {
        return (
            <div>
                <section className="List">
                    <header className="List-header">
                        <h2>{props.header}</h2>
                    </header>
                        <div className="List-cards">
                            {props.cards.map((item) => (
                                <Card key={item.id} title={item.title} content={item.content} />
                                ))}
                        </div>
                </section>
            </div>
        )
}