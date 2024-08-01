import React from 'react';

const DetailsSection = () => {
  const details = [
    {
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 10H26V12H19V10ZM19 15H26V17H19V15ZM19 20H26V22H19V20ZM6 10H13V12H6V10ZM6 15H13V17H6V15ZM6 20H13V22H6V20Z" fill="black"/>
        <path d="M28 5H4C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V25C2 25.5304 2.21071 26.0391 2.58579 26.4142C2.96086 26.7893 3.46957 27 4 27H28C28.5304 27 29.0391 26.7893 29.4142 26.4142C29.7893 26.0391 30 25.5304 30 25V7C30 6.46957 29.7893 5.96086 29.4142 5.58579C29.0391 5.21071 28.5304 5 28 5ZM4 7H15V25H4V7ZM17 25V7H28V25H17Z" fill="black"/>
        </svg>
        
      ),
      heading: 'Book',
      content: 'Once you’ve found the perfect ground, court or gym, Connect with the venue through the Book Now Button to make online booking & secure easier payment',
    },
    {
      svg: (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_384_662)">
        <path d="M3.94338 20.1127C1.52703 18.0181 0 14.9364 0 11.5C0 7.17675 2.41684 3.41463 5.98112 1.47374C6.57822 1.31303 7.17663 1.15723 7.77629 1.00637C8.85877 0.734147 9.25997 1.40586 9.50273 1.77004C10.0616 2.6082 10.7476 4.07108 10.8176 5.91171C10.8972 8.00947 5.96059 15.4566 3.94338 20.1127ZM23 11.5C23 5.18959 17.8513 0.0739747 11.5 0.0739747C10.7891 0.0738927 10.0798 0.138957 9.38081 0.268352C10.7472 0.158158 11.794 0.386811 12.5998 2.09461C12.8506 2.62617 13.3214 3.91493 14.1116 5.75709C14.3878 6.40082 15.7042 9.24572 17.1661 12.5514C18.1608 14.8007 19.3878 16.7254 20.1423 19.0373C21.921 17.0256 23 14.3882 23 11.5ZM17.536 21.2267L17.0086 20.9201C15.5355 16.3602 14.0269 12.2093 12.42 8.84538C11.9901 7.80611 11.5315 7.73244 11.0904 8.71106C9.55205 12.1242 7.49319 16.9785 6.12388 20.5342L4.74591 20.7478C6.64242 22.1175 8.97602 22.9261 11.5 22.9261C13.714 22.9261 15.7814 22.3039 17.536 21.2267Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_384_662">
        <rect width="23" height="23" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
      ),
      heading: 'Play',
      content: 'Once you’ve found the perfect ground, court or gym, Connect with the venue through the Book Now Button to make online booking & secure easier payment',
    },
    {
      svg: (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_384_662)">
        <path d="M3.94338 20.1127C1.52703 18.0181 0 14.9364 0 11.5C0 7.17675 2.41684 3.41463 5.98112 1.47374C6.57822 1.31303 7.17663 1.15723 7.77629 1.00637C8.85877 0.734147 9.25997 1.40586 9.50273 1.77004C10.0616 2.6082 10.7476 4.07108 10.8176 5.91171C10.8972 8.00947 5.96059 15.4566 3.94338 20.1127ZM23 11.5C23 5.18959 17.8513 0.0739747 11.5 0.0739747C10.7891 0.0738927 10.0798 0.138957 9.38081 0.268352C10.7472 0.158158 11.794 0.386811 12.5998 2.09461C12.8506 2.62617 13.3214 3.91493 14.1116 5.75709C14.3878 6.40082 15.7042 9.24572 17.1661 12.5514C18.1608 14.8007 19.3878 16.7254 20.1423 19.0373C21.921 17.0256 23 14.3882 23 11.5ZM17.536 21.2267L17.0086 20.9201C15.5355 16.3602 14.0269 12.2093 12.42 8.84538C11.9901 7.80611 11.5315 7.73244 11.0904 8.71106C9.55205 12.1242 7.49319 16.9785 6.12388 20.5342L4.74591 20.7478C6.64242 22.1175 8.97602 22.9261 11.5 22.9261C13.714 22.9261 15.7814 22.3039 17.536 21.2267Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_384_662">
        <rect width="23" height="23" fill="white"/>
        </clipPath>
        </defs>
        </svg>
      ),
      heading: 'Play',
      content: 'Once you’ve found the perfect ground, court or gym, Connect with the venue through the Book Now Button to make online booking & secure easier payment',
    },
  ];

  return (
    <section className="bg-bgColor py-16 md:py-24 -mt-20">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          {details.map((detail, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-center text-center w-full md:w-1/3">
              {detail.svg}
              <h3 className="text-xl font-semibold mb-2">{detail.heading}</h3>
              <p className="text-lg">{detail.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
