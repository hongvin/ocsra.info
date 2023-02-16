import React from "react";
import * as Chart from "../Chart";

export default function Pulse({ wallet }) {
  const [mostActive, setMostActive] = React.useState();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="card pulse">
      {!wallet.stats.noData && (
        <Chart.Pulse wallet={wallet} setMostActive={setMostActive} />
      )}
      <h5>
        {wallet.stats.noData
          ? "Inactive wallet"
          : "Wallet Pulse"
        }
      </h5>
      <p>
        {wallet.stats.noData
          ? "You have no on-chain activity!"
          : `Your on-chain activity. The most active month is ${months[mostActive]}`
        }
      </p>
    </div>
  );
}
