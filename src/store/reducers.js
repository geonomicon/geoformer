import { combineReducers } from 'redux'
import locationReducer from './location'
import notifierReducer from '../connectors/notifier/reducer'
import mapReducer from '../map/reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    notify:notifierReducer,
    map: mapReducer
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
