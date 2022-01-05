import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.getNetflixOriginals}
      isLargeRow/>
      <Row title="Trending Now" fetchURL={requests.getTrending}/>
      <Row title="Action" fetchURL={requests.getAction}/>
      <Row title="Comedy" fetchURL={requests.getComedy}/>
      <Row title="Horror" fetchURL={requests.getHorror}/>
      <Row title="Documentaries" fetchURL={requests.getDocumentaries}/>
      <Row title="Romance" fetchURL={requests.getRomance}/>
      <Row title="Top Rated" fetchURL={requests.getTopRated}/>
    
    </div>
  );
}

export default App;
