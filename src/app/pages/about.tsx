import Layout from "../components/layout/Layout";
import SeoHead from "../components/common/SeoHead";

export default function About() {
  return (
    <Layout>
      <SeoHead title="Home-Grown | About Us" />
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-bold text-primary">Our Mission & Vision</h2>
        <p className="mt-4 text-gray-700">
          Home-Grown is dedicated to fostering sustainable, community-driven agriculture.
        </p>
        <h3 className="text-xl font-bold mt-8">Meet the Team</h3>
        <p className="mt-2 text-gray-700">
          Learn more about our founders and volunteers...
        </p>
      </section>
    </Layout>
  );
}
