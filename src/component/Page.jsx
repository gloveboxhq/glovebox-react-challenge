import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import provider from '../data/provider'
import * as actions from '../actions/actions';

const Page = ()=>{
	const dispatch = useDispatch();
	

	useEffect(()=>{
		(async ()=>{
			const policies = await provider.getPolicies()

			// store these policies in redux and make them available to the Page component with useSelector
			for (const policy of policies) {
				// add each policy to state
				dispatch(actions.addPolicyActionCreator(policy));
			}
			
			console.log('policies:', policies)
		})()
	}, [dispatch]);

	const policies = useSelector((state) => state.policies);

	// create object to contain policies grouped by ID
	const carriers = {};
	
	// iterate through all policies, populating carriers object
		// key: carrier ID
		// value: array of policies with matching carrier ID
	policies.forEach(policy => {
		const id = policy.carrierID;
		if (!carriers.hasOwnProperty[id]) {
			carriers[id] = [ policy ];
		} else {
			carriers[id].push(policy);
		}
	})

	// in production, would likely modularize carriers list, but for sake of time will keep everything confined to Page.jsx

	// create div for each carrier
	const carrierList = Object.keys(carriers).map(carrier => {
		// create list item for each policy, grouped by carrier
		const policiesByCarrier = carriers[carrier].map(policy => {
			const name = `${policy.primaryHolder.firstName} ${policy.primaryHolder.lastName}`
			return (
				<li>
					<p>Policy number: {policy.policyNumber}</p>
					<p>Type: {policy.type.name}</p>
					<p>Primary holder: {name}</p>
					<p>Agency: {policy.agencyName}</p>
					<p><button>Edit</button></p>
				</li>
			)
		});
		return (
			<div>
				<h3>{carrier}</h3>
				<ul>
					{policiesByCarrier}
				</ul>
			</div>
		)
	});

	return (
		<div className="page">
			<h2>Carriers</h2>
			{/* <p>View the readme for instructions</p> */}
			{carrierList}
		</div>

	)
}

export default Page