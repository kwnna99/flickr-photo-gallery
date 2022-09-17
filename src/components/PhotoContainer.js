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

  if(props.data.length>0){
    photos= props.data.map((photo) => {
      return <Photo img={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} alt={photo.title}/>
    }); 
  }
  if(photos.length>0){
    return (
      <div className='photo-container'>
      <h2>{`${query} Images`}</h2>
        <ul>
        {photos}
        </ul>
      </div>
    );}else if(!props.loading){
      return(<NoResults />);
    }else{
      return(<Spinner />);
    }
}

export default PhotoContainer;