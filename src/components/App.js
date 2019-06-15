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
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };
  shouldUpdateText = query => {
    this.setState({ text: query });
    this.performSearch(query);
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Header
            performSearch={this.performSearch}
            updateText={this.shouldUpdateText}
            data={this.state.photos}
          />
          {/* If statement that shows loading until a page is loaded */}
          {this.state.loading ? (
            <h2>Loading....</h2>
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
                path="/trains"
                render={() => <Gallery data={this.state.photos} />}
              />
              <Route
                path="/people"
                render={() => <Gallery data={this.state.photos} />}
              />
              <Route
                path="/planes"
                render={() => <Gallery data={this.state.photos} />}
              />

              <Route render={() => <NoResults query={this.state.text} />} />
            </Switch>
          )}
        </div>
      </Router>
    );
  }
}
