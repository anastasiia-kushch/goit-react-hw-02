import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import { data } from '../../data/data';

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
//функція ініціалізації фідбеку: якщо в локальному сховищі вже є однойменний ключ зі значеннями, то повертаємо його (не забуваємо парсити!!!),
//в іншому випадку повертаємо обʼєкт, в якому значення по нулям

function App() {
  const [feedback, setFeedback] = useState(getInitialFeedback);
  //записуємо сюди або існуюче значення feedback, або нульове

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback), [feedback]);
  });
  //використовуємо ефект, щоб відстежувати зміни для feedback (записали feedback в масив, що означає, що ефект спрацює при монтуванні і при кожному оновленні)

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  //у функцію updateFeedback ховаємо сеттер, який записує весь попередній фідбек (...prevFeedback) і оновлює значення для ключа з іменем [feedbackType] //так доступаємось до ключа: prevFeedback[feedbackType] //так доступаємось до значення і + 1

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  //в функції resetFeedback сетаємо фідбек з нульовими значеннями

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  //логічно робити ці підрахунки тут, бо саме тут ми відстежуємо зміни в обʼєкті feedback

  // повертаємо Description, в якому через пропси передаємо імʼя і повідомлення, які беремо х обʼєкта дата, щоб у майбутньому можна було динамічно підставляти значення

  // в Options через пропси передаємо функцію updateFeedback, resetFeedback і значення totalFeedback

  // далі умовний рендеринг (записуємо як jsx-вираз, а аргументи в дужках()) - якщо totalFeedback === 0 (тобто всі значення обʼєкта стану по 0), то виводимо компонент нотіфікейшн про те, що фідбеку ще нема, в іншому випадку (якщо якісь значенння вже записані) - показуємо компонент Feedback зі значеннями

  // в Notification пропом передаємо повідомлення так само: як і для компонента Description
  // в Feedback пропом передаємо обʼєкт feedback та значення totalFeedback для подальшої обробки всредині компонента
  return (
    <>
      <Description name={data.name} message={data.message} />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification message={data.notification} />
      ) : (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      )}
    </>
  );
}

export default App;
