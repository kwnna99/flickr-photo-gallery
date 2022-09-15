import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {
  let photos = props.data.map((photo) => {
    return <Photo img={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title}/>
  }); 
  return (
    <div className='photo-container'>
    <h2>Results</h2>
      <ul>
        {photos}    
      </ul>
    </div>
  );
}

export default PhotoContainer;