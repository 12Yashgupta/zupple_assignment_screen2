import React, { useState } from "react";
import { format } from "date-fns";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./transactions.css";

const BtcId = ({ btcData }) => (
  <div>
    {btcData.map((data, index) => (
      <div key={index}>
        <div>
          {`${data.to.slice(0, 20)}...${data.to.slice(-10)}`}
        </div>
      </div>
    ))}
  </div>
);

const BtcValue = ({ btcData }) => (
  <div>
    {btcData.map((data, index) => (
      <div key={index}>
        <div className="amount">
          {`${data.amount}`}<small>{`BTC`}</small>
          <FaArrowAltCircleRight className="icon-arrow-red" />
        </div>
      </div>
    ))}
  </div>
);

const Transactions = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const transactionData = [
    {
      id: "0000000000000000000c6b8c9c3e7d1d7f8d0c9e1a4b2a4b2c9e1a4b2c9e1a4b2",
      time: format(new Date(), "yyyy-MM-dd HH:mm"),
      rows: [
        {
          subId: "0000000000000000000c6b8c9c3e7d1d7f8d0c9e1a4b2a4b2c9e1a4b2c9e1adsfg",
          btcValue: 30.23443046,
          btcData: [
            {
              to: "asdfghjklzxcvbnmqwertyuiopsdfghjklzxcvbnmqwertyuiop",
              amount: 15.11111023,
            },
            {
              to: "sadsdfghjklzxcvbnmqwertyuiopsdfghjklzxcvbnmqwertyuiop",
              amount: 15.12332023,
            },
          ],
          satvb: 140,
          sat: 68232,
          transactionFee: 23.4,
          multisigTag: false,
          totalBts: 30.23443046,
        },
      ],
    },
    {
      id: "0000000000000000000c6b8c9c3e7d1d7f8d0c9e1a4b2a4b2c9e1a4b2c9e1a5gd",
      time: format(new Date(), "yyyy-MM-dd HH:mm"),
      rows: [
        {
          subId:"0000000000000000000c6b8c9c3e7d1d7f8d0c9e1a4b2a4b2c9e1a4b2c9e1adsfg",
          btcValue: 15.83277023,
          btcData: [
            {
              to: "sdfjgknbrjigvnehrcbfydxgyawtgndhcievmgjbth",
              amount: 14.83277021,
            },
            {
              to: "sdfjgknbrjigvnehrcbfydxgyawtgndhcievmgjbth",
              amount: 1.00000002,
            },
          ],
          satvb: 140,
          sat: 68232,
          transactionFee: 23.4,
          multisigTag: true,
          totalBts: 15.83277023,
        },
      ],
    },
    {
      id: "0000000000000000000c6b8c9c3e7d1d7f8d0c9e1a4b2a4b2c9e1a4b2c9e1adsfg",
      time: format(new Date(), "yyyy-MM-dd HH:mm"),
      rows: [
        {
          subId:
            "0000000000000000000c6b8c9c3e7d1d7f8d0c9e1a4b2a4b2c9e1a4b2c9e1adsfg",
          btcValue: 15.83277024,
          btcData: [
            {
              to: "sdfjgknbrjigvnehrcbfydxgyawtgndhcievmgjbth",
              amount: 15.83277024,
            }
          ],
          satvb: 140,
          sat: 68232,
          transactionFee: 23.4,
          multisigTag: false,
          totalBts: 15.83277024,
        },
      ],
    },
    {
      id: "0000000000000000000c6b8c9c3e7d1d7f8d0c9e1a4b2a4b2c9e1a4b2c9e1hgty",
      time: format(new Date(), "yyyy-MM-dd HH:mm"),
      rows: [
        {
          subId:
            "0000000000000000000c6b8c9c3e7d1d7f8d0c9e1a4b2a4b2c9e1a4b2c9e1adsfg",
          btcValue: 11.83277024,
          btcData: [
            {
              to: "sdfjgknbrjigvnehrcbfydxgyawtgndhcievmgjbth",
              amount: 11.83277024,
            },
          ],
          satvb: 140,
          sat: 68232,
          transactionFee: 23.4,
          multisigTag: false,
          totalBts: 0.00000001,
        },

      ],
    },
    {
      id: "0000000000000000000c6b8c9c3e7d1d7f8d0c9e1a4b2a4b2c9e1a4b2c9e1adsfg",
      time: Date.now(),
      rows: [
        {
          subId: "sdcghvbjnkmlsdfghjjjhsdfghjklplkjhgfdewscvebrntymynub",
          btcValue: 10.83477024,
          btcData: [
            {
              to: "sdfjgknbrjigvnehrcbfydxgyawtgndhcievmgjbth",
              amount: 10.83477024,
            },
          ],
          satvb: 140,
          sat: 68232,
          transactionFee: 23.4,
          multisigTag: false,
          totalBts: 10.83477024,
        },
      ],
    },
    {
      id: "0000000000000000000c6b8c9c3e7d1d7f8d0c9e1a4b2a4b2c9e1a4b2c9e1a8iu",
      time: format(new Date(), "yyyy-MM-dd HH:mm"),
      rows: [
        {
          subId: "hfdsvhcsdbnkcsmvndfjgknbrjigvnehrcbfydxgyawtgndhcievmgjbth",
          btcValue: 2.83277024,
          btcData: [
            {
              to: "sdfjgknbrjigvnehrcbfydxgyawtgndhcievmgjbth",
              amount: 2.83277024,
            },
          ],
          satvb: 140,
          sat: 68232,
          transactionFee: 23.4,
          multisigTag: false,
          totalBts: 2.83277024,
        },
      ],
    },
    {
      id: "0000000000000000000c6b8c9c3e7d1d7f8d0c9e1a4b2a4b2c9e1a4b2c9e13wt6",
      time: format(new Date(), "yyyy-MM-dd HH:mm"),
      rows: [
        {
          subId: "asdfghjklkmbvcxasdetghgymuiunybtrvewxacvesbrdnfgm",
          btcValue: 15.80987024,
          btcData: [
            {
              to: "sdfjgknbrjigvnehrcbfydxgyawtgndhcievmgjbth",
              amount: 15.80987024,
            },
          ],
          satvb: 140,
          sat: 68232,
          transactionFee: 23.4,
          multisigTag: false,
          totalBts: 15.80987024,
        },
      ],
    },
    {
      id: "0000000000000000000c6b8c9c3e7d1d7f8d0c9e1a4b2a4b2c9e1a4b2c9e1acdfd",
      time: format(new Date(), "yyyy-MM-dd HH:mm"),
      rows: [
        {
          subId: "asadssdfghjklzxcvbnmqwertyuiopsdfghjklzxcvbnmqwertyuiop",
          btcValue: 15.83277453,
          btcData: [
            {
              to: "sdfjgknbrjigvnehrcbfydxgyawtgndhcievmgjbth",
              amount: 15.83277453,
            },
          ],
          satvb: 42.6,
          sat: 68232,
          transactionFee: 23.4,
          multisigTag: false,
          totalBts: 15.83277453,
        },
      ],
    },
  ];
const totalItems = transactionData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedTransactions = transactionData.slice(startIndex, endIndex);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const generatePaginationButtons = () => {
    const buttons = [];
    for (let i = 0; i < totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          disabled={currentPage === i}
        >
          {i + 1}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1 style={{ borderTop: "none" }}>2,075 transactions</h1>
        <div className="pagination">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 0}
          >
            {"<<"}
          </button>
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 0}
          >
            {"<"}
          </button>
          {generatePaginationButtons()}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
          >
            {">"}
          </button>
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
          >
            {">>"}
          </button>
        </div>
      </div>

      <div className="bodyy">
        {displayedTransactions.map((transaction, index) => (
          <section key={index}>
            <div>
              <div className="transaction-header">
                <span className="id">{transaction.id}</span>
                <span>{transaction.time}</span>
              </div>
            </div>
            <table className="trans-table">
              {transaction.rows.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  <tr>
                    <td className="col1">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <FaArrowAltCircleRight className="icon-arrow-red" />
                        {`${row.subId.slice(0, 20)}...${row.subId.slice(-10)}`}
                      </div>

                        {row.multisigTag && <span className="multisig-tag">Multisig 2 of 3</span>}
                    </td>
                    <td className="col2">{`${row.btcValue} `}<small>{`BTC`}</small></td>
                    <td className="col3">
                      <BtcId btcData={row.btcData} />
                    </td>
                    <td className="col4">
                      <BtcValue btcData={row.btcData} />
                    </td>
                  </tr>
                  <tr>
                    <td className="col5" colSpan={3}>
                      {`${row.satvb} sat/vB - ${row.sat} sat`}<span className="custom-color">{` $${row.transactionFee}`}</span>
                    </td>
                    <td className="total-btc">{`${row.totalBts}`}<small>{`BTC`}</small></td>
                  </tr>
                </React.Fragment>
              ))}
            </table>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Transactions;