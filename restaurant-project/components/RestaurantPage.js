import React, { useState } from "react";
import Header from "./layout/header/Header";
import Hero from "./layout/hero/Hero";
import RestaurantList from "./restaurant-list/RestaurantList";
import FilteredRestaurants from "./filtered-restaurants/FilteredRestaurants";
import styles from "./RestaurantPage.module.css";

const RestaurantPage = () => {
  const [isFiltered, setisFiltered] = useState(false);

  let home = (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <Hero />
        <RestaurantList />
      </div>
    </div>
  );
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <Hero />
        <RestaurantList />
      </div>
    </div>
    // <FilteredRestaurants />
  );
};

export default RestaurantPage;
