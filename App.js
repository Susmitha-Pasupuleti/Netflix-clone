import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './request.js';
import Banner from './Banner';
import Nav from "./Nav";
import "./Nav.css";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow="true"/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
      
    </div>
  );
}

export default App;
