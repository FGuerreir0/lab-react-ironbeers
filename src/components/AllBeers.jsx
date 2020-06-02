import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BeerApi from './../service/BeerApi';

export default class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      allBeers: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    BeerApi.AllBeersApi()
      .then((allBeers) => this.setState({ allBeers }))
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.allBeers);
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>

        {this.state.allBeers.map((beer, key) => (
          <Link key={beer._id} to={`/beers/${beer._id}`}>
            <div className="cardAllBeers">
              <img src={beer.image_url} alt={beer.name} className="cardImg" />

              <div className="cardInformation">
                <p>{beer.name}</p>
                <p>{beer.tagline}</p>
                <small>
                  <strong>Created by:</strong> {beer.contributed_by}
                </small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
