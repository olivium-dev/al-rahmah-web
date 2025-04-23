import React from "react";
import { DownloadButton } from "../ui/DownloadButton";

export const HeroSection: React.FC = () => {
  return (
    <section className="flex w-full flex-col overflow-hidden items-center px-2.5 py-6 max-md:max-w-full">
      <div className="flex w-full max-w-full gap-2.5 overflow-hidden text-white mt-16 pl-2.5 py-1 max-md:mt-10">
        <div className="flex flex-row max-lg:flex-wrap items-center w-full gap-2.5 overflow-hidden p-2.5 max-md:max-w-full">
          <div className="flex flex-row justify-center items-center gap-2.5 w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/483cde0eb933dcf5599ec4bd6a40ae7d13e45b06?placeholderIfAbsent=true"
              alt="Leaderboard decoration"
              className="object-contain w-[15%] max-w-[210px] shrink-0"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/6e8e9328945b6a1b6c68e8ffe7138c1db03af73a?placeholderIfAbsent=true"
              alt="Leaderboard decoration"
              className="object-contain w-[20%] max-w-[269px] shrink-0"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/45d7febb5320f858a636e5a49466651d2d6b60e8?placeholderIfAbsent=true"
              alt="Leaderboard decoration"
              className="object-contain w-[25%] max-w-[336px] shrink-0"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full p-2.5 max-md:max-w-full">
            <h1 className="text-[64px] font-semibold leading-none tracking-[0.45px] max-md:max-w-full max-md:text-[40px] text-center text-white">
              اختبر معلوماتك مع 
            </h1>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/b7ae3786739ef6a0fa5d33860794781b480452a7?placeholderIfAbsent=true"
              alt="App logo"
              className="aspect-[1.25] object-contain w-[443px] max-w-full"
            />
            <div className="flex flex-row max-md:flex-col items-center w-full max-w-[608px] gap-2.5 overflow-hidden py-[15px] max-md:max-w-full max-md:px-5">
                <DownloadButton
                  store="apple"
                  icon="/apple-store.svg"
                  className="aspect-[2.6] w-[260px] max-w-[260px]"
                />
                <DownloadButton
                  store="play"
                  icon="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/502e523fe9fa338360a72178dd742e7f887bb509?placeholderIfAbsent=true"
                  className="aspect-[2.6] w-[260px] max-w-[260px]"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
