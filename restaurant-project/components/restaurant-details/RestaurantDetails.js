import styles from "./RestaurantDetails.module.css";
import MapPin from "../icons/MapPin";
import Coffee from "../icons/Coffee";
import Table from "../icons/Table";
import Flame from "../icons/Flame";
// import Search from "../icons/Search";
// import Card from "../common/cards/filtered-cards/Card";
// import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const RestaurantDetails = () => {
  const position = [51.505, -0.09];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_left}>
          <header className={styles.header}>
            <h1 className={styles.primary_title}>MyRestaurant</h1>
          </header>
          <main className={styles.main}>
            <div className={styles.body_wrapper}>
              <div className={styles.galerie_container}>
                <div className={styles.galerie_left}>
                  <div className={styles.img_wrapper_big}>
                    <img src="/images/res-big.png" alt="image" />
                  </div>
                </div>
                <div className={styles.galerie_right}>
                  <div className={styles.img_wrapper_small}>
                    <img src="/images/res-big.png" alt="image" />
                  </div>
                  <div className={styles.img_wrapper_small}>
                    <img src="/images/res-big.png" alt="image" />
                  </div>
                  <div className={styles.img_wrapper_small}>
                    <img src="/images/res-big.png" alt="image" />
                  </div>
                </div>
              </div>

              <div className={styles.price_wrapper}>
                <div className={styles.title_wrapper}>
                  <h1 className={styles.title}>Trattioria de papa</h1>
                  <div className={styles.price}>from 300DH</div>
                </div>
                <div className={styles.adress}>6, rue d'Avignon (Chellah)</div>
              </div>
              <div className={styles.details}>
                <div className={styles.details_container}>
                  <MapPin />
                  <div className={styles.detail_wrapper}>
                    <p className={styles.detail_title}>Distance</p>
                    <p className={styles.detail_data}>4 Km</p>
                  </div>
                </div>
                <div className={styles.details_container}>
                  <Coffee />
                  <div className={styles.detail_wrapper}>
                    <p className={styles.detail_title}>Cuisine</p>
                    <p className={styles.detail_data}>Italien</p>
                  </div>
                </div>
                <div className={styles.details_container}>
                  <Table />
                  <div className={styles.detail_wrapper}>
                    <p className={styles.detail_title}>Decor</p>
                    <p className={styles.detail_data}>Modern</p>
                  </div>
                </div>
                <div className={styles.details_container}>
                  <Flame />
                  <div className={styles.detail_wrapper}>
                    <p className={styles.detail_title}>Temp</p>
                    <p className={styles.detail_data}>Air contioning</p>
                  </div>
                </div>
              </div>
              <div className={styles.description_container}>
                <h3 className={styles.desc_title}>Description</h3>
                <p className={styles.desc_text}>
                  Service très très lent et un plat immangeable proche des plats
                  surgelés. Vivement déconseillé pour les personnes souhaitant
                  passer une bonne soirée. Expérience inoubliable plutôt dans le
                  sens négatif. A ne jamais remettre les pieds. Une large
                  variété de plats et tapas à déguster, seul ou à plusieurs.
                  Après plusieurs visites, le constat reste le même : c est très
                  bon !
                </p>
              </div>
            </div>
          </main>
        </div>
        <div className={styles.wrapper_right}>
          {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup></Popup>
            </Marker>
          </MapContainer> */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
