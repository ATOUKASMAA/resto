import styles from "./Card.module.css";
import Coffee from "../../../icons/Coffee";
import DollarSign from "../../../icons/DollarSign";
import MapPin from "../../../icons/MapPin";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img_wrapper}>
          <img src="/images/four.png" alt="restaurant image" />
        </div>
        <div className={styles.data_wrapper}>
          <div className={styles.title_container}>
            <div className={styles.title_wrapper}>
              <h6 className={styles.title}>Trattoria del papa</h6>
              <div className={styles.rating}>5</div>
            </div>
            <p className={styles.adress}>6, rue d Avignon (Chellah)</p>
          </div>
          <div className={styles.details_container}>
            <div className={styles.data}>
              <MapPin /> 4km
            </div>
            <div className={styles.data}>
              <Coffee /> Italien
            </div>
            <div className={styles.data}>
              <DollarSign /> 300DH - 700DH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
