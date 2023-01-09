import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img_wrapper}>
          <img src="/images/res-cover.png" alt="restaurant image" />
        </div>
        <div className={styles.data_wrapper}>
          <h6 className={styles.name}>Anchor & James</h6>
          <p className={styles.adress}>Moroccan | Downtown union street</p>
          <p className={styles.price}>30$</p>
          <div className={styles.rating_wrapper}>stars</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
