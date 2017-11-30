import {actionTypes} from './actions'

export const initialState = {
  userLocation: ''
}

export function reducer (state = initialState, action){
  switch(action.type){
    case actionTypes.CITYSTATE:
      return{
        ...initialState,
        userLocation: action.payload
      }
    default:
      return state
  }
}