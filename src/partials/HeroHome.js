import React, { useEffect, useState } from 'react';
import Modal from '../utils/Modal';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);


  function nextSlide() {
    let activeSlide = document.querySelector('#slidewrapper .slide.translate-x-0');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('-translate-x-full');

    let nextSlideEl = activeSlide.nextElementSibling;
    nextSlideEl.classList.remove('translate-x-full');
    nextSlideEl.classList.add('translate-x-0');

    setTimeout(nextSlide, 10000);

    const activeClone = activeSlide.cloneNode(true)
    activeClone.classList.remove('-translate-x-full')
    activeClone.classList.add('translate-x-full')
    document.querySelector('#slidewrapper').lastChild.after(activeClone)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 12000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <section className="relative">
      <div className="relative" id="slidewrapper">
        <div className="absolute inset-0 w-screen h-screen text-white flex items-start justify-center text-5xl transition-all ease-in-out duration-2000 transform translate-x-0 slide">
          <img className="hidden sm:block md:max-w-screen mx-0 opacity-15" src={require('../images/mtg-wallpaper.jpg').default} alt="Background slide 1" />
        </div>
        <div className="absolute inset-0 w-screen h-screen text-white flex items-start justify-center text-5xl transition-all ease-in-out duration-2000 transform translate-x-full slide">
          <img className="hidden sm:block md:max-w-screen mx-0 opacity-15" src={require('../images/pokemon-wallpaper.jpg').default} alt="Background slide 2" />
        </div>
        <div className="absolute inset-0 w-screen h-screen text-white flex items-start justify-center text-5xl transition-all ease-in-out duration-2000 transform translate-x-full slide">
          <img className="hidden sm:block md:max-w-screen mx-0 opacity-15" src={require('../images/fab-wallpaper.jpg').default} alt="Background slide 3" />
        </div>
      </div>

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">The backend for your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">specs</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Spec tracking for trading cards and other collectibles. For private collectors, sellers, or businesses, we solve the problems that come with an inventory, collection, and sales.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#subscribe">Register</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#learnMore">Learn more</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src={require('../images/workplace.jpg').default} width="768" height="432" alt="Hero" />
              </div>
            </div>

            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;