import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import API_KEY from "../config";
// app components
import Header from "./Header";
import Gallery from "./Gallery";

import NoResults from "./NoResults";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
      text: "cars"
    };
  }
  // happens as soon as render happens
  componentDidMount() {
    this.shouldUpdateText();
  }

  // search function
  performSearch = (search = this.state.text) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        this.setState({ photos: response.data.photos.photo, loading: false });
        console.log(response.data.photos.photo.length);
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };
  shouldUpdateText = query => {
    console.log(query);
    this.setState({ text: query });
    this.performSearch();
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Header
            performSearch={this.performSearch}
            gimmeTheText={this.shouldUpdateText}
            data={this.state.photos}
          />
          {/* If statement that shows loading until a page is loaded */}
          {this.state.loading ? (
            <p>Loading....</p>
          ) : (
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Gallery data={this.state.photos} />}
              />
              <Route
                path="/search"
                render={() => <Gallery data={this.state.photos} />}
              />
              <Route
                exact
                path="/tigers"
                render={() => <Gallery data={this.state.photos} />}
              />
              <Route
                path="/javascript"
                render={() => <Gallery data={this.state.photos} />}
              />
              <Route
                path="/buildings"
                render={() => <Gallery data={this.state.photos} />}
              />
              <Route component={NoResults} />
            </Switch>
          )}
        </div>
      </Router>
    );
  }
}
