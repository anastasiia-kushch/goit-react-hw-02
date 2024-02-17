import styles from '../Options/Options.module.css';

export default function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <div className={styles.div}>
      <button className={styles.good} onClick={() => updateFeedback('good')}>Good</button>
      <button className={styles.neutral} onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button className={styles.bad} onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback !== 0 && <button className={styles.reset} onClick={resetFeedback}>Reset</button>}
    </div>
  );
}


// тут в пропах ми отримали функції updateFeedback, resetFeedback і значення totalFeedback. 
// На клік по кожній кнопці ми викликаємо функцію updateFeedback і підставляємо значення, щоб засетати його в обʼєкт
// ВАЖЛИВО передавати функцію саме так (як анонімну стрілочну): {() => updateFeedback('bad')}, якщо хочемо передати їй якісь значення, якщо значення передавати не потрібно, то можемо передавати як зазвичай {resetFeedback}

// далі умовний рендеринг(записуємо як jsx-вираз)! якщо totalFeedback не дорівнює 0 (тобто якісь значення вже записані), то ми показуємо кнопку ресет
// на клік по кнопці ресет викликаємо функцію resetFeedback і сетаємо значення по 0
