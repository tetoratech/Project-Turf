import React from 'react';

const BookNowSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-bgColor p-4 -mt-64">
      <h3 className="text-lg font-bold mb-4 text-center">
      "Game On: Book Your Perfect Sports
      Venue Instantly!"
      </h3>
      <button className="px-6 py-3 text-white bg-primaryColor rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
        Book Now
      </button>
    </section>
  );
};

export default BookNowSection;
