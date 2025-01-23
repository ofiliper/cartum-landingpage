import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Price from "./Components/Price";
import Footer from "./Components/Footer";

const Home = () => {
    return (
        <div className="font-sans">
            <Header />
            <Banner />
            <About />
            <Price />
            <Footer />
        </div>
    );
};

export default Home;
