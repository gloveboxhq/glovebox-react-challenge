import {createStore} from 'redux'

import * as types from './constants/actionTypes';

const initialState = {
  policies: []
};

// add reducers here
const reducer = (state = initialState, action) => {
  let policies;

  switch (action.type) {
    case types.GET_POLICIES: {
      console.log('In GET_POLICIES action');
      return state;
    }

    case types.ADD_POLICY: {
      console.log('In ADD_POLICY action');
      policies = state.policies.slice();
      policies.push(action.payload);
      return {
        ...state,
        policies
      }
    }

    default: {
      console.log('In DEFAULT action');
      return state;
    }
  }
}

export default createStore(reducer)