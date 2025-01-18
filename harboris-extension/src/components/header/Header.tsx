import styles from "./header.module.css";
import { Link } from "react-router";

export default function Header() {
    return (
        <header className={styles.header}>
        <h1 className={styles.title}>Harboris</h1>
        <nav className={styles.iconsContainer}>
          <Link className={styles.iconContainer} to="/cart">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <Link className={styles.iconContainer} to="/profile">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
        </nav>
      </header>
    )
}