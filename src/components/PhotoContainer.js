import React,{useEffect} from 'react';
import Photo from './Photo';
import NoResults from './NoResults';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';

const PhotoContainer = (props) => {
  let { query } = useParams();
  let search= props.searchImg;
  let photos=[];
    useEffect(() => {
    search(query);
  }, [query]);

  //return an array of Photo components, one for each image fetched
  if(props.data.length>0){
    photos= props.data.map((photo) => {
      return <Photo img={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} alt={photo.title}/>
    }); 
  }

  //if the app is still loading, show the spinner
  if(props.loading){
    return(<Spinner />);
}else if(photos.length>0){
  //if the app has loaded and there are images, show the images
  return (
    <div className='photo-container'>
    <h2>{`${query} Images`}</h2>
      <ul>
      {photos}
      </ul>
    </div>
  );
    }else{
      //if the app has loaded and there are no images, show the no results component
      return(<NoResults />);
    }
}

export default PhotoContainer;