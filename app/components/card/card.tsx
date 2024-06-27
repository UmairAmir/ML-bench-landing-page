import React from 'react';

interface CardProps {
  imageUrl: string;
  headingStart: string;
  heading: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, headingStart, heading, paragraph }) => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-7xl mt-14">
      <div className="md:flex">
        {/* Image Section */}
        <div className={`md:w-1/3 ${imageUrl != '/card1.png' ? 'p-10' : ''}`}>
            <img className="object-cover h-64 md:h-auto" src={imageUrl} alt="Card" />
        </div>
        {/* Text Section */}
        <div className="p-4 md:w-2/3 flex justify-center flex-col">
          <h1 className="text-3xl md:text-3xl font-bold mb-4 md: p-3"><span className='text-custom-blue'>{headingStart}</span> {heading}</h1>
          <p className="text-gray-700">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
