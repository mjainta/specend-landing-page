import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';

function SignUp() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-8">
                <h1 className="h1 pb-4">Thank you.</h1>
                <img className="md:max-w-none mx-auto shadow-xl" src={require('../images/you-got-this.jpg').default} width="450" alt="Features bg" />
              </div>

              {/* Form */}
              <div className="text-center pb-12 md:pb-16">
                <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">You have successfully registered. We will contact you as soon as possible about options to contribute and your alpha access.</p>
                  <Link to="/" className="text-blue-600 hover:text-blue-700 transition duration-150 ease-in-out text-xl">Back to Home</Link>  
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignUp;