import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPolicies } from '../../utils/helpers';
import CarrierList from '../CarrierList/CarrierList'
import provider from '../../data/provider';

const Page = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			const policies = await provider.getPolicies();
			const policyTypes = await provider.getPolicyTypes();
			
			dispatch(setPolicies({
				policies,
				policyTypes
			}))
		})()
	})

	
	return (
		<div className="page">
			<CarrierList />
		</div>

	)
}

export default Page