import React from "react";

const NoResults = ({ query }) => {
  return (
    <li className="not-found">
      <h2> 404 - No Results Found for {query} </h2>
      <p>
        You search did not return any results, or you reached a page that does
        not exist. Please try again.
      </p>
      <img src="../images/404-error.png" alt="error status page" />
    </li>
  );
};

export default NoResults;
