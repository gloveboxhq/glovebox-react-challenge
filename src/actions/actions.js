import * as types from '../constants.actionTypes';

export const getPoliciesActionCreator = () => ({
  type: types.GET_POLICIES
});

export const addPolicyActionCreator = policy => ({
  type: types.ADD_POLICY,
  payload: policy
});