import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ smallImageUrl, largeImageUrl, alt, openModal }) => {
  const handleClick = event => {
    openModal(event.target.dataset.largeimage, alt);
  };

  return (
    <img
      src={smallImageUrl}
      alt={alt}
      className={styles.ImageGalleryItemImage}
      data-largeimage={largeImageUrl}
      onClick={handleClick}
    />
  );
};

ImageGalleryItem.propTypes = {
  smallImageUrl: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  openModal: PropTypes.func.isRequired,
};

ImageGalleryItem.defaultProps = {
  alt: 'Picture without tags',
};

export default ImageGalleryItem;
