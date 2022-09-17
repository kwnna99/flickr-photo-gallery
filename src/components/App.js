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
      images: [],
      loading:false
    }
  } 

  performSearch = (query) => {

      this.setState({loading: true}, function () {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            images: response.data.photos.photo,
            loading:false
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    });
  }


  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <SearchForm />
          <Nav />

            <Switch>
              <Route exact path="/" render={()=> <Redirect to="/cats" />} />
              <Route exact path="/:query(cats|dogs|computers)" render={() => <PhotoContainer data={this.state.images} searchImg={this.performSearch} loading={this.state.loading} />} />
              <Route exact path="/search/:query" render={() => <PhotoContainer data={this.state.images} searchImg={this.performSearch} loading={this.state.loading} />} />
              <Route path="/error" render={()=> <NotFound />} />
              <Route path="*" render={()=> <Redirect to="/error" />} />
            </Switch>   
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
