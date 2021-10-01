import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePolicies } from '../../utils/helpers';

export default function EditPolicy({ selectedPolicy, hidePopup}) {
    const dispatch = useDispatch();
    const policyTypes = useSelector(state => state.policyTypes);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        var formData = new FormData(document.querySelector('form'))
        selectedPolicy.type = policyTypes.find(policy => policy.id === formData.get("policyType"));
        dispatch(updatePolicies({
            selectedPolicy
        }))
        hidePopup?.();
    }

    const handleClickOutside = (event) => {
        const currentTarget = event.target;
        if (currentTarget.classList.contains('policyEditForm')) {
            console.log("close popup")
            hidePopup?.();
        }
    };

    return (
        <div className="policyEditForm">
            <form onSubmit={handleSubmit}>
                <p>Update Policy</p>
                <div className="formContainer">
                    <select id="framework" name="policyType" defaultValue={selectedPolicy.type.id}>
                        {
                            policyTypes.map((policyType, index) => (
                                <option key={index} value={policyType.id}>{policyType.name}</option>
                            ))
                        }
                    </select>
                    <button type="submit">
                        Save
                    </button>

                </div>

            </form>
        </div>
    )
}