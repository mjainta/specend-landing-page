import React from 'react';

import Header from '../partials/Header';

function SignUp() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">About us.</h1>
              </div>

              {/* Form */}
              <div className="max-w-7xl mx-auto text-lg">

                <p className="pb-4">Last updated: July 23, 2021</p>

                <h2 className="h2 pb-4 pt-2">Impressum</h2>
                <p className="pb-4">The following information (Impressum) is required under German law.</p>
                <p className="">Owner of this website:</p>
                <p className="">Martin Jainta</p>
                <p className="">Moosweg 1</p>
                <p className="">91623 Sachsen b. Ansbach</p>
                <p className="">Germany</p>
                <p className="pb-4">Email: specend.project@gmail.com</p>

                <h4 className="h4 pb-1 text-gray-800">Online Dispute Resolution website of the EU Commission</h4>
                <p className="pb-4">In order for consumers and traders to resolve a dispute out-of-court, the European Commission developed the Online Dispute Resolution Website: <a href="www.ec.europa.eu/consumers/odr" className="text-blue-600 hover:test-blue-700" target="_blank">www.ec.europa.eu/consumers/odr</a></p>

                <h4 className="h4 pb-1 text-gray-800">Legal disclaimer</h4>
                <p className="pb-4">The contents of these pages were prepared with utmost care. Nonetheless, we cannot assume liability for the timeless accuracy and completeness of the information.</p>
                <p className="pb-4">Our website contains links to external websites. As the contents of these third-party websites are beyond our control, we cannot accept liability for them. Responsibility for the contents of the linked pages is always held by the provider or operator of the pages.</p>
                
                <h4 className="h4 pb-1 text-gray-800">Contact Us</h4>
                <p className="pb-4">If you have any questions about this Service, You can contact us:</p>
                <ul className="list-disc pl-12 pb-4">
                    <li>By email: specend.project@gmail.com</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignUp;