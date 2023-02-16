import Image from "next/image";
import * as Emoji from "../../public/emoji/risk";

export default function Risk({ wallet }) {
    const score = Math.round(wallet.score * 10000) / 100;
    const risk = score > 65 ? "Risk Free" : "Risky";
    const noData = wallet.stats.noData;

    const emoji =
        score > 65
            ? Emoji.Safe
            : Emoji.Risky;

    return (
        <div className={score>65? "card safe":"card risky"}>
            <Image src={emoji} width="64" height="64" />
            <h5>Risk Analysis</h5>
            <p>
                {noData
                    ? "Perform some transaction to see the risk!"
                    : `Your are considered ${risk}`
                }
            </p>
        </div>
    );
}
