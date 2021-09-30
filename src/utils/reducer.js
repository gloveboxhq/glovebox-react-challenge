import policiesObj from './actions';

const initialState = {
    policies: [],
    policyTypes: [],
    policiesGrouped: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case policiesObj.SET_POLICIES: {
            const policies = action.payload.policies
            const policyTypes = action.payload.policyTypes
            let groupPolicies = {};

            policies.forEach(policy => {
                if (!groupPolicies[policy.carrierID]) {
                    groupPolicies[policy.carrierID] = [];

                    groupPolicies[policy.carrierID].push(policy);
                }
            });

            return {
                ...state,
                policies: policies,
                policyTypes: policyTypes,
                policiesGrouped: {}
            }
        }

        case policiesObj.UPDATE_POLICIES: {
            return {
                ...state
            }
        }

        default:
            return state
    }
}

export default reducer;