import styles from '../Notification/Notification.module.css'

export default function Notification({ message }) { // в пропах отримали значення message і підставляємо його відповідно
  return <p className={styles.p}>{message}</p>;
}
