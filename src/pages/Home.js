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
    if (process.env.REACT_APP_GA_CODE) {
      initGA(process.env.REACT_APP_GA_CODE);
    }
  };

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
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
        buttonStyle={{ color: "#fff", background: "#428061"}}
        buttonClasses="text-sm"
        declineButtonClasses="text-sm"
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