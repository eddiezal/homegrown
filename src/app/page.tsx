"use client";

import Link from "next/link";
// If you have a cookie banner or other custom components, import them:
// import CookieBanner from "../components/common/CookieBanner";
// import MapPlaceholder from "../components/placeholders/MapPlaceholder";
// import CRMPlaceholder from "../components/placeholders/CRMPlaceholder";

export default function HomePage() {
  return (
    <main className="bg-[#F9F9F9] min-h-screen text-gray-800">
      {/* 
         UNCOMMENT if you have a cookie banner component 
         <CookieBanner /> 
      */}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-primary text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Home-Grown</h1>
        <p className="max-w-xl text-lg">
          Connecting local farmers, businesses, and communities through sustainable,
          community-driven agriculture.
        </p>
        <Link
          href="/signup" // or wherever your sign-up route is
          className="mt-8 inline-block bg-white text-primary px-6 py-3 rounded font-semibold shadow hover:bg-gray-200 transition"
        >
          Join Our Community
        </Link>
      </section>

      {/* Key Value Props Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold text-primary">Why Home-Grown?</h2>
          <p className="mt-2 text-gray-700">
            Discover fresh, locally grown produce and support your community. We’re all about 
            sustainability, collaboration, and bringing neighbors together.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-primary mb-2">Support Local Farmers</h3>
            <p className="text-gray-700">
              Every purchase goes directly to hard-working farmers in your region.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Fresh &amp; Sustainable
            </h3>
            <p className="text-gray-700">
              Enjoy organic, responsibly grown produce with minimal travel time.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-primary mb-2">Community-Driven</h3>
            <p className="text-gray-700">
              Connect with neighbors, share knowledge, and build a stronger local network.
            </p>
          </div>
        </div>
      </section>

      {/* Optional Map or Services Placeholder Section */}
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800">Explore Your Local Providers</h2>
          <p className="mt-2 text-gray-800">
            Find farmers and businesses near you, and see what’s in season. 
          </p>

          {/* If you have a real map component, replace this placeholder */}
          <div className="mt-8 w-full h-64 bg-gray-300 flex items-center justify-center rounded">
            <p className="text-gray-800">Map Placeholder / Integration</p>
          </div>

          {/* Example button to direct somewhere else, e.g., /services */}
          <Link
            href="/services"
            className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
          >
            View Local Services
          </Link>
        </div>
      </section>

      {/* Secondary CTA / Info */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary">Join Our Movement</h2>
          <p className="mt-4 text-gray-700">
            Whether you’re a farmer, a local business, or a neighbor who just wants fresh food,
            there’s a place for you at Home-Grown.
          </p>
          <div className="flex flex-col md:flex-row md:justify-center gap-4 mt-8">
            <Link
              href="/signup?type=farmer" // example query param
              className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
            >
              I’m a Farmer
            </Link>
            <Link
              href="/signup?type=business"
              className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
            >
              I’m a Business
            </Link>
            <Link
              href="/signup?type=buyer"
              className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
            >
              I’m a Buyer
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-10 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold">
            Ready to Grow Your Community?
          </h2>
          <p className="mt-2 text-gray-100">
            Start now by exploring local offerings, volunteering, or spreading the word.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
