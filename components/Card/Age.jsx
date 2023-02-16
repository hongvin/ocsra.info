import Image from "next/image";
import * as Emoji from "../../public/emoji/age";

export default function Age({ wallet }) {
  const age = wallet.stats.walletAge;

  const emoji =
    age >= 6
      ? age >= 12
        ? age >= 24
          ? Emoji.Old
          : Emoji.Medium
        : Emoji.Young
      : Emoji.New;

  const title =
    age >= 6
      ? age >= 12
        ? age >= 24
          ? "An aged wallet"
          : "Pretty aged wallet"
        : "Beginner wallet"
      : "Newbie";

  return (
    <div className="card age">
      <Image src={emoji} width="64" height="64" />
      <h5>{title}</h5>
      <p>
        {`This wallet was created ${age} months ago`}
      </p>
    </div>
  );
}
