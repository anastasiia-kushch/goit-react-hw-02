import { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

const getInitialFeedback = () => {
  const savedFeedback = window.localStorage.getItem('feedback');
  return savedFeedback
    ? JSON.parse(savedFeedback)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

function App() {
  const [feedback, setFeedback] = useState(getInitialFeedback);

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback), [
      feedback,
    ]);
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} />
      <Feedback feedback={feedback} totalFeedback={totalFeedback} />
    </>
  );
}

export default App;
