import styles from "./RestaurantList.module.css";
import Card from "../common/cards/restaurant-cards/Card";

const RestaurantList = () => {
  const restaurants = [
    {
      img: "/images/res-cover.png",
      name: "Anchor & James",
      adress: " Downtown union street",
      price: "30",
      rating: 3,
    },
    {
      img: "/images/res-cover.png",
      name: "Anchor & James",
      adress: " Downtown union street",
      price: "30",
      rating: 3,
    },
    {
      img: "/images/res-cover.png",
      name: "Anchor & James",
      adress: " Downtown union street",
      price: "30",
      rating: 3,
    },
    {
      img: "/images/res-cover.png",
      name: "Anchor & James",
      adress: " Downtown union street",
      price: "30",
      rating: 3,
    },
    {
      img: "/images/res-cover.png",
      name: "Anchor & James",
      adress: " Downtown union street",
      price: "30",
      rating: 3,
    },
    {
      img: "/images/res-cover.png",
      name: "Anchor & James",
      adress: " Downtown union street",
      price: "30",
      rating: 3,
    },
  ];
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.primary_title}>Top restaurants</h2>
        <section className={styles.res_list}>
          {restaurants.map((res, i) => {
            return <Card key={i} restaurant={res} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default RestaurantList;
