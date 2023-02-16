import * as Chart from "../Chart";

export default function Score({ wallet }) {
  const score = Math.round(wallet.score * 10000) / 100;
  const noData = wallet.stats.noData;
  return (
    <div className="card score">
      <Chart.Score score={wallet.score * 100} />
      <h5>Credit Score</h5>
      <p>
        {noData
          ? "Perform some transaction to see the score!"
          : `Your credit score is ${score}`
        }
      </p>
    </div>
  );
}
