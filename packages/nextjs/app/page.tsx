"use client";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <h1 className="font-bold leading-7 text-center">
              The central hub for trading & liquidity marketplace on 🐻 Berachain
            </h1>
          </div>

          <div>
            <h2 className="font-medium leading-5 text-center">
              Moniswap is a next-generation AMM that combines the best of Curve, Convex and Uniswap, designed to serve
              as the liquidity hub for the Berachain. Moniswap&apos;s flywheel allows protocols to build deep liquidity
              in a capital-efficient manner by directing $MONI emissions to their pools.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
