import PropTypes from 'prop-types';
import styles from './PageHeader.module.scss';

const PageHeader = ({ title }) => {
  return <div className={styles.PageHeader}>{title}</div>;
};

PageHeader.propTypes = {
  title: PropTypes.string,
};

PageHeader.defaultProps = {
  title: 'Where is your title?',
};

export default PageHeader;
