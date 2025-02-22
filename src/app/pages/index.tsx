import Layout from "../components/layout/Layout";
import SeoHead from "../components/common/SeoHead";
import CookieBanner from "../components/common/CookieBanner";

export default function Home() {
  return (
    <Layout>
      <SeoHead title="Home-Grown | Home" />
      <section className="hero py-20 bg-white text-center">
        <h1 className="text-4xl font-bold text-primary">Welcome to Home-Grown</h1>
        <p className="mt-4 text-gray-700">
          Empowering local farmers, businesses, and communities.
        </p>
        <button className="mt-6 bg-primary text-white px-6 py-2 rounded shadow">
          Join Our Community
        </button>
      </section>
      <CookieBanner />
    </Layout>
  );
}
