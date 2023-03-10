import React from "react";

export default function UserStats({ wallet }) {
  const [isMonth, setIsMonth] = React.useState();
  wallet.stats.walletAge > 24
    ? () => setIsMonth(false)
    : () => setIsMonth(true);

  return (
    <>
      {!wallet.stats.noData ? (
        <div className="UserStats">
          <div className="balance">
            <div className="container">
              <span className="units">ETH</span>
              {wallet.stats.balance > 1000
                ? Math.round(wallet.stats.balance / 10) / 100 + "k"
                : Math.round(wallet.stats.balance * 100) / 100}
            </div>

            <span>Balance</span>
          </div>
          <div className="turnover">
            <div className="container">
              <span className="units">ETH</span>
              {wallet.stats.walletTurnover > 1000
                ? Math.round(wallet.stats.walletTurnover / 10) / 100 + "k"
                : Math.round(wallet.stats.walletTurnover * 100) / 100}
            </div>
            <span>Wallet Turnover</span>
          </div>
          <div className="age">
            <div className="container">
              {isMonth && wallet.stats.walletAge}
              {isMonth && (
                <span>{wallet.stats.walletAge > 1 ? "months" : "month"}</span>
              )}
              {!isMonth && Math.floor(wallet.stats.walletAge / 12)}
              {!isMonth && <span className="units">y</span>}
              {!isMonth &&
                wallet.stats.walletAge -
                Math.floor(wallet.stats.walletAge / 12) * 12 >
                0 &&
                wallet.stats.walletAge -
                Math.floor(wallet.stats.walletAge / 12) * 12}
              {!isMonth &&
                wallet.stats.walletAge -
                Math.floor(wallet.stats.walletAge / 12) * 12 >
                0 && <span className="units">mo</span>}
            </div>

            <span>Wallet Age</span>
          </div>
        </div>
      ) : (
        "No data to show"
      )}
    </>
  );
}
