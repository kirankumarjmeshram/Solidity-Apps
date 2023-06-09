import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      console.log(memos)
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <>
      <p>Details</p>
      {memos.map((memo) => {
        return (
          <div key={uuidv4()}>
            <div>
                <div>Name : {memo.name}</div>
                <div>Agreement Detail :  {memo.agreementDetail}</div>
                <div>Duration :{memo.duration} months </div>
                <div>Terms and Conditions : {memo.tAndC}</div>
                <div>tenant Address : {memo.from}</div>
                <div>tenant Address : {memo.from}</div>
            </div>
            {/* <table>
              <tbody>
                <tr>
                  <td>{memo.name}</td>
                  <td>{memo.agreementDetail}</td>
                  <td>{memo.duration}</td>
                  <td>{memo.tAndC}</td>
                  <td>{memo.from}</td>
                </tr>
              </tbody>
            </table> */}
          </div>
        );
      })}
    </>
  );
};

export default Memos;
