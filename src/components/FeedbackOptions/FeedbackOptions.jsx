import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.container}>
    {options.map(option => (
      <button
        key={option}
        type="button"
        name={option}
        onClick={() => onLeaveFeedback(option)}
        className={css.btn}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};