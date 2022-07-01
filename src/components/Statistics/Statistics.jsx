import { StatisticList, StatisticItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ dataFeedback }) => {
  let { good, neutral, bad, total, positive } = dataFeedback;

  return (
    <StatisticList>
      <StatisticItem>Good: {good}</StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feedback: {Math.round(positive)}%</StatisticItem>
    </StatisticList>
  );
};

Statistics.propTypes = {
  dataFeedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
  }),
};
