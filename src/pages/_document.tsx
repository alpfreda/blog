import { Html, Head, Main, NextScript } from 'next/document'

const Document = (props: any) => {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Front end developer from Istanbul'
        />
        <meta property='og:site_name' content='alpfreda.me' />
        <meta
          property='og:description'
          content='Front end developer from Istanbul'
        />
        <meta property='og:title' content='Mehdi Akbarzadeh' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Mehdi Akbarzadeh' />
        <meta
          name='twitter:description'
          content='Restore your old photos and keep the memories alive.'
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
