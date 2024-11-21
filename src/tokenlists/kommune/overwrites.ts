import { Network, OverwritesForList } from '../../types'

export const overwrites: OverwritesForList = {
  // [Network.Ethereum]: {},
  // [Network.Goerli]: {},
  // [Network.Polygon]: {},
  // [Network.Arbitrum]: {},
  // [Network.Optimism]: {},
  // [Network.Gnosis]: {},
  // [Network.Zkevm]: {},
  // [Network.Klaytn]: {},
  [Network.Baobab]: {
    '0x3B1036767e3F58a104114440E722cDc8D737E555': {
      symbol: 'KDO',
      extensions: {
        coingeckoId: 'balancer',
      },
    },
    '0x4828EA3e78B04504886c8d0F45e3abb3C52499B1': {
      symbol: 'DAI',
      extensions: {
        coingeckoId: 'dai',
      },
      logoURI:
        // eslint-disable-next-line max-len
        'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    },
    '0xE48bbABc85Eb49C629226E421Ba54c793Fa5D19e': {
      symbol: 'USDC',
      extensions: {
        coingeckoId: 'usd-coin',
      },
    },
    '0x985acD34f36D91768aD4b0cB295Aa919A7ABDb27': {
      symbol: 'USDT',
      extensions: {
        coingeckoId: 'tether',
      },
      logoURI:
        // eslint-disable-next-line max-len
        'https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661',
    },
    '0x0339d5Eb6D195Ba90B13ed1BCeAa97EbD198b106': {
      symbol: 'WKAIA',
      extensions: {
        coingeckoId: 'kaia',
      },
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/32880.png',
    },
    '0x667DCb81deA11870e7a52c9d1E9E9f2760cE966E': {
      symbol: 'TALK',
      extensions: {
        coingeckoId: 'talken',
      },
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11552.png',
    },
  },
  [Network.Klaytn]: {
    '0x5c13e303a62fc5dedf5b52d66873f2e59fedadc2': {
      symbol: 'USDT',
      extensions: {
        coingeckoId: 'tether',
      },
      logoURI:
        // eslint-disable-next-line max-len
        'https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661',
    },
    '0x19aac5f612f524b754ca7e7c41cbfa2e981a4432': {
      symbol: 'WKAIA',
      extensions: {
        coingeckoId: 'kaia',
      },
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/32880.png',
    },
    '0x42952b873ed6f7f0a7e4992e2a9818e3a9001995': {
      symbol: 'stKAIA',
      extensions: {
        coingeckoId: 'lair-staked-kaia',
      },
      logoURI:
        // eslint-disable-next-line max-len
        'https://assets.coingecko.com/coins/images/40001/standard/token_stkaia.png?1725117614',
    },
    '0xa323d7386b671e8799dca3582d6658fdcdcd940a': {
      symbol: 'sKLAY',
      extensions: {
        coingeckoId: 'sklay',
      },
      logoURI:
        // eslint-disable-next-line max-len
        'https://assets.coingecko.com/coins/images/13912/standard/sKLAY_logo.png?1696513653',
    },
    '0x999999999939ba65abb254339eec0b2a0dac80e9': {
      symbol: 'GCKAIA',
      logoURI:
      // eslint-disable-next-line max-len
        'https://raw.githubusercontent.com/ColligenceLabs/tokenlists/stg/src/assets/images/tokens/GCKAIA.png',
    },
    '0xa9999999c3d05fb75ce7230e0d22f5625527d583': {
      symbol: 'wGCKAIA',
      logoURI:
      // eslint-disable-next-line max-len
        'https://raw.githubusercontent.com/ColligenceLabs/tokenlists/stg/src/assets/images/tokens/wGCKAIA.png',
    },
    '0xf80f2b22932fcec6189b9153aa18662b15cc9c00': {
      symbol: 'stKLAY',
      logoURI:
      // eslint-disable-next-line max-len
        'https://raw.githubusercontent.com/ColligenceLabs/tokenlists/stg/src/assets/images/tokens/stKLAY.png',
    },
    '0x031fb2854029885e1d46b394c8b7881c8ec6ad63': {
      symbol: 'wstKLAY',
      logoURI:
        // eslint-disable-next-line max-len
        'https://raw.githubusercontent.com/ColligenceLabs/tokenlists/stg/src/assets/images/tokens/wstKLAY.png',
    },
    '0xa1338309658d3da331c747518d0bb414031f22fd': {
      symbol: 'KoKAIA',
      logoURI:
      // eslint-disable-next-line max-len
        'https://raw.githubusercontent.com/ColligenceLabs/tokenlists/stg/src/assets/images/tokens/KOKAIA.png',
    },
    '0xdec2cc84f0a37ef917f63212fe8ba7494b0e4b15': {
      symbol: 'wKoKAIA',
      logoURI:
        // eslint-disable-next-line max-len
        'https://raw.githubusercontent.com/ColligenceLabs/tokenlists/stg/src/assets/images/tokens/wKoKAIA.png',
    },
  },
}
