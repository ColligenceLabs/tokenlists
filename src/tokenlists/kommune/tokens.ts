import { Network, TokensForList } from '../../types'

import ethereum from "./tokens/ethereum";
import polygon from "./tokens/polygon";
import arbitrum from "./tokens/arbitrum";
import optimism from "./tokens/optimism";
import gnosis from "./tokens/gnosis";
// import zkevm from "./tokens/zkevm";
import avalanche from "./tokens/avalanche";
import sepolia from "./tokens/sepolia";
import base from "./tokens/base";
// import fantom from "./tokens/fantom";
import klaytn from './tokens/klaytn'
import baobab from './tokens/baobab'

export const tokens: TokensForList = {
  [Network.Ethereum]: ethereum,
  [Network.Polygon]: polygon,
  [Network.Arbitrum]: arbitrum,
  [Network.Optimism]: optimism,
  [Network.Gnosis]: gnosis,
  // [Network.Zkevm]: zkevm,
  [Network.Avalanche]: avalanche,
  [Network.Sepolia]: sepolia,
  [Network.Base]: base,
  // [Network.Fantom]: fantom,
  [Network.Klaytn]: klaytn,
  [Network.Baobab]: baobab,
}
