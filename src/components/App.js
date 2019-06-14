import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import API_KEY from "../config";
// app components
import Header from "./Header";
import Gallery from "./Gallery";
import NoResults from "./NoResults";
import NotFound from "./NotFound";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }
  // happens as soon as render happens
  componentDidMount() {
    this.performSearch();
  }
  // search function
  performSearch = (query = "cars") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=20&format=json&nojsoncallback=1`
      )
      .then(response => {
        this.setState({ photos: response.data.photos.photo, loading: false });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="container">
          <Header onSearch={this.performSearch} data={this.state.photos} />
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
                path="/tigers"
                render={() => (
                  <Gallery
                    onClick={this.performSearch("tigers")}
                    data={this.state.photos}
                  />
                )}
              />
              <Route
                path="/computers"
                render={() => (
                  <Gallery
                    onClick={this.performSearch("computers")}
                    data={this.state.photos}
                  />
                )}
              />
              <Route
                path="/buildings"
                render={() => (
                  <Gallery
                    onClick={this.performSearch("buildings")}
                    data={this.state.photos}
                  />
                )}
              />
              <Route component={NoResults} />
              <Route component={NotFound} />
            </Switch>
          )}
        </div>
      </BrowserRouter>
    );
  }
}
