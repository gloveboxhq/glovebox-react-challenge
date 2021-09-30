import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPolicies } from '../utils/helpers'
import provider from '../data/provider'

const Page = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		(async () => {
			const policies = await provider.getPolicies();
			const policyTypes = await provider.getPolicyTypes();
			// store these policies in redux and make them available to the Page component with useSelector
			dispatch(setPolicies({
				policies,
				policyTypes
			}))
			console.log('policies:', policies)
			console.log('policyTypes:', policyTypes)
		})()
	}, [])

	
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