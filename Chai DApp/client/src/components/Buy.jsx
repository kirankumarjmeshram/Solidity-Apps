import React from 'react'
import { ethers } from 'ethers'

const  Buy = ({state}) => {
    const buyChai = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        console.log(name, message, contract);
        const amount = { value: ethers.utils.parseEther("0.001") };
        const transaction = await contract.buyChai(name, message, amount);
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
                    <label>Message</label>
                    <input type="text" 
                    id='message'
                    placeholder='Enter Your Message'
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