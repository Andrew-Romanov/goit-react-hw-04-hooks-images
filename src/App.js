import React, { Component } from 'react';
import MainContainer from './components/MainContainer';
import PageHeader from './components/PageHeader';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
    isLoading: false,
  };

  componentDidMount() {}

  whenSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <MainContainer>
        <PageHeader title="React Homework 04. Image Finder" />

        <Searchbar whenSubmit={this.whenSubmit} />

        <ImageGallery searchQuery={this.state.searchQuery}></ImageGallery>
      </MainContainer>
    );
  }
}

export default App;
