import React from "react";
import GalleryItem from "./GalleryItem";
import NoResults from "./NoResults";

const Gallery = ({ data }) => {
  let photos;

  if (data.length > 0) {
    photos = data.map(photo => (
      <GalleryItem
        url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${
          photo.id
        }_${photo.secret}.jpg`}
        key={photo.id}
      />
    ));
  } else {
    photos = <NoResults />;
  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{photos}</ul>
    </div>
  );
};

export default Gallery;
