import React from 'react';
import AboutImage from '../assets/images/About.jpg'; // Adjust the path as needed

const AboutUsSection = () => {
  return (
     
    <section className="bg-bgColor py-16 md:py-24 -mt-72">
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center md:items-start">
        {/* Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="text-lg md:text-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque erat in nisl hendrerit, nec malesuada ligula volutpat.
            Sed bibendum diam nec erat viverra, vel ultricies libero egestas.
            Curabitur aliquet mauris non sapien varius, nec vestibulum magna
            molestie. Suspendisse potenti. Aenean ac urna sit amet elit
            malesuada fermentum non id augue.
          </p>
          <a
            href="#read-more"
            className="bg-primaryColor text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primaryColorDark transition-colors"
          >
            Read More
          </a>
        </div>
        {/* Image */}
        <div className="md:w-1/2 md:ml-8 flex justify-center">
          <img
            src={AboutImage}
            alt="About Us"
            className="w-full h-auto object-cover rounded-lg md:rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
