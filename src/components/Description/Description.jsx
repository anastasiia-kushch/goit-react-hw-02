export default function Description({ name, message }) { // в пропах отримали значення name і message і підставляємо їх відповідно
  return (
    <>
      <h1>{name}</h1>
      <p>{message}</p>
    </>
  );
}
