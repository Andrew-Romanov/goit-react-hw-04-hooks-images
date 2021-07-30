import PropTypes from 'prop-types';
import styles from './MainContainer.module.scss';

const MainContainer = ({ children }) => {
  return <div className={styles.MainContainer}>{children}</div>;
};

MainContainer.propTypes = {
  children: PropTypes.node,
};

MainContainer.defaultProps = {
  children: <></>,
};

export default MainContainer;
