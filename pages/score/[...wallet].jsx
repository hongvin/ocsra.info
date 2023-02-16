import React from "react";
import { useRouter } from "next/router";
import Lottie from "lottie-react";

import useSWR from "swr";

import errorAnimation from "../../utilities/error.json";
import loadingAnimation from "../../utilities/loading.json";
import notFoundAnimation from "../../utilities/notFound.json";

import MainLayout from "../../layouts/Main";

import Input from "../../components/global/Input";

import WalletData from "../../components/WalletData";
import WalletUser from "../../components/WalletUser";

export async function getServerSideProps(context) {
  const fullAddress = await context.query.wallet[0];

  const query = new URLSearchParams(context.query);
  const action = query.get('action');
  const apiHost = "https://api.ocsra.info";

  return { props: {fullAddress, action, apiHost } };
}

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Scored({fullAddress, action, apiHost }) {

  const { data: wallet, error } = useSWR(
    `${apiHost}/api/v1/ethereum/wallet/${fullAddress}/score`,
    fetcher
  );

  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 384);
    });
  }, []);

  const address =
    fullAddress.length > 16
      ? fullAddress[0] +
        fullAddress[1] +
        fullAddress[2] +
        " · · · " +
        fullAddress[fullAddress.length - 3] +
        fullAddress[fullAddress.length - 2] +
        fullAddress[fullAddress.length - 1]
      : fullAddress;

  const router = useRouter();

  const tryAgainHandler = () => {
    router.reload();
  };

  if (!wallet)
    return (
      <MainLayout title={`${address}`}>
        <div className="wrapper">
          <Input fullAddress={fullAddress} />
          <section className="message loading">
            <Lottie animationData={loadingAnimation} loop={true} size="240px" />
            <h2>Calculating...</h2>
            <p>Our magician is performing math magic!</p>
          </section>
        </div>
      </MainLayout>
    );

  if (error)
    return (
      <MainLayout title={`${address}`}>
        <div className="wrapper">
          <Input fullAddress={fullAddress} />
          <section className="message error">
            <Lottie animationData={errorAnimation} loop={true} size="240px" />
            <h2>There is an Error</h2>
            <p>We have an error: {error}.</p>
            <button onClick={tryAgainHandler} className="tryAgain">
              Try Again
            </button>
          </section>
        </div>
      </MainLayout>
    );

  return (
    <MainLayout title={`${address}`}>
        <Input fullAddress={fullAddress} />
        {wallet.succeeded ? (
          <div className="scored">
            <WalletData
              wallet={wallet.data}
              fullAddress={fullAddress}
            />
            <WalletUser
              wallet={wallet.data}
              address={address}
              fullAddress={fullAddress}
            />
            <div className={`mobile ${isScrolled ? "isScrolled" : ""}`}>
              <WalletUser
                wallet={wallet.data}
                address={address}
                fullAddress={fullAddress}
              />
            </div>
          </div>
        ) : (
          <section className="message noSuccess">
            <Lottie
              animationData={notFoundAnimation}
              loop={true}
              size="240px"
            />
            <h2>There is no {address}</h2>
            <div className="paragraph">
              <p>
                We can't find {fullAddress} on Etherium blockchain or
                something went wrong.
              </p>
            </div>
            <button onClick={tryAgainHandler} className="tryAgain">
              Try Again
            </button>
          </section>
        )}
      
    </MainLayout>
  );
}
