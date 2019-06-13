import React from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";

const Header = ({ onSearch }) => {
  return (
    <div className="container">
      <title>React App Assets</title>,
      <SearchForm onSearch={onSearch} />
      <Nav />
    </div>
  );
};

export default Header;
