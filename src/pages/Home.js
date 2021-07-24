import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

import CookieConsent from "react-cookie-consent";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <CookieConsent
        location="bottom"
        buttonText="I accept all cookies"
        enableDeclineButton
        declineButtonText="I decline all cookies"
        cookieName="google_analytics"
        buttonStyle={{ color: "#fff", background: "#428061"}}
        buttonClasses="text-sm"
        declineButtonClasses="text-sm"
        expires={150}
        onAccept={() => {
        }}
        onDecline={() => {}}
      >
        This website uses cookies and Google Analytics to enhance the user experience.{" "}
        View the <Link to="/privacypolicy" className="text-teal-300 underline hover:text-teal-600 transition duration-150 ease-in-out">Privacy Policy</Link> for more information.
      </CookieConsent>

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        {/* <Testimonials /> */}
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;