import styles from "./FilteredRestaurants.module.css";
import Search from "../icons/Search";
import Card from "../common/cards/filtered-cards/Card";
// import React from "react";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-markercluster";

const FilteredRestaurants = () => {
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
              <div className={styles.input_wrapper}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Search"
                ></input>
                <span className={styles.icon}>
                  <Search height={20} width={20} />
                </span>
              </div>

              <ul className={styles.res_list}>
                {Array.from({ length: 10 }).map((arr, i) => {
                  return <Card key={i} />;
                })}
              </ul>
            </div>
          </main>
        </div>
        <div className={styles.wrapper_right}>
          {
          
          
          /* <MapContainer
            className="markercluster-map"
            center={[51.0, 19.0]}
            zoom={4}
            maxZoom={18}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            <MarkerClusterGroup>
              <Marker position={[49.8397, 24.0297]} />
            </MarkerClusterGroup>
          </MapContainer> */
          
          }
        </div>
      </div>
    </div>
  );
};

export default FilteredRestaurants;
