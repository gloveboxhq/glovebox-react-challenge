import { createStore } from 'redux'

import * as types from './constants/actionTypes';

const initialState = {
  policies: [],
  policyTypes: []
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

    case types.UPDATE_POLICY_TYPE: {
      console.log('In UPDATE_POLICY_TYPE action');
      const { policyNumber, policyType } = action.payload;
      policies = state.policies.slice();
      for (let policy of policies) {
        if (policy.policyNumber === policyNumber) {
          policy.type = {
            id: policyType.id,
            name: policyType.name
          };
        }
      }
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