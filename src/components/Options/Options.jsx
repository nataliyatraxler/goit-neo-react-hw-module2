import PropTypes from 'prop-types';
import styles from './Options.module.css';

function Options({ updateFeedback, totalFeedback }) {
  return (
    <div className={styles.optionsContainer}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => updateFeedback('reset')}>Reset</button>
      )}
    </div>
  );
}

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;