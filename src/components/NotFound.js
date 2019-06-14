import React from "react";

const NotFound = () => {
  return (
    <li className="not-found">
      <h3>404 NotFound</h3>
      <p>You search did not return any results. Please try again.</p>
      <img src="../images/404-error.png" alt="error status page" />
    </li>
  );
};

export default NotFound;
