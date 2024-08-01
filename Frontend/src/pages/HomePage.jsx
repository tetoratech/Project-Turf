import React from 'react';
import Header from '../components/Header'; // Import Header component
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUs';
import DetailsSection from '../components/DetailsSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BookNowSection from '../components/BookNow';

const HomePage = () => {
  return (
    <div>
        <Navbar/>
      {/* <Header /> */}
      <HeroSection/>
      <BookNowSection/>
      <AboutUsSection/>
      <DetailsSection/>
      <Footer/>
      <main className="container mx-auto p-4 text-center">
        {/* <h2 className="text-2xl font-semibold mb-4">Welcome to the Turf Booking App!</h2>
        <p className="text-lg">Book your favorite turf easily and quickly.</p> */}
      </main>
    </div>
  );
};

export default HomePage;
