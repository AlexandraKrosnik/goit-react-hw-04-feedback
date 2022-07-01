import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedbackLeave = e => {
    const keyOption = e.target.name;
    switch (keyOption) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.log(`Error: feedback name - ${keyOption}`);
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    return (good * 100) / total;
  };

  let options = ['good', 'neutral', 'bad'];
  let total = countTotalFeedback();
  let positive = countPositiveFeedbackPercentage();

  let statistics = {
    good,
    neutral,
    bad,
    total,
    positive: isNaN(positive) ? 0 : positive,
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onFeedbackLeave={onFeedbackLeave}
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
};
