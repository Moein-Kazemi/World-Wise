// import styles from "./SideFooter.module.css";
import styles from "./SideFooter.module.css";

function SideFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  );
}

export default SideFooter;
