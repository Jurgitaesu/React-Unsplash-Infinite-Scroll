import React, { useState, useEffect } from "react";
import Header from './components/Header';
import UnsplashImage from './components/UnsplashImage';
import Loader from './components/Loader';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

const Container = styled.div`
max-width: 50em;
margin: 1em auto;
`;

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    fetch('https://api.unsplash.com/photos/?client_id=' + accessKey)
      .then(res => res.json())
      .then(data => {
        setImages([...images, ...data]);
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
  }

  return (
    <div className="App" >
      <Header />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <Container>
          {images.map(image => (
            <UnsplashImage url={image.urls.thumb} key={image.id} author={image.user.name} created={image.created_at.slice(0, 10)} />
          ))}
        </Container>
      </InfiniteScroll>
    </div>
  );
}

export default App;
