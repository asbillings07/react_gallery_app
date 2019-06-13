import React from "react";

const GalleryItem = ({ url }) => {
  return (
    <li>
      <img src={url} alt="" />
    </li>
  );
};

export default GalleryItem;
