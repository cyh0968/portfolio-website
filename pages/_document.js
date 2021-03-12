import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          <meta name='description' content="Yohan's portfolio website" />
          <meta name='og:title' content="Yohan's website" />
          <meta
            property='og:description'
            content="This is Yohan's portfolio website introducing projects and blog posts."
          />
          <meta property='og:url' content='http://yohan-choi.com' />
          <meta property='og:image' content='/images/preview.png' />
          <meta name='msapplication-TileColor' content='#da532c' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
