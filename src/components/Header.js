import React from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";

const Header = ({ onSearch, data }) => {
  return (
    <React.Fragment>
      <h1>React Gallery App</h1>
      <SearchForm onSearch={onSearch} data={data} />
      <Nav data={data} />
    </React.Fragment>
  );
};

export default Header;
