import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-center mb-8">About Us</h2>

        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700">
            Welcome to <span className="font-bold text-blue-500">Our Donation Platform</span>, where we strive to connect generous donors with those in need. 
            Our mission is to make donating as easy and impactful as possible, ensuring that your contributions reach the right hands.
          </p>
        </div>

        {/* Mission, Vision, Core Values */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Mission */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To create a platform that bridges the gap between donors and those in need, fostering generosity and making it easier to help communities grow.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading platform for donations worldwide, where every individual has the opportunity to contribute to a better future.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
            <p className="text-gray-600">
              Transparency, compassion, and commitment. We believe in ethical practices and maintaining trust with our donors and beneficiaries.
            </p>
          </div>

        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h3>
          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                className="w-24 h-24 mx-auto mb-4 rounded-full"
                src="/avatar1.png"
                alt="Team Member 1"
              />
              <h4 className="text-xl font-semibold">Harshad Hatagale</h4>
              <p className="text-gray-500">CEO & Founder</p>
              <p className="text-gray-600 mt-4">
                Passionate about helping others, Harshad founded this platform to make donating simple and accessible for everyone.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                className="w-24 h-24 mx-auto mb-4 rounded-full"
                src="/avatar3.png"
                alt="Team Member 2"
              />
              <h4 className="text-xl font-semibold">Jane Smith</h4>
              <p className="text-gray-500">Head of Operations</p>
              <p className="text-gray-600 mt-4">
                With years of experience in managing nonprofit operations, Jane ensures every donation is handled efficiently and ethically.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                className="w-24 h-24 mx-auto mb-4 rounded-full"
                src="/avatar4.png"
                alt="Team Member 3"
              />
              <h4 className="text-xl font-semibold">Michael Lee</h4>
              <p className="text-gray-500">Director of Outreach</p>
              <p className="text-gray-600 mt-4">
                Michael is responsible for building relationships with partner organizations and expanding our outreach efforts.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
