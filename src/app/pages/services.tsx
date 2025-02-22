import Layout from "../components/layout/Layout";
import SeoHead from "../components/common/SeoHead";
import MapPlaceholder from "../components/placeholders/MapPlaceholder";

export default function Services() {
  return (
    <Layout>
      <SeoHead title="Home-Grown | Services" />
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-bold text-primary">Our Services</h2>
        <p className="mt-4 text-gray-700">
          Discover local produce, connect with community events, and more.
        </p>
        {/* Map Feature Placeholder */}
        <div className="mt-8">
          <MapPlaceholder />
        </div>
      </section>
    </Layout>
  );
}
