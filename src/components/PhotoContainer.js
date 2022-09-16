import React,{useEffect} from 'react';
import Photo from './Photo';
import { useParams } from 'react-router-dom';

const PhotoContainer = (props) => {
  let { query } = useParams();
  let photos=[];
  let msg="";
    useEffect(() => {
    props.searchImg(query);
  }, [query]);

  if(props.data.length>0){
    photos= props.data.map((photo) => {
      return <Photo img={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} alt={photo.title}/>
    }); 
  }else{
    msg="Sorry, there are no matches for your search! Why don't you try again?";
  }

  if(photos.length>0){
    return (
      <div className='photo-container'>
      <h2>{`${query} Gifs`}</h2>
        <ul>
          {photos}    
        </ul>
      </div>
    );}else{
      return(      <div className='photo-container'>
      <div className='not-found'>
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
      </div>
      </div>);
    }
}

export default PhotoContainer;