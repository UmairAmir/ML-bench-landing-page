import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-96 bg-cover bg-center ">
      <div className="relative h-full" style={{ backgroundImage: "url('/hero.png')" }}>
        <div className="absolute inset-0 bg-custom-blue opacity-85"></div>
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white relative z-10">
            <h1 className="text-4xl md:text-4xl font-bold mb-4 md: p-3">Mobile App Development</h1>
            <p className="text-lg md:text-xl max-w-5xl md: p-4">Creating captivating and user-friendly mobile applications that engage your audience and enhance your brand presence is a crucial aspect of business.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
