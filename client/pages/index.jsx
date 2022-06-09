import { ethers, Contract } from 'ethers';
import { useEffect, useState } from 'react';
import helloAbi from '../../artifacts/contracts/Hello.sol/Hello.json';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const getHelloMessage = async () => {
  if (typeof window === 'undefined') return;
  // metamaskを介してネットワークノードとの通信をするオブジェクトを作成する
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // アドレス、ABI, プロバイダを指定してコントラクトオブジェクトを作成
  // コントラクトの状態を変化させる(gas代が必要な）操作をするためには場合はSignerを与える必要がある
  const greetContract = new Contract(contractAddress, helloAbi.abi, provider);
  // .connect(provider.getSigner(0));

  return await greetContract.message();
};

export default function Home() {
  useEffect(() => {
    getHelloMessage().then((msg) => {
      console.log(msg);
    });
  }, []);

  return (
    <div>
      <h1>web3 Counter</h1>
    </div>
  );
}
