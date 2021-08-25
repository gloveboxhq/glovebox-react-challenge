import React, {useEffect, useDispatch, useSelector} from 'react'

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
			
			console.log('policies:',policies)
		})()
	})

	const policies = useSelector((state) => state.policies);

	return (
		<div className="page">
			<h2>Carriers</h2>
			<p>View the readme for instructions</p>
			<div>
				<h3>Carrier 1</h3>
				<ul>
					<li>
						Policy 1, Type, Primary Holder, Agency 
						<button>Edit</button>
					</li>
					<li>
						Policy 2, Type, Primary Holder, Agency
						<button>Edit</button>
					</li>
				</ul>	
			</div>
			<div>
				<h3>Carrier 2</h3>
				<ul>
					<li>
						Policy 1, Type, Primary Holder, Agency 
						<button>Edit</button>
					</li>
					<li>
						Policy 2, Type, Primary Holder, Agency
						<button>Edit</button>
					</li>
				</ul>	
			</div>
		</div>

	)
}

export default Page