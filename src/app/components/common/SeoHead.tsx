import Head from "next/head";

interface SeoHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

const SeoHead = ({
  title = "Home-Grown",
  description = "Bringing community, farmers, and local businesses together.",
  ogImage = "/og-image.jpg",
}: SeoHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Open Graph / Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default SeoHead;
