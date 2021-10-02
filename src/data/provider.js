const policies = [{
	"carrierID": "shield",
	"policyNumber": "AP35872-8543",
	"type": {
		"id": "auto",
		"name": "Automobile"
	},
	"primaryHolder": {
		"firstName": "Tony",
		"middleName": null,
		"lastName": "Stark"
	},
	"agencyName": "Strategic Homeland Intervention Enforcement and Logistics Division",
}, {
	"carrierID": "leaf",
	"policyNumber": "HE378537",
	"type": {
		"id": "life",
		"name": "Life"
	},
	"primaryHolder": {
		"firstName": "Tony",
		"middleName": null,
		"lastName": "Stark"
	},
	"agencyName": "Strategic Homeland Intervention Enforcement and Logistics Division",
}, {
	"carrierID": "branch",
	"policyNumber": "BO3896",
	"type": {
		"id": "boat",
		"name": "Boat"
	},
	"primaryHolder": {
		"firstName": "Tony",
		"middleName": null,
		"lastName": "Stark"
	},
	"agencyName": "Organic Insurance",
}, {
	"carrierID": "shield",
	"policyNumber": "RV0646-36998",
	"type": {
		"id": "rv",
		"name": "RV"
	},
	"primaryHolder": {
		"firstName": "Tony",
		"middleName": null,
		"lastName": "Stark"
	},
	"agencyName": "Strategic Homeland Intervention Enforcement and Logistics Division",
}, {
	"carrierID": "shield",
	"policyNumber": "HOM3657-392",
	"type": {
		"id": "home",
		"name": "Home"
	},
	"primaryHolder": {
		"firstName": "Pepper",
		"middleName": null,
		"lastName": "Potts"
	},
	"agencyName": "Strategic Homeland Intervention Enforcement and Logistics Division",
}, {
	"carrierID": "leaf",
	"policyNumber": "HE378537",
	"type": {
		"id": "health",
		"name": "Health"
	},
	"primaryHolder": {
		"firstName": "Pepper",
		"middleName": null,
		"lastName": "Potts"
	},
	"agencyName": "Strategic Homeland Intervention Enforcement and Logistics Division",
}]

const policyTypes = [{
	"id": "health",
	"name": "Health"
}, {
	"id": "home",
	"name": "Home"
}, {
	"id": "rv",
	"name": "RV"
}, {
	"id": "boat",
	"name": "Boat"
}, {
	"id": "life",
	"name": "Life"
}, {
	"id": "auto",
	"name": "Automobile"
}]

const getPolicies = async () => {
	return await new Promise(resolve => {
		setTimeout(() => {
			resolve(policies)
		}, 500)
	})
}

const getPolicyTypes = async () => {
	return await new Promise(resolve => {
		setTimeout(() => {
			resolve(policyTypes)
		}, 200)
	})
}

const exp = {
	getPolicies,
	getPolicyTypes,
}
export default exp