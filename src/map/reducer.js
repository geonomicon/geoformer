import reducer from '../futils/reducer'

// ------------------------------------
// Constants
// ------------------------------------
// Constants Here
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  BOUNDSCHANGE:(s, a) => ({ ...s, bounds:a.payload.bounds })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  bounds: null
}

export default reducer(initialState, ACTION_HANDLERS)
