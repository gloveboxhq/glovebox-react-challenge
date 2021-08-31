import * as types from '../constants/actionTypes';

export const getPoliciesActionCreator = () => ({
  type: types.GET_POLICIES
});

export const addPolicyActionCreator = policy => ({
  type: types.ADD_POLICY,
  payload: policy
});

export const addPolicyTypeActionCreator = policyType => ({
  type: types.ADD_POLICY_TYPE,
  payload: policyType
});

export const renderTypeUpdateFormActionCreator = policyNumber => ({
  type: types.RENDER_TYPE_UPDATE_FORM,
  payload: policyNumber
})

export const selectPolicyTypeActionCreator = (policyNumber, policyType) => ({
  type: types.SELECT_POLICY_TYPE,
  payload: { policyNumber, policyType }
});

export const updatePolicyTypeActionCreator = (policyNumber, policyType) => ({
  type: types.UPDATE_POLICY_TYPE,
  payload: { policyNumber, policyType }
});