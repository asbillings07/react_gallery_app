import React from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";

const Header = ({ performSearch, data, updateText }) => {
  return (
    <React.Fragment>
      <h1>React Gallery App</h1>
      <SearchForm onSearch={performSearch} data={data} />
      <Nav getThatText={updateText} search={performSearch} data={data} />
    </React.Fragment>
  );
};

export default Header;
