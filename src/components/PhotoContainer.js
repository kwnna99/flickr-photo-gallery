import React,{useEffect} from 'react';
import Photo from './Photo';
import { useParams } from 'react-router-dom';

const PhotoContainer = (props) => {
  let { query } = useParams();
    useEffect(() => {
    props.searchImg(query);
  }, [query]);
  let photos = props.data.map((photo) => {
    return <Photo img={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} alt={photo.title}/>
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