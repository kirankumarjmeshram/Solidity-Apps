import abi from "./contract/chai.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Buy from "./components/Buy";
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
      const ContractAddress = "0x5DC47161c060896C635AE71D06aF80d88C9c8d31";
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
    <h3>Connected Account : {account}</h3>
    <Buy state = {state}/>
    <Memos state = {state}/>
  </div>;
}

export default App;
