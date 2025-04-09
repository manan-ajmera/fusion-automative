import React from 'react';
import Navbar from './navbar';
const HomePage = () => {
  return (
    <div class="w-full">
    {/* Navbar */}
      <Navbar />
      <div className="h-16"></div> {/* Spacer for fixed navbar */}

      {/* About Section */}
      <section id="about" className="relative min-h-screen px-6 py-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter"
          style={{
            backgroundImage: "url('./bg.png')", // Replace with your image path
            filter: "blur(12px)",
          }}
        ></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto space-y-6 text-center text-gray-900">
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
          Welcome to <span className="text-yellow-500">Fusion Automation</span>
        </h1>
        <p className="text-xl leading-relaxed">
          At Fusion Automation, we specialize in the repair and maintenance of special purpose machinery — from vending machines and weighing equipment to cash registers, photocopiers, and calculators. Since our inception on 31st August 2020, we've been committed to delivering reliable, high-quality services tailored to the needs of industries that depend on accuracy and consistency.
        </p>
        <p className="text-xl leading-relaxed">
          Based in Sanand GIDC, Ahmedabad, we serve businesses across Gujarat with prompt, professional, and cost-effective repair solutions. Whether you're running a manufacturing unit, retail outlet, or service-based setup, we help ensure your equipment runs smoothly — minimizing downtime and maximizing productivity.
        </p>
      </div>
    </section>

      {/* Services Section */}
      <section id="services" class="bg-gray-100 px-6 py-16">
        <div class="text-center space-y-4">
          <h2 class="text-3xl font-bold text-gray-800">Our Services</h2>
          <p class="text-lg text-gray-600">
            We understand the critical role that machinery and equipment play in your business operations. That's why we offer specialized repair and maintenance services tailored for a wide range of industrial and office-use machines.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div class="text-4xl mb-4">🔧</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Special Purpose Machinery Repair</h3>
            <p class="text-gray-600">
              We specialize in maintaining and restoring unique or custom-built machines used in various industries.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div class="text-4xl mb-4">⚖️</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Weighing Equipment Servicing</h3>
            <p class="text-gray-600">
              We offer calibration, repair, and maintenance services for digital and analog weighing systems.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div class="text-4xl mb-4">🥤</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Vending Machine Repairs</h3>
            <p class="text-gray-600">
              We handle repairs for vending machines including beverage dispensers, snack machines, and more.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div class="text-4xl mb-4">💰</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Cash Registers & POS System Maintenance</h3>
            <p class="text-gray-600">
              We provide timely maintenance and repair for cash registers, barcode scanners, and point-of-sale devices.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div class="text-4xl mb-4">🖨️</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Photocopier & Office Equipment Repairs</h3>
            <p class="text-gray-600">
              From photocopiers to printers, scanners, and multifunction devices - we offer reliable repair solutions.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div class="text-4xl mb-4">🧮</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Calculator, Typewriter & Miscellaneous Equipment</h3>
            <p class="text-gray-600">
              We also service legacy devices like typewriters, calculators, and other office tools.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" class="bg-gradient-to-r from-blue-100 via-teal-100 to-blue-200 px-6 py-16">
        <div class="text-center space-y-4">
          <h2 class="text-3xl font-bold text-gray-800">Our Team</h2>
          <p class="text-lg text-gray-600">
            Our success is driven by the dedication and expertise of our skilled technicians and support staff.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 class="text-xl font-bold text-gray-800 mb-2">👨‍🔧 Experienced Technicians</h3>
            <p class="text-gray-600">
              Our core technical team consists of professionals who have years of experience in servicing a wide variety of special purpose and industrial machinery.
            </p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 class="text-xl font-bold text-gray-800 mb-2">👥 Skilled Support Staff</h3>
            <p class="text-gray-600">
              From workshop assistants to logistics personnel, our support staff ensures seamless coordination and timely completion of every service request.
            </p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 class="text-xl font-bold text-gray-800 mb-2">📞 Responsive Service Coordinators</h3>
            <p class="text-gray-600">
              Our service coordination team ensures smooth communication, scheduling, and follow-up for all your service needs.
            </p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 class="text-xl font-bold text-gray-800 mb-2">🤝 Customer-Focused Culture</h3>
            <p class="text-gray-600">
              We believe in building long-term relationships with our clients through honesty, transparency, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" class="bg-gradient-to-r from-purple-100 via-pink-100 to-purple-200 px-6 py-16">
        <div class="text-center space-y-4">
          <h2 class="text-3xl font-bold text-gray-800">Need a Repair? Let's Talk.</h2>
          <p class="text-lg text-gray-600">
            We're here to help your machines run like new. Contact us today to schedule a service or request a quote.
          </p>
        </div>
        <div class="flex flex-col md:flex-row gap-8 mt-12">
          <div class="md:w-1/2 space-y-6">
            <div class="flex items-center space-x-4">
              <span class="text-2xl">📱</span>
              <p class="text-gray-600">+91 82002 39442 | +91 9714774634</p>
            </div>
            <div class="flex items-center space-x-4">
              <span class="text-2xl">📧</span>
              <p class="text-gray-600">fusionautomation301296@gmail.com</p>
            </div>
            <div class="flex items-center space-x-4">
              <span class="text-2xl">📍</span>
              <p class="text-gray-600">Sanand GIDC, Ahmedabad, Gujarat</p>
            </div>
          </div>
          <div class="md:w-1/2 text-black">
            <form class="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                class="w-full p-3 border border-gray-600 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                class="w-full p-3 border border-gray-600 rounded-lg"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                class="w-full p-3 border border-gray-600 rounded-lg"
              />
              <textarea
                placeholder="How can we help you?"
                class="w-full p-3 border border-gray-600 rounded-lg"
                rows="5"
              ></textarea>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

