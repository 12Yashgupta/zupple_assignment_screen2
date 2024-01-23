import React from "react";
import "./blockDets.css";
import { FaCopy } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { format } from "date-fns";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlockDets = () => {
  const block_data = {
    hash: "0000000000000000000c6b8c9c3e7d1d7f8d0c9e1a4b2a4b2c9e1a4b2c9e1a4b2",
    timestamp: format(new Date(), "yyyy-MM-dd HH:mm"),
    size: 1.39,
    weight: 3.99,
    totalBTC: 0.43,
    totalFees: "13,710",
    totalSubsidy: 6.68,
    subsidyFees: "213,136",
    miner: "SpidePool",
  };

  const handleCopy = () => {
    toast.success("Copied to clipboard!");
  };
  return (
    <>
    <ToastContainer />
      <section className="container">
      <div className="header">
        <h1>Block
          <span style={{color:"#2EC7F2"}}> 667306</span>
        </h1>
        <IoIosClose className="icon-close" />
      </div>
        
        <main>
          <div className="left">
            <table className="labels">
              <tr>
                <td>Hash</td>
                <td style={{ color: "#2ec7f2" }} className="hash">
                  {block_data.hash.slice(0, 5) +
                    "..." +
                    block_data.hash.slice(-5)}
                  <CopyToClipboard text={block_data.hash} onCopy={handleCopy}>
                    <FaCopy className="icon-copy" />
                  </CopyToClipboard>
                </td>
              </tr>
              <tr>
                <td>Timestamp</td>
                <td>{block_data.timestamp} <small style={{color:"#707A95"}}><i>(1 hour ago)</i></small></td>
              </tr>
              <tr>
                <td>Size</td>
                <td >{block_data.weight} <small style={{color:"#707A95"}}>MB</small></td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{block_data.weight} <small style={{color:"#707A95"}}>MWU</small></td>
              </tr>
            </table>
          </div>
          <div className="right">
            <table className="labels">
              <tr>
                <td>Total Fees</td>
                <td>
                  {block_data.totalBTC} <small style={{color:"#707A95"}}>BTC</small> (
                  <span style={{ color: "#20AF38" }}>
                    ${block_data.totalFees}
                  </span>
                  )
                </td>
              </tr>
              <tr>
                <td>Subsidy + fees</td>
                <td>
                  {block_data.totalSubsidy} <small style={{color:"#707A95"}}>BTC</small> (
                  <span style={{ color: "#20AF38" }}>
                    ${block_data.subsidyFees}
                  </span>
                  )
                </td>
              </tr>
              <tr>
                <td>Miner</td>
                <td>
                  <span className="tag">{block_data.miner}</span>
                </td>
              </tr>
            </table>
          </div>
        </main>
      </section>
    </>
  );
};

export default BlockDets;
