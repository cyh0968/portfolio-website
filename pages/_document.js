import Document, { Html, Head, Main, NextScript } from 'next/document';

const URL = 'https://yohan-choi.com';
const FAVICON_URL = URL + '/favicon.ico';
const PREVIEW_URL = URL + '/images/preview.png';

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
          <link rel='shortcut icon' href={FAVICON_URL} />
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
          <meta property='og:url' content={URL} />
          <meta property='og:image' content={PREVIEW_URL} />
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
