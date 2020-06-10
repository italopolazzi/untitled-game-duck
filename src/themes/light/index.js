import { deepFreeze, deepMerge } from "grommet/utils"
import { grommet } from "grommet"

import global from './global'
import button from './button'
import meter from './meter'
import box from './box'

const custom_theme = {
  global,
  button,
  meter,
  box
}



const light_theme = deepFreeze(
  deepMerge(grommet, custom_theme)
)

export default light_theme