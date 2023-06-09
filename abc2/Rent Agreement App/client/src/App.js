import abi from "./contract/RentAgriment.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Rent from "./components/Rent";
import Memos from "./components/Memos";

import "./App.css";


function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("None");

  useEffect(() => {
    const connectWallet = async () => {
      const ContractAddress = "0x8806f61e1400dB6b84F3D73DAdDDCB9ad4522BFa";
      //"0xbeA12AeEc48D5647A43A6CB6367C2807141be600";
      //"0x5DC47161c060896C635AE71D06aF80d88C9c8d31";
      //"0x579496973fFfE2Bd5528Dd9A1a46e9db499fF3C0";
      //;
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        // connect React front-end to Metamask on Chrome
        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          //chainChanged event sent on chain change and reload the page
          window.ethereum.on("chainChanged", ()=>{
            window.location.reload();
          })

          // accountsChanged event sent on account change and reload the page
          window.ethereum.on("accountsChanged", () =>{
            window.location.reload();
          })
        
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          ContractAddress,
          contractABI,
          signer
        );
        setAccount(account);
        setState({ provider, signer, contract });
      } else{
        alert("Please Install Metamask")
      } 
    }catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  console.log(state);
  return <div className="App">
    <h2>Rent Agreement App</h2>
    <p>Connected Account : {account}</p>
    <Rent state = {state}/>
    <Memos state = {state}/>
  </div>;
}

export default App;
