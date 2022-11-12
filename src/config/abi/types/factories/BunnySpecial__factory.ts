/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { BunnySpecial, BunnySpecialInterface } from "../BunnySpecial";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract BunnyMintingStation",
        name: "_bunnyMintingStation",
        type: "address",
      },
      {
        internalType: "contract IBEP20",
        name: "_cakeToken",
        type: "address",
      },
      {
        internalType: "contract IPancakeProfile",
        name: "_pancakeProfile",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxViewLength",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "bunnyId",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "thresholdUser",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "costCake",
        type: "uint256",
      },
    ],
    name: "BunnyAdd",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "bunnyId",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "thresholdUser",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "costCake",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "BunnyChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "bunnyId",
        type: "uint8",
      },
    ],
    name: "BunnyMint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_bunnyId",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_thresholdUser",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cakeCost",
        type: "uint256",
      },
    ],
    name: "addBunny",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "bunnyCharacteristics",
    outputs: [
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "thresholdUser",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cakeCost",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isCreated",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bunnyMintingStation",
    outputs: [
      {
        internalType: "contract BunnyMintingStation",
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
        internalType: "bytes32",
        name: "c__0xf318aee2",
        type: "bytes32",
      },
    ],
    name: "c_0xf318aee2",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "cakeToken",
    outputs: [
      {
        internalType: "contract IBEP20",
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
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
      {
        internalType: "uint8[]",
        name: "_bunnyIds",
        type: "uint8[]",
      },
    ],
    name: "canClaimMultiple",
    outputs: [
      {
        internalType: "bool[]",
        name: "",
        type: "bool[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_bunnyId",
        type: "uint8",
      },
    ],
    name: "canClaimSingle",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "claimFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "hasClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxViewLength",
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
        internalType: "uint8",
        name: "_bunnyId",
        type: "uint8",
      },
    ],
    name: "mintNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numberDifferentBunnies",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "pancakeProfile",
    outputs: [
      {
        internalType: "contract IPancakeProfile",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_bunnyId",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_thresholdUser",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cakeCost",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "updateBunny",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newMaxViewLength",
        type: "uint256",
      },
    ],
    name: "updateMaxViewLength",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class BunnySpecial__factory {
  static readonly abi = _abi;
  static createInterface(): BunnySpecialInterface {
    return new utils.Interface(_abi) as BunnySpecialInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BunnySpecial {
    return new Contract(address, _abi, signerOrProvider) as BunnySpecial;
  }
}