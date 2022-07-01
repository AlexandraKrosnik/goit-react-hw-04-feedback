import { Component } from 'react';
import { StatisticList, StatisticItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export default class Statistics extends Component {
  render() {
    let { good, neutral, bad, total, positive } = this.props.dataFeedback;

    return (
      <StatisticList>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>
        <StatisticItem>Total: {total}</StatisticItem>
        <StatisticItem>
          Positive feedback: {Math.round(positive)}%
        </StatisticItem>
      </StatisticList>
    );
  }
}

Statistics.propTypes = {
  dataFeedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
  }),
};
