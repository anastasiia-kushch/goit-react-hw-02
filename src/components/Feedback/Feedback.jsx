export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
}) {
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

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

// в пропі ми отримали обʼєкт фідбек, який тут ми деструктуризували, щоб підставляти значення в <p>,
// також тут рахуємо значення positiveFeedback за готовою формулою