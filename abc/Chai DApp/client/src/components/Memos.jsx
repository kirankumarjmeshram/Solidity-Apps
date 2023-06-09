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
            <table>
              <tbody>
                <tr>
                  <td>{memo.name}</td>
                  <td>{memo.message}</td>
                  <td>{memo.from}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default Memos;
