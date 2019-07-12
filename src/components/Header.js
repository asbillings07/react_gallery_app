import React from 'react';
import Nav from './Nav';
import SearchForm from './SearchForm';

const Header = ({ performSearch, data, updateText }) => {
  return (
    <React.Fragment>
      <h1>Gallerize</h1>
      <h3>
        <em>A React Photo Gallery App</em>
      </h3>
      <SearchForm onSearch={performSearch} data={data} />
      <Nav getThatText={updateText} search={performSearch} data={data} />
    </React.Fragment>
  );
};

export default Header;
