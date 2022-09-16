import React,{Component} from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import NotFound from "./NotFound";
import Nav from "./Nav";
import apiKey from '../config.js';
import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';


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
  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <SearchForm onSearch={this.performSearch} />
          <Nav />
          <Switch>
            <Route exact path="/" render={()=> <Redirect to="/cats" />} />
            <Route path="/:query(cats|dogs|computers)" render={() => <PhotoContainer data={this.state.images} searchImg={this.performSearch}/>} />
            <Route path="/search/:query" render={() => <PhotoContainer data={this.state.images} searchImg={this.performSearch} />} />
            <Route path="/error" render={()=> <NotFound />} />
            <Route path="*" render={()=> <Redirect to="/error" />} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
