import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "~~/components/ScaffoldEthAppWithProviders";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "MoniSwap - v2.0.1 Alpha",
  description: "The central hub for trading & liquidity marketplace on 🐻 Berachain",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <div className="flex justify-center m-2">
            <div className="w-full lg:max-w-7xl">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
