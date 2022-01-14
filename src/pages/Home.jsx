import React from 'react';
import {Container} from "react-bootstrap";
import HomeSlider from "../components/HomeSlider";
import LastProducts from "../components/Product/LastProducts";

const Home = () => {
  return (
    <Container>
      <HomeSlider/>
      <LastProducts/>
    </Container>
  );
};

export default Home;