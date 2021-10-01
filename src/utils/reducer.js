import policiesObj from './actions';

const initialState = {
    policies: [],
    policyTypes: [],
    policiesGrouped: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case policiesObj.SET_POLICIES: {
            const policies = action.payload.policies;
            const policyTypes = action.payload.policyTypes;
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
            const policyMap = state.policies.map(policy => {
                if(policy.policyNumber === action.payload.poliicyNumber) {
                    return action.payload.policy;
                }

                return policy;
            })

            const groupMap = state.policiesGrouped[action.payload.policyGroup].map(item => {
                if(item.policyNumber === action.payload.policyNumber) {
                    return action.payload.policy;
                }

                return item;
            })
            return {
                ...state,
                policies: policyMap,
                policiesGrouped: {
                    ...state.policiesGrouped,
                    [state.policiesGrouped[action.payload.policyGroup]]: groupMap
                }
            }
        }

        default:
            return state
    }
}

export default reducer;