import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
  } from "next/document";
  
  class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }
  
    render() {
      return (
        <Html lang="en">
          <Head>
            {/* Example: Google Fonts */}
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
              rel="stylesheet"
            />
            {/* Any other meta tags */}
          </Head>
          <body className="bg-gray-50">
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
  