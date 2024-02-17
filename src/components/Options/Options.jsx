export default function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback !== 0 && <button onClick={resetFeedback}>Reset</button>}
    </>
  );
}

// тут в пропах ми отримали функції updateFeedback, resetFeedback і значення totalFeedback. 
// На клік по кожній кнопці ми викликаємо функцію updateFeedback і підставляємо значення, щоб засетати його в обʼєкт
// ВАЖЛИВО передавати функцію саме так (як анонімну стрілочну): {() => updateFeedback('bad')}, якщо хочемо передати їй якісь значення, якщо значення передавати не потрібно, то можемо передавати як зазвичай {resetFeedback}

// далі умовний рендеринг(записуємо як jsx-вираз)! якщо totalFeedback не дорівнює 0 (тобто якісь значення вже записані), то ми показуємо кнопку ресет
// на клік по кнопці ресет викликаємо функцію resetFeedback і сетаємо значення по 0
