import web3 from "./web3";
import { abi } from "./registry";

const contractAddress = "0x5B609a7D58eEC8c2348284cFEAa15F1b3ad2668a";

export const ResolverContract = new web3.eth.Contract(abi, contractAddress);
