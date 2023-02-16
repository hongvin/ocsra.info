import React from "react";
import Image from "next/image";
import UserAddress from "./UserAddress";
import UserStats from "./UserStats";
import userpic from "../public/userpic.svg";


export default function WalletUser({
  wallet,
  address,
  fullAddress
}) {

  return (
    <>
      <section className="WalletUser">
        <div className="bio">
          <div className="userpick">
            <Image
              src={userpic}
            />
          </div>
          <div className="meta">
            <UserAddress address={address} fullAddress={fullAddress} />
            <UserStats wallet={wallet}  />
          </div>
        </div>
        <button className="buttonMint">
        Mint Your Score (Coming soon)
      </button>
        
      </section>
    </>
  );
}
