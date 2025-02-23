import Section from "@/ui/Section";
import Heading from "@/ui/Heading";
import Button from "@/ui/Button";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <Section bgColor="bg-primary" className="text-white text-center">
        <Heading level={1} color="text-white" className="mb-4">
          Welcome to Home-Grown
        </Heading>
        <p className="max-w-xl mx-auto mb-6">
          Connecting local farmers, businesses, and communities...
        </p>
        <Button variant="secondary">Join Our Community</Button>
      </Section>

      {/* Why Home-Grown */}
      <Section>
        <Heading level={2} className="mb-4">
          Why Home-Grown?
        </Heading>
        <ul className="space-y-4">
          <li><strong>Support Local Farmers:</strong> Every purchase goes directly to hard-working farmers.</li>
          <li><strong>Fresh &amp; Sustainable:</strong> Enjoy organic, responsibly grown produce.</li>
          <li><strong>Community-Driven:</strong> Connect with neighbors...</li>
        </ul>
      </Section>

      {/* Services / Map Placeholder */}
      <Section bgColor="bg-neutralBg" className="text-center">
        <Heading level={2} className="mb-4 text-primary">
          Explore Your Local Providers
        </Heading>
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded">
          Map Placeholder
        </div>
        <Button variant="primary" className="mt-8">View Local Services</Button>
      </Section>

      {/* Final CTA */}
      <Section bgColor="bg-primary" className="text-white text-center">
        <Heading level={2} color="text-white" className="mb-2">
          Join Our Movement
        </Heading>
        <p className="max-w-xl mx-auto mb-4">
          Whether you're a farmer, local business...
        </p>
        <Button variant="secondary">Sign Up Now</Button>
      </Section>
    </main>
  );
}
