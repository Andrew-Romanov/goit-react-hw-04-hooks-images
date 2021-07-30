import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import Modal from '../Modal';
import ThreeDots from '../../utils/Loader';
import apiService from '../../utils/apiService';
import styles from './ImageGallery.module.scss';

const ImageGallery = ({ searchQuery }) => {
  const [pictures, setPictures] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [needToScroll, setNeedToScroll] = useState(false);
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');

  // state = {
  //   pictures: [],
  //   pageNumber: 1,
  //   isLoading: false,
  //   isModalOpen: false,
  //   needToScroll: false,
  // };

  // modalData = {
  //   src: '',
  //   alt: '',
  // };

  useEffect(() => {
    if (searchQuery !== '') {
      console.log('First render');
      setPictures([]);
      setPageNumber(1);
      fetchImages();
    }
  }, [searchQuery]);

  useEffect(() => {
    if (pageNumber > 1) {
      console.log('Next render');
      fetchImages();
    }
  }, [pageNumber]);

  useEffect(() => {
    if (needToScroll) {
      scrollToBottom();
      setNeedToScroll(false);
    }
  }, [needToScroll]);

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.searchQuery !== this.props.searchQuery) {
  //     this.setState({ pictures: [], pageNumber: 1 });
  //     this.fetchImages();
  //   } else if (prevState.pageNumber < this.state.pageNumber) {
  //     this.fetchImages();
  //   }

  //   if (needToScroll) {
  //     scrollToBottom();
  //     setNeedToScroll(false);
  //   };
  // };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const fetchImages = () => {
    setIsLoading(true);

    // Оставил небольшой таймаут чтоб виден был лоадер
    setTimeout(() => {
      apiService(searchQuery, pageNumber)
        .then(response => {
          if (response.data.hits.length !== 0) {
            setPictures(prevPictures => [
              ...prevPictures,
              ...response.data.hits,
            ]);
            setNeedToScroll(true);
          } else console.log('No images found');
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
        })
        .finally(() => setIsLoading(false));
    }, 500);
  };

  const loadMoreImages = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  const openModal = (src, alt) => {
    setSrc(src);
    setAlt(alt);
    toggleModal();
  };

  return (
    <section className={styles.ImageGalleryContainer}>
      {pictures.length !== 0 && (
        <ul className={styles.ImageGallery}>
          {pictures.map(picutre => {
            return (
              <li className={styles.ImageGalleryItem} key={picutre.id}>
                <ImageGalleryItem
                  smallImageUrl={picutre.previewURL}
                  largeImageUrl={picutre.largeImageURL}
                  alt={picutre.tags}
                  openModal={openModal}
                />
              </li>
            );
          })}
        </ul>
      )}

      {isLoading && <ThreeDots />}

      {pictures.length !== 0 && !isLoading && (
        <Button
          type="button"
          label="Load more..."
          width="140px"
          whenClicked={loadMoreImages}
        />
      )}

      {isModalOpen && <Modal src={src} alt={alt} closeModal={toggleModal} />}
    </section>
  );
};

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
};

ImageGallery.defaultProps = {
  searchQuery: '',
};

export default ImageGallery;
