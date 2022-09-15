import React,{Component} from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import axios from 'axios';
import NotFound from "./NotFound";
import Nav from "./Nav";
import apiKey from '../config.js';
import PhotoContainer from './PhotoContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []    
    };
  } 

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  componentDidMount() {
    this.performSearch(window.location.pathname);
  }

  /**componentDidUpdate(){
    console.log(this.state.query);
    if(window.location.pathname!==this.state.query){
      this.performSearch(window.location.pathname);
      this.setState({query:window.location.pathname});
    }
  }*/
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/:query" element={<PhotoContainer data={this.state.images} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
