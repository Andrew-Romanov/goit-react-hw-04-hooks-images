import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.scss';

const Searchbar = ({ whenSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') return;
    whenSubmit(searchQuery.trim());
    formReset();
  };

  const formReset = () => {
    setSearchQuery('');
  };

  return (
    <section className={styles.Searchbar}>
      <form className={styles.Searchbar__Form} onSubmit={handleSubmit}>
        <button className={styles.Searchbar__Button} type="submit">
          <span className={styles.Searchbar__ButtonLabel}>Search</span>
        </button>

        <input
          className={styles.Searchbar__Input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </section>
  );
};

Searchbar.propTypes = {
  whenSubmit: PropTypes.func,
};

Searchbar.defaultProps = {
  whenSubmit: () => {},
};

export default Searchbar;
