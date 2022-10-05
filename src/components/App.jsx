import { useState } from 'react';
import Feedback from './feedback/feedback';
import { Section } from './section/section';
import Statistics from './statistics/statistics';

function App() {
  const [status, setStatus] = useState({ good: 0, bad: 0, neutral: 0 });

  const onFeedbackStateChange = evt => {
    const { name } = evt.target;

    setStatus(prevState => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    return Object.values(status).reduce((acc, value) => acc + value, 0);
    // return status.good + status.neutral + status.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percent = (status.good / countTotalFeedback()) * 100;
    return Number.isNaN(percent) ? 0 : Math.round(percent);
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <Feedback
          options={Object.keys(status)}
          onLeaveFeedback={onFeedbackStateChange}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          message="There is no feedback"
          good={status.good}
          neutral={status.neutral}
          bad={status.bad}
          total={countTotalFeedback()}
          percentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
}

export default App;
