import React from "react";
import { DownloadButton } from "../ui/DownloadButton";

export const HeroSection: React.FC = () => {
  return (
    <section className="flex w-full flex-col overflow-hidden items-center px-2.5 py-6 max-md:max-w-full">
      <div className="flex w-[1634px] max-w-full gap-2.5 overflow-hidden text-white mt-16 pl-2.5 py-1 max-md:mt-10">
        <div className="flex min-w-60 w-[1694px] gap-2.5 overflow-hidden p-2.5 max-md:max-w-full">
          <div className="flex min-w-60 w-[1674px] overflow-hidden p-2.5">
            <div className="min-w-60 w-[1654px] max-md:max-w-full">
              <div className="flex gap-2.5 overflow-hidden justify-center flex-wrap p-2.5 max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/483cde0eb933dcf5599ec4bd6a40ae7d13e45b06?placeholderIfAbsent=true"
                  alt="Leaderboard decoration"
                  className="aspect-[0.34] object-contain w-[210px] shrink-0"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/6e8e9328945b6a1b6c68e8ffe7138c1db03af73a?placeholderIfAbsent=true"
                  alt="Leaderboard decoration"
                  className="aspect-[0.36] object-contain w-[269px] min-w-60 shrink-0"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/45d7febb5320f858a636e5a49466651d2d6b60e8?placeholderIfAbsent=true"
                  alt="Leaderboard decoration"
                  className="aspect-[0.56] object-contain w-[336px] min-w-60 shrink-0"
                />
                <div className="flex w-[151px] shrink-0 h-[75px]" />
                <div className="flex min-w-60 flex-col overflow-hidden items-center justify-center w-[628px] p-2.5 max-md:max-w-full">
                  <h1 className="text-[64px] font-semibold leading-none tracking-[0.45px] max-md:max-w-full max-md:text-[40px]">
                    اختبر معلوماتك مع{" "}
                  </h1>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/b7ae3786739ef6a0fa5d33860794781b480452a7?placeholderIfAbsent=true"
                    alt="App logo"
                    className="aspect-[1.25] object-contain w-[443px] max-w-full"
                  />
                  <div className="flex w-full max-w-[608px] gap-2.5 overflow-hidden flex-wrap px-9 py-[15px] max-md:max-w-full max-md:px-5">
                    <DownloadButton store="apple" icon="" />
                    <DownloadButton store="play" icon="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/502e523fe9fa338360a72178dd742e7f887bb509?placeholderIfAbsent=true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
