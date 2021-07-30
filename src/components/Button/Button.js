import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ type, label, width, whenClicked }) => {
  return (
    <button
      className={styles.Button}
      type={type}
      style={{ width: width }}
      onClick={() => whenClicked(label)}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  width: PropTypes.string,
  whenClicked: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  label: 'Button',
  width: '80px',
  whenClicked: () => {
    alert('Button clicked');
  },
};

export default Button;
