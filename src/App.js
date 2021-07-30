import MainContainer from './components/MainContainer';
import PageHeader from './components/PageHeader';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import { useState } from 'react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const whenSubmit = searchQuery => {
    setSearchQuery(searchQuery);
  };

  return (
    <MainContainer>
      <PageHeader title="React Homework 04. Image Finder" />

      <Searchbar whenSubmit={whenSubmit} />

      <ImageGallery searchQuery={searchQuery}></ImageGallery>
    </MainContainer>
  );
};

export default App;
