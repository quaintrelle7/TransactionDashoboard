import Web3 from 'web3';

let web3js;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3js = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://polygon-mumbai.g.alchemy.com/v2/cNZhkVFPVIileSpGtOeahsFjCFU5sn_h',
  );

  web3js = new Web3(provider);
}

export default web3js;
