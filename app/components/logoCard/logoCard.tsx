import React from 'react';

interface CardProps {
  logoUrl: string;
  number: string;
  heading: string;
  paragraph: string;
}

const LogoCard: React.FC<CardProps> = ({ logoUrl, number, heading, paragraph }) => {
  return (
    <div className="bg-transparent rounded-lg overflow-hidden mx-auto max-w-md md:max-w-7xl mt-14 md:flex flex-col">
      {/* Logo Section */}
      <div className="p-4 md:w-1/4 flex justify-center items-center">
        <img className="w-14 h-24 object-contain" src={logoUrl} alt="Logo" />
      </div>

      {/* Number Section */}
      <div className="p-4 flex flex-row">
        <p className="font-bold">Step 0</p> 
        <div className="font-bold">{number}</div>
      </div>

      {/* Text Section */}
      <div className="p-4 md:w-1/2">
        <h2 className="text-xl font-bold mb-2">{heading}</h2>
        <p className="text-gray-700">{paragraph}</p>
      </div>

    </div>
  );
};

export default LogoCard;