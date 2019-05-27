import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import BusinessList from '../components/Business';
// import SearchBar from '../components/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div class="App">
  <h1>ravenous</h1>
  <SearchBar/>
  <BusinessList/>
</div>
  );
}

export default App;
