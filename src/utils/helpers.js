import policiesObj from "./actions";

export const setPolicies = (payload) => ({
    type: policiesObj.SET_POLICIES,
    payload
});

export const updatePolicies = (payload) => ({
    type: policiesObj.UPDATE_POLICIES,
    payload
});