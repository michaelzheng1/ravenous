import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Routes from './Routes';
import store from './Redux/Store';

// import './App.css'
// import BusinessList from './components/BusinessList/BusinessList'
// import SearchBar from './components/SearchBar/SearchBar'
// import Yelp from './util/Yelp'
// require('dotenv').config()

class App extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     businesses: []
  //   }
  //   this.searchYelp = this.searchYelp.bind(this)
  // }

  // searchYelp (term, location, sortBy) {
  //   Yelp.searchYelp(term, location, sortBy).then((businesses) => {
  //     this.setState({ businesses: businesses })
  //   })
  // }

      // <div className='App'>
      //   <h1>ravenous</h1>
      //   {/* <SearchBar searchYelp={this.searchYelp} />
      //   <BusinessList businesses={this.state.businesses} /> */}
      // </div>

  render () {
    return (
      <Provider store={store} >
        <Router>
          Ravenous
          <Routes />
        </Router>
      </Provider>
  
    )
  }
}

export default App
