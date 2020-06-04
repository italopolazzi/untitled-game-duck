import { deepFreeze, deepMerge } from "grommet/utils"
import { grommet } from "grommet"

import global from './global'
import button from './button'

const custom_theme = {
  global,
  button
}



const dark_theme = deepFreeze(
  deepMerge(grommet, custom_theme)
)

export default dark_theme