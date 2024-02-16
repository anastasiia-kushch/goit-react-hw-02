import Notification from '../Notification/Notification';

export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
}) {
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  if (totalFeedback === 0) {
    return <Notification />;
  } else {
    return (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}%</p>
      </>
    );
  }
}
