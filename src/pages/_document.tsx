import { Html, Head, Main, NextScript } from 'next/document'

export enum TrackEvent {

}

type PlausibleArgs = [TrackEvent, () => void] | [TrackEvent] | any

declare global {
  const plausible: {
    (...args: PlausibleArgs): void
    q?: PlausibleArgs[]
  }

  interface Window {
    plausible?: typeof plausible
  }
}


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {process.env.NEXT_PUBLIC_VERCEL_ENV && <script
          defer
          data-domain={process.env.NEXT_PUBLIC_VERCEL_ENV == 'production' ? 'layerswap.io' : "testnet.layerswap.io"}
          src="https://plausible.io/js/script.tagged-events.js"
        />}
        {process.env.NEXT_PUBLIC_VERCEL_ENV && <script
          defer
          data-domain={process.env.NEXT_PUBLIC_VERCEL_ENV == 'production' ? 'layerswap.io' : "testnet.layerswap.io"}
          src="https://plausible.io/js/script.manual.js"
        />}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }',
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(c,l,a,r,i,t,y){  c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) }; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "hv7ogko9ja");',
          }}
        />
      </Head>
      <body className='bg-darkblue-950'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
