import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
        <h1 className={styles.title}>Harboris</h1>
        <nav className={styles.iconsContainer}>
          <span className={styles.iconContainer}>
            <span className="material-symbols-outlined">shopping_cart</span>
          </span>
          <span className={styles.iconContainer}>
            <span className="material-symbols-outlined">account_circle</span>
          </span>
        </nav>
      </header>
    )
}