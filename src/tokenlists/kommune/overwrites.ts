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
    '0x5C13E303a62Fc5DEdf5B52D66873f2E59fEdADC2': {
      symbol: 'USDT',
      extensions: {
        coingeckoId: 'tether',
      },
      logoURI:
        // eslint-disable-next-line max-len
        'https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661',
    },
    '0x19Aac5f612f524B754CA7e7c41cbFa2E981A4432': {
      symbol: 'WKAIA',
      extensions: {
        coingeckoId: 'kaia',
      },
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/32880.png',
    },
    '0x42952B873ed6f7f0A7E4992E2a9818E3A9001995': {
      symbol: 'stKAIA',
      extensions: {
        coingeckoId: 'lair-staked-kaia',
      },
      logoURI:
        // eslint-disable-next-line max-len
        'https://assets.coingecko.com/coins/images/40001/standard/token_stkaia.png?1725117614',
    },
    '0xA323d7386b671E8799dcA3582D6658FdcDcD940A': {
      symbol: 'sKLAY',
      logoURI:
        // eslint-disable-next-line max-len
        'https://assets.coingecko.com/coins/images/13912/standard/sKLAY_logo.png?1696513653',
    },
    '0x999999999939Ba65AbB254339eEc0b2A0daC80E9': {
      symbol: 'GCKAIA',
      logoURI:
        // eslint-disable-next-line max-len
        'https://raw.githubusercontent.com/ColligenceLabs/tokenlists/prod/src/assets/images/tokens/GCKAIA.png',
    },
    '0xa9999999c3D05Fb75cE7230e0D22F5625527d583': {
      symbol: 'wGCKAIA',
      logoURI:
        // eslint-disable-next-line max-len
        'https://raw.githubusercontent.com/ColligenceLabs/tokenlists/prod/src/assets/images/tokens/wGCKAIA.png',
    },
    '0xF80F2b22932fCEC6189b9153aA18662b15CC9C00': {
      symbol: 'stKLAY',
      logoURI:
        // eslint-disable-next-line max-len
        'https://raw.githubusercontent.com/ColligenceLabs/tokenlists/prod/src/assets/images/tokens/stKLAY.png',
    },
    '0x031fB2854029885E1D46b394c8B7881c8ec6AD63': {
      symbol: 'wstKLAY',
      logoURI:
        // eslint-disable-next-line max-len
        'https://raw.githubusercontent.com/ColligenceLabs/tokenlists/prod/src/assets/images/tokens/wstKLAY.png',
    },
    '0xA1338309658D3Da331C747518d0bb414031F22fd': {
      symbol: 'KoKAIA',
      logoURI:
        // eslint-disable-next-line max-len
        'https://raw.githubusercontent.com/ColligenceLabs/tokenlists/prod/src/assets/images/tokens/KOKAIA.png',
    },
    '0xdEC2Cc84f0a37Ef917f63212FE8ba7494b0E4B15': {
      symbol: 'wKoKAIA',
      logoURI:
        // eslint-disable-next-line max-len
        'https://raw.githubusercontent.com/ColligenceLabs/tokenlists/prod/src/assets/images/tokens/wKoKAIA.png',
    },
  },
}
