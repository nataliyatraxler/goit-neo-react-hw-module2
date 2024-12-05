
import PropTypes from 'prop-types';

const Feedback = ({ feedback, positivePercentage, totalFeedback }) => (
  <div>
    <h3>Statistics</h3>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total: {totalFeedback}</p>
    <p>Positive feedback: {positivePercentage.toFixed(2)}%</p>
  </div>
);

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  positivePercentage: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Feedback;
