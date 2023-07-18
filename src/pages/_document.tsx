import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = (props: any) => {
  return (
    <Html lang='en'>
      <Head>
        <title>Mehdi Akbarzadeh - Frontend Engineer</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <meta
          name='description'
          content='Skilled and experienced front-end engineer with over 6 years of experience in the high-tech industry. Proficient in React and Angular, with a deep understanding of the front-end development lifecycle. Led a team in developing a successful web app that boosted sales by 200%. Driven by learning and development, and eager to tackle more complex problems and continue finding ways to maximize user efficiency.'
        />
        <meta
          property='og:site_name'
          content='alpfreda.me'
        />
        <meta
          property='og:description'
          content='Skilled and experienced front-end engineer with over 6 years of experience in the high-tech industry. Proficient in React and Angular, with a deep understanding of the front-end development lifecycle. Led a team in developing a successful web app that boosted sales by 200%. Driven by learning and development, and eager to tackle more complex problems and continue finding ways to maximize user efficiency.'
        />
        <meta
          property='og:title'
          content='Mehdi Akbarzadeh - Frontend Engineer'
        />
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:title'
          content='Mehdi Akbarzadeh'
        />
        <meta
          name='twitter:description'
          content='Skilled and experienced front-end engineer with over 6 years of experience in the high-tech industry. Proficient in React and Angular, with a deep understanding of the front-end development lifecycle. Led a team in developing a successful web app that boosted sales by 200%. Driven by learning and development, and eager to tackle more complex problems and continue finding ways to maximize user efficiency.'
        />
        <meta
          property='og:image'
          content='/avatar.png'
        />
        <meta
          name='twitter:image'
          content='/avatar.png'
        />
        <link
          href='/favicon.ico'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/favicon.ico'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/favicon.ico'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
        <link
          color='#4a9885'
          href='/favicon.ico'
          rel='mask-icon'
        />
        <meta
          content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
          name='robots'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.googleAnalyticsCode}`}
      />

      <Script strategy='lazyOnload'>
        {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.googleAnalyticsCode}', {
                  page_path: window.location.pathname,
                  });
              `}
      </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
