
const partnerQueryParams = [
  "from",
  "to",
  "lockAddress",
  "lockFrom",
  "lockTo",
  "lockAsset",
  "destAddress",
  "addressSource",
  "addressSource",
  "hideRefuel",
  "hideAddress",
  "hideFrom",
  "hideTo",
  "asset",
  "amount",
  "externalId",
  "signature",
  "timestamp",
  "apiKey",
  "balances",
  "account",
  "actionButtonText",
  "sourceExchangeName",
  "destNetwork",
  "lockNetwork",
  "lockExchange"
]
const DOCS_URL = 'https://docs.layerswap.io/user-docs'
const blog_redirects = [
  {
    source: '/userguide',
    destination: DOCS_URL,
    permanent: true
  },
  {
    source: '/blog/guide/Privacy_Policy',
    destination: `${DOCS_URL}/information/privacy-policy`,
    permanent: true,
  },
  {
    source: '/blog/guide/Terms_of_Service',
    destination: `${DOCS_URL}/information/terms-of-services`,
    permanent: true,
  },
  {
    source: '/blog/guide/How_to_transfer_crypto_from_Binance_to_L2',
    destination: `${DOCS_URL}/your-first-swap/exchange-greater-than-network/transfer-from-binance`,
    permanent: true,
  },
  {
    source: '/blog/guide/How_to_transfer_crypto_from_Bitfinex_to_L2',
    destination: `${DOCS_URL}/your-first-swap/exchange-greater-than-network/transfer-from-bitfinex`,
    permanent: true,
  },
  {
    source: '/blog/guide/How_to_transfer_crypto_from_BITTREX_GLOBAL_to_L2',
    destination: `${DOCS_URL}/your-first-swap/exchange-greater-than-network/transfer-from-bittrex-global`,
    permanent: true,
  },
  {
    source: '/blog/guide/How_to_transfer_crypto_from_Coinbase_to_L2',
    destination: `${DOCS_URL}/your-first-swap/exchange-greater-than-network/transfer-from-coinbase`,
    permanent: true,
  },
  {
    source: '/blog/guide/How_to_transfer_crypto_from_cryptocom_to_L2',
    destination: `${DOCS_URL}/your-first-swap/exchange-greater-than-network/transfer-from-crypto.com`,
    permanent: true,
  },
  {
    source: '/blog/guide/How_to_transfer_crypto_from_Huobi_to_L2',
    destination: `${DOCS_URL}/your-first-swap/exchange-greater-than-network/transfer-from-huobi-global`,
    permanent: true,
  },
  {
    source: '/blog/guide/How_to_transfer_crypto_from_Kraken_to_L2',
    destination: `${DOCS_URL}/your-first-swap/exchange-greater-than-network/transfer-from-kraken`,
    permanent: true,
  },
  {
    source: '/blog/guide/How_to_transfer_crypto_from_KuCoin_to_L2',
    destination: `${DOCS_URL}/your-first-swap/exchange-greater-than-network/transfer-from-kucoin`,
    permanent: true,
  },
  {
    source: '/blog/guide/How_to_transfer_crypto_from_Okex_to_L2',
    destination: `${DOCS_URL}/your-first-swap/exchange-greater-than-network/transfer-from-okx`,
    permanent: true,
  },
]
const partnerRedirects = partnerQueryParams.map(param => {
  return {
    source: '/',
    destination: '/app',
    permanent: true,
    has: [
      {
        type: 'query',
        key: param
      }
    ]
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    ...partnerRedirects,
    ...blog_redirects,
    {
      source: '/swap/:swapId*',
      destination: '/app/swap/:swapId*',
      permanent: true
    },
    {
      source: '/transactions',
      destination: '/app/transactions',
      permanent: true
    },
    {
      source: '/campaigns',
      destination: '/app/campaigns',
      permanent: true
    },
    {
      source: '/campaigns/:campaign*',
      destination: '/app/campaigns/:campaign*',
      permanent: true
    },
    {
      source: '/rewards',
      destination: '/app/campaigns',
      permanent: true
    },
    {
      source: '/auth',
      destination: '/app/auth',
      permanent: true
    },
    {
      source: '/exchanges',
      destination: '/app/exchanges',
      permanent: true
    },
    {
      source: '/forpartners',
      destination: '/app/forpartners',
      permanent: true
    },
    {
      source: '/salon',
      destination: '/app/salon',
      permanent: true
    },
  ]
}

module.exports = nextConfig
