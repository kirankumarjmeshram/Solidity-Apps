import React from 'react'
import { ethers } from 'ethers'

const  Buy = ({state}) => {
    const buyChai = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        const tnc = document.querySelector("#tnc").value;
        const duration = document.querySelector("#duration").value;
        const ether = document.querySelector("#ether").value;
        console.log(name, message, contract);
        const amount = { value: ethers.utils.parseEther(ether) };
        console.log(amount.value)
        const transaction = await contract.buyChai(name, message,tnc, duration, amount);
        await transaction.wait();
        console.log("Transaction is done");
    }
    
  return (
    <div>
        <h2>Hello World</h2>
        <div>
            <form onSubmit={buyChai}>
                <div>
                    <label>Name</label>
                    <input type="text" 
                    id='name'
                    placeholder='Enter Your Name'
                    />
                </div>
                <div>
                    <label>Agreement Detail</label>
                    <textarea
                    id='message'
                    rows={5}
                    placeholder='Enter Agriment Detail'
                    />
                </div>
                <div>
                    <label>T And C</label>
                    <input type="text" 
                    id='tnc'
                    placeholder='T n C'
                    />
                </div>
                <div>
                    <label>Duration</label>
                    <input type="text" 
                    id='duration'
                    placeholder='Enter Duration'
                    />
                </div>
                <div>
                    <label>Ether</label>
                    <input type="text" 
                    id='ether'
                    placeholder='Enter Ether'
                    />
                </div>
                <button 
                type='submit'
                disabled ={!state.contract}
                >
                    Pay
                </button>
            </form>
        </div>
    </div>
  )
}

export default Buy