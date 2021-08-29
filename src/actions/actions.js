import * as types from '../constants/actionTypes';

export const getPoliciesActionCreator = () => ({
  type: types.GET_POLICIES
});

export const addPolicyActionCreator = policy => ({
  type: types.ADD_POLICY,
  payload: policy
});

export const updatePolicyTypeActionCreator = (policyNumber, policyType) => ({
  type: types.UPDATE_POLICY_TYPE,
  payload: { policyNumber, policyType }
});