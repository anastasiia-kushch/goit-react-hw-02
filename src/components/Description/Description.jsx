import styles from '../Description/Description.module.css'

export default function Description({ name, message }) { // в пропах отримали значення name і message і підставляємо їх відповідно
  return (
    <>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.p}>{message}</p>
    </>
  );
}
