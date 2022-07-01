import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackLeave = e => {
    const keyOption = e.target.name;
    this.setState(prevState => ({
      [keyOption]: prevState[keyOption] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((sum, current) => sum + current);
  };

  countPositiveFeedbackPercentage = () => {
    let { good } = this.state;
    let total = this.countTotalFeedback();
    return (good * 100) / total;
  };
  static propTypes = {};

  render() {
    let options = Object.keys(this.state);
    let total = this.countTotalFeedback();
    let positive = this.countPositiveFeedbackPercentage();

    let statistics = {
      ...this.state,
      total,
      positive: isNaN(positive) ? 0 : positive,
    };

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onFeedbackLeave={this.onFeedbackLeave}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics dataFeedback={statistics}></Statistics>
          )}
        </Section>
      </>
    );
  }
}
