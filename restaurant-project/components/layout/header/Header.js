import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.primary_title}>MyRestaurant</h1>
        <div className={styles.btn_wrapper}>
          <button type="button" className={styles.login_btn}>
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
