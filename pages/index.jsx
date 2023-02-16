import Input from "../components/global/Input";
import MainLayout from "../layouts/Main";
import { useAccount } from 'wagmi'
import { useRouter } from "next/router";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home({ fullAddress, blockchain }) {
  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address, connector, isReconnected })
    },
  })
  const router = useRouter();


  return (
    <MainLayout title="Home">
      <div className="wrapper Home">
        <div className="background"></div>
        <section className="title">
          <h1>Wallet Scoring and Risk Analysis</h1>
          <h2>
            Get a score of how the wallet behave!
          </h2>
        </section>
        
        <section className="buttons">
          <div class="rainbow">
        <ConnectButton showBalance={false} />
        </div>
        <div class="rainbow-button">
        <button onClick={function() {router.push(`/score/${account.address}`)}} className="score">Get Score</button>
        </div>
        </section>
        <section className="others">
          <h3> or </h3>
          <Input />
        </section>
      </div>
    </MainLayout>
  );
}
