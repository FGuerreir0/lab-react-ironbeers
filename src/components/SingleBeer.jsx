import React, { Component } from 'react';
import * as BeerApi from './../service/BeerApi';
import { Link } from 'react-router-dom';
import './../App.css';

export default class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    BeerApi.SingleBeerApi(this.props.match.params.id)
      .then((singleBeer) => this.setState({ beer: singleBeer }))
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.beer);
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <img
          src={this.state.beer.image_url}
          alt={this.state.beer.name}
          className="singleImg"
        />
        <div className="basicInformation">
          <div>
            <h3>{this.state.beer.name}</h3>
            <h4>{this.state.beer.tagline}</h4>
          </div>
          <div>
            <h4>{this.state.beer.attenuation_level}</h4>
            <h5>{this.state.beer.first_brewed}</h5>
          </div>
        </div>
        <div className="details">
          <p>{this.state.beer.description}</p>
          <small>{this.state.beer.contributed_by}</small>
        </div>
      </div>
    );
  }
}
