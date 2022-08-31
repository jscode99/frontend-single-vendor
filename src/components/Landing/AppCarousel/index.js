import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";

import styles from "./index.module.sass";

const AppCarousel = () => {
  const data = [
    {
      url: "https://images.unsplash.com/photo-1577774438656-768f1e5d9ed6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyb3VzZWx8ZW58MHx8MHx8&w=1000&q=80",
      title: "One",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzBlTo1SRyBTmvvcjx7Cz5GNcMl80O_RUSOgOj-5U&s",
      title: "Two",
    },
  ];
  return (
    <Carousel
      infiniteLoop
      autoPlay
      stopOnHover
      swipeable
      dynamicHeight={true}
      animationHandler="fade"
      showThumbs={false}
      interval={5000}
      showStatus={false}
    >
      {data &&
        data.map((item, index) => (
          <Box className={styles.carousel_container} key={index}>
            <img
              src={item.url}
              alt="Carousel"
              className={styles.carousel_image}
            />
            <p className="legend">{item.title}</p>
          </Box>
        ))}
    </Carousel>
  );
};

export default AppCarousel;
