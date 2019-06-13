import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import API_KEY from "../config";
import Header from "./Header";
import Gallery from "./Gallery";
import Nav from "./Nav";
import NotFound from "./NotFound";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = query => {
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
        <div>
          <Header onSearch={this.performSearch} />
          {this.state.loading ? (
            <p>loading...</p>
          ) : (
            <Route
              exact
              path="/"
              render={() => <Gallery data={this.state.photos} />}
            />
          )}
          <Route
            path="/tigers"
            render={() => (
              <Gallery
                onClick={this.performSearch("tigers")}
                data={this.state.photos}
              />
            )}
          />
          <Route component={NotFound} />
        </div>
      </BrowserRouter>
    );
  }
}
