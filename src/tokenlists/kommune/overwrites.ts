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
    '0x4828ea3e78b04504886c8d0f45e3abb3c52499b1': {
      symbol: 'DAI',
      extensions: {
        coingeckoId: 'dai',
      },
    },
    '0xe48bbabc85eb49c629226e421ba54c793fa5d19e': {
      symbol: 'USDC',
      extensions: {
        coingeckoId: 'usd-coin',
      },
    },
    '0x985acd34f36d91768ad4b0cb295aa919a7abdb27': {
      symbol: 'USDT',
      extensions: {
        coingeckoId: 'tether',
      },
    },
    '0x0339d5eb6d195ba90b13ed1bceaa97ebd198b106': {
      symbol: 'WKLAY',
      extensions: {
        coingeckoId: 'wrapped-klay',
      },
    },
    '0x667dcb81dea11870e7a52c9d1e9e9f2760ce966e': {
      symbol: 'TALK',
      extensions: {
        coingeckoId: 'talken',
      },
    },
  },
}
