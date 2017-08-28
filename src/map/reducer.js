import reducer from '../futils/reducer'

// ------------------------------------
// Constants
// ------------------------------------
// Constants Here
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  BOUNDSCHANGE:(s, a) => ({ ...s, bounds:a.payload.bounds }),
  CODECHANGE: (s, a) => ({ ...s, geojson: a.payload.geojson })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  bounds: null,
  geojson: '{\n}'
}

export default reducer(initialState, ACTION_HANDLERS)
