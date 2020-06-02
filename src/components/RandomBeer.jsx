import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RandomBeer extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <p>Random Beer</p>
      </div>
    );
  }
}
