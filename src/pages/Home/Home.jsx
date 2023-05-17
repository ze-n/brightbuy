import React from "react";
import Hero from "../../components/Sections/Hero/Hero";
import heroImage from "../../assets/hero-img.png";
import BestSellingProducts from "./BestSellingProducts";

const Home = () => {
  return (
    <div>
      <Hero
        title="  Discover the Best Selection of Products for Your Lifestyle"
        subTitle="We offers a broad range of products to meet your needs."
        btnText="Shop Best Sellers"
        heroImg={heroImage}
      />
      <BestSellingProducts />
    </div>
  );
};

export default Home;
