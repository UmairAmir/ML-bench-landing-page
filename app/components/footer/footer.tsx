import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-white py-12">
      <div className='flex flex-col justify-center '>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-1">
            <h2 className="text-2xl font-bold"> mlbench</h2>
            <p className="text-white">
            MLBench, AI powered platform for enterprises to develop deep learning based solutions and deploy them to production with one end-to-end solution.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebook size={24} className="text-white hover:text-blue-500" />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <FaInstagram size={24} className="text-white hover:text-pink-500" />
              </a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <FaLinkedin size={24} className="text-white hover:text-blue-700" />
              </a>
              <a href="https://www.youtube.com" aria-label="Youtube">
                <FaYoutube size={24} className="text-white hover:text-red-700" />
              </a>
            </div>
          </div>
          {/* Columns with Unordered Lists */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-xl font-semibold">Home</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-grey-400">Services</a></li>
              <li><a href="#" className="text-white hover:text-grey-400">Portfolio</a></li>
              <li><a href="#" className="text-white hover:text-grey-400">Testimonials</a></li>
              <li><a href="#" className="text-white hover:text-grey-400">About Us</a></li>
              <li><a href="#" className="text-white hover:text-grey-400">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-xl font-semibold">Software Development</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-grey-400">Custom Software Development</a></li>
              <li><a href="#" className="text-white hover:text-grey-400">Web App Development</a></li>
              <li><a href="#" className="text-white hover:text-grey-400">UI/UX Design</a></li>
            </ul>
          </div>
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-xl font-semibold">Emerging Technologies</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-grey-400">Deep Learning</a></li>
              <li><a href="#" className="text-white hover:text-grey-400">Machine Learning</a></li>
              <li><a href="#" className="text-white hover:text-grey-400">Computer Visions</a></li>
            </ul>
          </div>
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-xl font-semibold">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-grey-400">SEO</a></li>
              <li><a href="#" className="text-white hover:text-grey-400">Wordpress</a></li>
              <li><a href="#" className="text-white hover:text-grey-400">Shopify</a></li>
              <li><a href="#" className="text-white hover:text-grey-400">Graphic Designing</a></li>
              <li><a href="#" className="text-white hover:text-grey-400">Social Media Markeing</a></li>
            </ul>
          </div>
        </div>
        <div className='flex gap-24 justify-center mt-16 flex-col md:flex-row px-4 md:px-0 md:pb-10'>

          <div>
            <h2 className="text-2xl"> Let's do it! -- </h2>
            <button className='btn bg-white text-custom-blue w-44 mt-4 rounded-2xl'>Let's Connect!</button>
          </div>

          <div>
            <div className='flex gap-2 mb-5'>
              <img src="/Point On Map.png" alt="Logo" />
              <h2 className="text-2xl"> Address </h2>
            </div>
            <p><span className='font-bold'>Italy: </span> Via Carroceto 154/E, Aprilia 04011 (LT), Italy</p>
            <p><span className='font-bold'>Pakistan: </span> BUILDING No 424 J3, JOHAR TOWN Lahore, Pakistan</p>
          </div>

          <div>
            <div className='flex gap-2 mb-5'>
              <img src="/Phone Rounded.png" alt="Logo" />
              <h2 className="text-2xl"> Phone Number </h2>
            </div>
            <p><span className='font-bold'>Italy: </span> +39 349 8531752</p>
            <p><span className='font-bold'>Pakistan: </span> +39 349 8531752</p>
          </div>

          <div>
            <div className='flex gap-2 mb-5'>
              <img src="/Phone Rounded.png" alt="Logo" />
              <h2 className="text-2xl"> Email Address </h2>
            </div>
            <p><span className='font-bold'>Italy & Pakistan: </span> info@ml-bench.com</p>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
