import { Outlet } from "react-router";
import styles from "./navLayout.module.css";
import Header from "../../header/Header";

export default function NavLayout() {
  return (
    <div className={styles.frame}>
      <Header />
      <Outlet />
    </div>
  );
}
