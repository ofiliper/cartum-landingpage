import React from "react";
import Header from "../../shared/Header";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Price from "./Components/Price";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";

const Home = () => {
    return (
        <div className="font-sans">
            <Header />
            <Banner />
            <About />
            <Faq />
            <Price />
            <Footer />
        </div>
    );
};

export default Home;
