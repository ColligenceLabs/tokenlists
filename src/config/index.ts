import { Network, Configs } from '../types'
import arbitrum from './arbitrum'
import avalanche from './avalanche'
import base from './base'
import gnosis from './gnosis'
import goerli from './goerli'
import ethereum from './ethereum'
import optimism from './optimism'
import polygon from './polygon'
import sepolia from './sepolia'
import zkevm from './zkevm'
import klaytn from "./klaytn";
import baobab from "./baobab";

const config: Configs = {
  // [Network.Arbitrum]: arbitrum,
  // [Network.Avalanche]: avalanche,
  // [Network.Base]: base,
  // [Network.Gnosis]: gnosis,
  // [Network.Goerli]: goerli,
  // [Network.Ethereum]: ethereum,
  // [Network.Optimism]: optimism,
  // [Network.Polygon]: polygon,
  [Network.Sepolia]: sepolia,
  // [Network.Zkevm]: zkevm,
  // [Network.Klaytn]: klaytn,
  [Network.Baobab]: baobab,
}

export default config
