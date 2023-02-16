import Image from "next/image";
import * as Emoji from "../../public/emoji/turnover";

export default function Turnover({ wallet }) {
  const turnover = wallet.stats.walletTurnover;
  const nativePrice = wallet.stats.balance * wallet.stats.balanceUSD;
  const turnoverUSD = turnover * nativePrice;

  const emoji =
    turnoverUSD >= 1000
      ? turnoverUSD >= 10000
        ? turnoverUSD >= 100000
          ? Emoji.High
          : Emoji.Avg
        : Emoji.Low
      : Emoji.Cheap;

  const title =
    turnoverUSD >= 1000
      ? turnoverUSD >= 10000
        ? turnoverUSD >= 100000
          ? "Big Spender"
          : "Maybe a Trader"
        : "Quite Active"
      : "Little Activity";

  return (
    <div className="card turnover">
      <Image src={emoji} width="64" height="64" />
      <h5>{title}</h5>
      <p>
        {`This wallet has total spendings of ${Math.floor(turnover)} ETH`}
      </p>
    </div>
  );
}
