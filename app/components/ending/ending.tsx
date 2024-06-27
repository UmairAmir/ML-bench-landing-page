import React from 'react'

const Ending = () => {
  return (
    <section className="relative h-96 bg-cover bg-center mt-14 mb-14" style={{ backgroundImage: "url('/ending.jpg')" }}>
      <div className="absolute inset-0 bg-custom-blue opacity-85"></div>
      <div className="flex items-center justify-center h-full relative z-10">
        <div className="text-center text-white md: p-5">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">Ready To Get Started</h1>
          <p className="text-lg md:text-xl max-w-5xl">Achieve your business goals with our successful Methodology, renowned for its structured planning and consistent results.</p>
          <button className='btn bg-transparent text-white w-44 mt-4'>Let's Talk</button>
        </div>
      </div>
    </section>
  )
}

export default Ending
