import styles from '../Feedback/Feedback.module.css';

export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
}) {
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <>
      <div className={styles.div}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
      <div className={styles.div}>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}%</p>
      </div>
    </>
  );
}

// в пропі ми отримали обʼєкт фідбек, який тут ми деструктуризували, щоб підставляти значення в <p>,
// також тут рахуємо значення positiveFeedback за готовою формулою
