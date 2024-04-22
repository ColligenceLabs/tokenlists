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
    '0xb456FacD0Cdf4ea490D73b1863E3F80D9A5a4190': {
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
      symbol: 'WKLAY',
      extensions: {
        coingeckoId: 'wrapped-klay',
      },
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23465.png',
    },
    '0x667DCb81deA11870e7a52c9d1E9E9f2760cE966E': {
      symbol: 'TALK',
      extensions: {
        coingeckoId: 'talken',
      },
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11552.png',
    },
  },
}
