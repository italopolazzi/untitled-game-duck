const neuromorphic = `
  button {
    transition: box-shadow .2s ease
  }
  button.neuromorphic, button.neuromorphic-inset {
      border-radius: 99999999999px;
  }
  button.neuromorphic:hover, button.neuromorphic-inset:hover {
    box-shadow: 0 0 0 transparent;
  }
  div.neuromorphic {
      border-radius: 34px;
  }
  &.neuromorphic {
    box-shadow: 1px 1px 3px rgba(78, 4, 134, 0.9), -1px -1px 2px rgba(204, 10, 255, 0.9), 1px -1px 2px rgba(78, 4, 134, 0.2), -1px 1px 2px rgba(78, 4, 134, 0.2), inset -1px -1px 2px rgba(78, 4, 134, 0.5), inset 1px 1px 2px rgba(204, 10, 255, 0.3);
  }
  &.neuromorphic-inset {
    box-shadow: -1px -1px 2px rgba(74, 4, 128, 0.5), 1px 1px 2px rgba(194, 10, 255, 0.3), inset 1px 1px 3px rgba(74, 4, 128, 0.9), inset -1px -1px 2px rgba(194, 10, 255, 0.9), inset 1px -1px 2px rgba(74, 4, 128, 0.2), inset -1px 1px 2px rgba(74, 4, 128, 0.2);
  }
`


export {
  neuromorphic
}