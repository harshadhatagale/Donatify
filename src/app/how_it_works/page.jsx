import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">How It Works</h2>
        
        <div className="grid gap-8 md:grid-cols-3">

          {/* Step 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Choose What to Donate</h3>
            <p className="text-gray-600">
              Whether it’s money, old clothes, or unused items, select what you’d like to donate to make a difference.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fill Out the Donation Form</h3>
            <p className="text-gray-600">
              Provide your details and specify the items you’re donating in a simple, easy-to-use form.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">We Take Care of the Rest</h3>
            <p className="text-gray-600">
              Once you submit the form, we’ll coordinate the pickup or delivery and ensure your donations reach those in need.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
