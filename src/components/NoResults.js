import React from "react";

const NoResults = () => {
  return (
    <li className="not-found">
      <h2> 404 - No Results Found</h2>
      <p>
        You search did not return any results, or you reached a page that does
        not exist. Please try again.
      </p>
    </li>
  );
};

export default NoResults;
