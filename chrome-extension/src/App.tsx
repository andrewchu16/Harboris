import styles from "./app.module.css";
import Header from "./components/header/Header";

export default function App() {
  return (
    <div className={styles.frame}>
      <Header />
    </div>
  );
}
