import React from 'react';

const AccessBox = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-900 rounded-lg p-10 text-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-8">
        Here's how you're going to Access everything in 3 CLICKS!!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <div className="bg-blue-600 mx-auto rounded-full w-20 h-20 text-white font-bold text-4xl flex items-center justify-center mb-4">
            1
          </div>
          <p className="text-xl sm:text-2xl">Click "Get everything at 599RS" Button.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <div className="bg-blue-600 mx-auto rounded-full w-20 h-20 text-white font-bold text-4xl flex items-center justify-center mb-4">
            2
          </div>
          <p className="text-xl sm:text-2xl">Check Your Email, and What'sApp.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <div className="bg-blue-600 mx-auto rounded-full w-20 h-20 text-white font-bold text-4xl flex items-center justify-center mb-4">
            3
          </div>
          <p className="text-xl sm:text-2xl">Just Download and Use.</p>
        </div>
      </div>
      <p className="text-xl mt-8 text-center sm:text-xl md:text-2xl">
        Your purchase comes with a Lifetime Updates Policy, You will receive all the product updates on your email.
        We also send out random gifts and early access products to our buyers, so keep an eye out for our emails.
      </p>
      <button className="mb-8 mx-auto bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 transition transform mt-10 text-[25px] flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2L3 14h7v8l10-12h-7z" />
        </svg>
        Get Everything at 599rs
      </button>
    </div>
  );
};

export default AccessBox;
