import React from 'react';
import { useHistory } from "react-router-dom";

import Header from '../partials/Header';

function SignUp() {
  let history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    let myForm = document.getElementById('subscribeForm');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => history.push("/subscribed")).catch((error) =>
      alert(error))
  }

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
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome. Be the first to benefit.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form name="subscribe"
                  id="subscribeForm"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="subscribe" />
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input id="email" required name="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Register</button>
                    </div>
                  </div>
                </form>
                <div className="text-sm text-gray-500 text-center mt-3">
                  By creating an account, you agree to our <a className="underline" href="/privacypolicy">privacy policy</a>.
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