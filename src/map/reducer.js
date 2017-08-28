import reducer from '../futils/reducer'
import initGeojson from './initialstate'
// ------------------------------------
// Constants
// ------------------------------------
// Constants Here
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  BOUNDSCHANGE:(s, a) => ({ ...s, bounds:a.payload.bounds }),
  CODECHANGE: (s, a) => ({ ...s, geojson: a.payload.geojson }),
  TOGGLEINFO: (s, a) => ({ ...s, infoVis: !s.infoVis }),
  TOGGLECODE: (s, a) => ({ ...s, codeVis: !s.codeVis }),
  HIDEINFO: (s, a) => ({ ...s, infoVis: false })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  bounds: null,
  geojson: initGeojson.toString(),
  infoVis: true,
  codeVis: false
}

export default reducer(initialState, ACTION_HANDLERS)
