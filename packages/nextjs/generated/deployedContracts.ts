const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        Sportsbook: {
          address: "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1",
          abi: [
            {
              inputs: [],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "challengeId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "team1",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "team2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "referee",
                  type: "address",
                },
              ],
              name: "ChallengeAccepted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "challengeId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "team1",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "team2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "bet",
                  type: "uint256",
                },
              ],
              name: "ChallengeCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "challengeId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "team1",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "team2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "team1Result",
                  type: "uint8",
                },
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "team2Result",
                  type: "uint8",
                },
              ],
              name: "ChallengeResult",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "challengeId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "referee",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "team1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "team2",
                  type: "address",
                },
              ],
              name: "ChallengeStarted",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_challengeId",
                  type: "uint256",
                },
              ],
              name: "acceptChallenge",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_challengeId",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "_choice",
                  type: "bool",
                },
              ],
              name: "answerUpdateReferee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_challengeId",
                  type: "uint256",
                },
                {
                  internalType: "uint8",
                  name: "_team1Result",
                  type: "uint8",
                },
                {
                  internalType: "uint8",
                  name: "_team2Result",
                  type: "uint8",
                },
              ],
              name: "completeChallenge",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_team2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "referee",
                  type: "address",
                },
              ],
              name: "createChallenge",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_challengeId",
                  type: "uint256",
                },
              ],
              name: "deleteChallenge",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "matchChallenges",
              outputs: [
                {
                  internalType: "address",
                  name: "team1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "team2",
                  type: "address",
                },
                {
                  internalType: "enum Sportsbook.MatchState",
                  name: "state",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "bet",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "referee",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_challengeId",
                  type: "uint256",
                },
              ],
              name: "startChallenge",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_challengeId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_newReferee",
                  type: "address",
                },
              ],
              name: "updateReferee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "updateRefereeRequests",
              outputs: [
                {
                  internalType: "address",
                  name: "proposingTeam",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "newReferee",
                  type: "address",
                },
                {
                  internalType: "enum Sportsbook.UpdateRefereeState",
                  name: "state",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "viewMatchBet",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "viewMatchChallenge",
              outputs: [
                {
                  internalType: "address",
                  name: "team1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "team2",
                  type: "address",
                },
                {
                  internalType: "enum Sportsbook.MatchState",
                  name: "state",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "bet",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "referee",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "viewMatchCount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "viewMatchReferee",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "viewMatchState",
              outputs: [
                {
                  internalType: "enum Sportsbook.MatchState",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "viewRequestedReferee",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_challengeId",
                  type: "uint256",
                },
              ],
              name: "viewUpdateRefereeRequest",
              outputs: [
                {
                  internalType: "address",
                  name: "proposingTeam",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "newReferee",
                  type: "address",
                },
                {
                  internalType: "enum Sportsbook.UpdateRefereeState",
                  name: "state",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "viewUpdateRefereeState",
              outputs: [
                {
                  internalType: "enum Sportsbook.UpdateRefereeState",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
