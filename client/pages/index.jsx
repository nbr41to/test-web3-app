import { ethers, Contract } from 'ethers';
import { useEffect, useState } from 'react';
import counterAbi from '../../artifacts/contracts/Counter.sol/Counter.json';

// const contractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'; // localhost(HardhatNetwork)
const contractAddress = '0xae6247D5c14034BE173aC740AD29dfcA8542EE07'; // rinkeby

const getCount = async () => {
  if (typeof window === 'undefined') return;
  // metamaskを介してネットワークノードとの通信をするオブジェクトを作成する
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // アドレス、ABI, プロバイダを指定してコントラクトオブジェクトを作成
  // コントラクトの状態を変化させる(gas代が必要な）操作をするためには場合はSignerを与える必要がある
  const contract = new Contract(contractAddress, counterAbi.abi, provider);
  // .connect(provider.getSigner(0));
  console.log(contract);
  return await contract.getCount();
};

const countUp = async () => {
  if (typeof window === 'undefined') return;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new Contract(
    contractAddress,
    counterAbi.abi,
    provider,
  ).connect(provider.getSigner());

  await contract.increment();
};

const countDown = async () => {
  if (typeof window === 'undefined') return;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new Contract(
    contractAddress,
    counterAbi.abi,
    provider,
  ).connect(provider.getSigner());

  await contract.decrement();
};

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getCount().then((count) => {
      setCount(count.toNumber());
    });
  }, []);

  return (
    <div>
      <h1>web3 Counter</h1>
      <div>currentCount: {count}</div>
      <button onClick={countUp}>count up</button>
      <button onClick={countDown}>count down</button>
    </div>
  );
}
