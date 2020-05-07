var abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_useraddress",
				"type": "address"
			}
		],
		"name": "alreadyRegistred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "dName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "docHash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "user_addr",
				"type": "address"
			}
		],
		"name": "alreadyuploadedDocumentEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "_firstName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_lastName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_contact",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "enum digiLocker.userType",
				"name": "utype",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_useraddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "accessKey",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "pubKey",
				"type": "string"
			}
		],
		"name": "registeredUserEvent",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_firstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lastName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_utype",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_contact",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "accessKey",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "pubKey",
				"type": "string"
			}
		],
		"name": "registerUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "docid",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "sharedWith",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "permission",
				"type": "uint32"
			}
		],
		"name": "sharedDocumentEvent",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "docid",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "sharedWith",
				"type": "address"
			},
			{
				"internalType": "uint32",
				"name": "permission",
				"type": "uint32"
			}
		],
		"name": "shareDocumentwithUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "docName",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "docHash",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "timestamp",
				"type": "string"
			}
		],
		"name": "uploadDocument",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "dName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "docHash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "user_addr",
				"type": "address"
			}
		],
		"name": "uploadDocumentEvent",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_bytes32",
				"type": "bytes32"
			}
		],
		"name": "bytes32ToStr",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "docId",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "sharedWith",
				"type": "address"
			}
		],
		"name": "checkAlreadyShared",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "docId",
				"type": "bytes32"
			}
		],
		"name": "checkAlreadyUpload",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDocCountByUserId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_docId",
				"type": "bytes32"
			}
		],
		"name": "getDocumentListbyDocId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_useradd",
				"type": "address"
			}
		],
		"name": "getDocumetList",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "docId",
				"type": "bytes32"
			}
		],
		"name": "getOwnerDocInfoByDocId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getOwnerDocumetList",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getRegisteredUser",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTotalSharedDocsByOthers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getUseraccessKey",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isalreadyRegisteredUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]