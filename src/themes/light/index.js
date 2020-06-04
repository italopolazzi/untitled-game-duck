import { deepFreeze, deepMerge } from "grommet/utils"
import { grommet } from "grommet"

import global from './global'
import button from './button'
import meter from './meter'

const custom_theme = {
  global,
  button,
  meter
}



const light_theme = deepFreeze(
  deepMerge(grommet, custom_theme)
)

export default light_theme