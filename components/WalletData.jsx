import DataCards from "./DataCards";
import DataTable from "./DataTable";
import Image from "next/image";
import sad from "../public/emoji/sad.png";

export default function WalletData({ wallet, fullAddress }) {
  return (
    <section className="WalletData">
      <DataCards wallet={wallet} />
      {!wallet.stats.noData ? (
        <DataTable wallet={wallet} />
      ) : (
        <section className="noData">
          <div className="container">
            <Image src={sad} width="64" height="64" />
            <h3>There is no data to show</h3>
            <p>
              {fullAddress} is a new or innactive wallet on ETH{" "}
              blockchain. Try another wallet.
            </p>
          </div>
        </section>
      )}
    </section>
  );
}
