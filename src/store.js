import { createStore } from 'redux'

import * as types from './constants/actionTypes';

const initialState = {
  policies: [],
  policyTypes: [],
  updateForms: []
};

// add reducers here
const reducer = (state = initialState, action) => {
  let policies;
  let policyTypes;
  let updateForms;

  switch (action.type) {
    case types.GET_POLICIES: {
      console.log('In GET_POLICIES action');
      return state;
    }

    case types.ADD_POLICY: {
      console.log('In ADD_POLICY action');
      const newPolicy = action.payload;
      policies = state.policies.slice();
      updateForms = state.updateForms.slice();
      policies.push(newPolicy);
      updateForms.push({
        policyNumber: newPolicy.policyNumber,
        renderForm: false,
        selectedType: null
      })
      return {
        ...state,
        policies,
        updateForms
      }
    }

    case types.ADD_POLICY_TYPE: {
      console.log('In ADD_POLICY_TYPE action');
      policyTypes = state.policyTypes.slice();
      policyTypes.push(action.payload);
      return {
        ...state,
        policyTypes
      }
    }

    case types.RENDER_TYPE_UPDATE_FORM: {
      console.log('In RENDER_TYPE_UPDATE_FORM action');
      updateForms = state.updateForms.slice();
      for (const updateForm of updateForms) {
        if (updateForm.policyNumber === action.payload && updateForm.renderForm === false) {
          updateForm.renderForm = true;
        } else updateForm.renderForm = false;
      }
      return {
        ...state,
        updateForms
      }
    }

    case types.SELECT_POLICY_TYPE: {
      console.log('In SELECT_POLICY_TYPE action');
      updateForms = state.updateForms.slice();
      for (const updateForm of updateForms) {
        if (updateForm.policyNumber === action.payload.policyNumber) {
          updateForm.selectedType = action.payload.policyType;
        }
      }
      return {
        ...state,
        updateForms
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