import React, { useEffect } from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import { initGA } from "../utils/ga";

import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import { Link } from 'react-router-dom';

function Home() {
  const handleAcceptCookie = () => {
    initGA();
  };

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
    Cookies.remove("google_analytics");
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue("google_analytics");
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <CookieConsent
        location="bottom"
        buttonText="I accept all cookies"
        enableDeclineButton
        declineButtonText="I decline all cookies"
        cookieName="google_analytics"
        buttonWrapperClasses="pt-4 w-full text-center flex gap-2 place-content-center"
        buttonClasses="text-sm btn-sm text-white bg-teal-600 my-2"
        declineButtonClasses="text-sm btn-sm text-white bg-yellow-700 my-2"
        overlayClasses="inset-0 fixed w-screen h-screen z-40 top-0 bg-gray-400 bg-opacity-50"
        contentClasses="w-full text-center"
        containerClasses="m-2 bg-gray-700 text-white fixed md:inset-x-12 inset-y-1/3 max-h-96 z-50 rounded rounded-lg align-middle flex place-content-center flex-wrap"
        overlay={true}
        disableStyles={true}
        expires={150}
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
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