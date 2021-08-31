import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import provider from '../data/provider'
import * as actions from '../actions/actions';

const Page = () => {
	const dispatch = useDispatch();
	

	useEffect(() => {
		(async () => {
			const policies = await provider.getPolicies();
			const policyTypes = await provider.getPolicyTypes();

			// store these policies in redux and make them available to the Page component with useSelector
			for (const policy of policies) {
				// add each policy to state
				dispatch(actions.addPolicyActionCreator(policy));
			}

			for (const policyType of policyTypes) {
				dispatch(actions.addPolicyTypeActionCreator(policyType));
			}

			console.log('Policy types: ' + policyTypes);

		})()
	}, [dispatch]);

	const policies = useSelector(state => state.policies);
	const updateForms = useSelector(state => state.updateForms);
	const policyTypes = useSelector(state => state.policyTypes);

	// create object to contain policies grouped by ID
	const carriers = {};
	
	// iterate through all policies, populating carriers object
		// key: carrier ID
		// value: array of policies with matching carrier ID
	policies.forEach(policy => {
		const id = policy.carrierID;
		if (!carriers[id]) {
			carriers[id] = [ policy ];
		} else {
			carriers[id].push(policy);
		}
	})

	// in production, would modularize carriers list, but for sake of time will keep everything confined to Page.jsx

	// click handler for edit button
	const editButtonClick = (renderForm, policyNumber) => {
		if (!renderForm) {
			dispatch(actions.renderTypeUpdateFormActionCreator(policyNumber));
		}
		return;
	}

	const saveButtonClick = (renderForm, policyNumber) => {
		console.log('In saveButtonClick')
		// grab value of select and pass into dispatch as policyType
		const select = document.getElementById('select-policy-type');
		const typeID = select.options[select.selectedIndex].value;
		const typeName = select.options[select.selectedIndex].text;
		const policyType = { id: typeID, name: typeName }
		dispatch(actions.updatePolicyTypeActionCreator(policyNumber, policyType));
		dispatch(actions.renderTypeUpdateFormActionCreator(policyNumber));
		return;
	}

	// conditionally render type update form if edit button has been clicked
	const UpdateForm = props => {
		if (props.renderForm) {
			const typesArray = policyTypes.map(policyType => {
				// control flow for defaulting to current policy type
				if (props.policyType === policyType.id) {
					return (
						<option className="policy-type" value={policyType.id} selected>{policyType.name}</option>
					)
				}
				return (
					<option className="policy-type" value={policyType.id}>{policyType.name}</option>
				)
			})
			// generate type update form
			return (
			<div className="update-form">
				<select id="select-policy-type">
					{typesArray}
				</select>
				<button className="save-button" onClick={event => {
					event.preventDefault();
					saveButtonClick(props.renderForm, props.policyNumber);
				}}>Save</button>
			</div>
			)
		}
		return null;
	}

	// create div for each carrier
	const carrierList = Object.keys(carriers).map(carrier => {
		// create list item for each policy, grouped by carrier
		const policiesByCarrier = carriers[carrier].map(policy => {
			const name = `${policy.primaryHolder.firstName} ${policy.primaryHolder.lastName}`
			const policyNumber = policy.policyNumber;
			let renderForm;
			// control flow for maintaining current update form visibility for each policy in state
			for (const updateForm of updateForms) {
				if (updateForm.policyNumber === policyNumber) {
					renderForm = updateForm.renderForm;
				}
			}
			// generate list item containing all necessary fields
			return (
				<li>
					<p>Policy number: {policyNumber}</p>
					<p>Type: {policy.type.name}</p>
					<p>Primary holder: {name}</p>
					<p>Agency: {policy.agencyName}</p>
					<div className="button-wrapper">
						<button className="edit-button" onClick={event => {
							event.preventDefault();
							editButtonClick(renderForm, policyNumber);
						}}>Edit</button>
						<UpdateForm policyType={policy.type.id} policyNumber={policyNumber} renderForm={renderForm} />
					</div>
				</li>
			)
		});
		// generate containers for all policies belonging to a single carrier
		return (
			<div className="carrier">
				<h3>{carrier}</h3>
				<ul>
					{policiesByCarrier}
				</ul>
			</div>
		)
	});
	// generate containers for each carrier
	return (
		<div className="page">
			<h2>Carriers</h2>
			{/* <p>View the readme for instructions</p> */}
			{carrierList}
		</div>

	)
}

export default Page