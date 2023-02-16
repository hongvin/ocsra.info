import { ThemeProvider } from "next-themes";
import { createClient, configureChains, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { getDefaultWallets, RainbowKitProvider, darkTheme, coolMode } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import "../styles/index.scss";

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'OCSRA',
  chains,
});
const client = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function App({ Component, pageProps }) {

  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} theme={darkTheme()} coolMode>
        <ThemeProvider>
          <Component {...pageProps} /></ThemeProvider>
      </RainbowKitProvider>

    </WagmiConfig>
  );
}
