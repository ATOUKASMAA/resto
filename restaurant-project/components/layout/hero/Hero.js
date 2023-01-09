import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title_wrapper}>
          <h2 className={styles.secondary_title}>
            Stop looking and find restaurants <br />
            near to you.
          </h2>
          <form className={styles.form_wrapper}>
            <input
              type="text"
              className={styles.input}
              placeholder="Search for Restaurants by Name, Cuisine, Location"
            ></input>
            <button type="submit" className={styles.form_btn}>
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
