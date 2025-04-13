import React from "react";

export const GameModes: React.FC = () => {
  return (
    <section id="competitions" className="bg-white self-stretch flex w-full flex-col overflow-hidden items-center text-center mt-[90px] p-2.5 max-md:max-w-full max-md:mt-10">
      <h2 className="self-stretch gap-2.5 overflow-hidden text-[64px] text-[#4F378B] font-semibold tracking-[0.45px] leading-none px-[21px] py-[23px] max-md:max-w-full max-md:text-[40px] max-md:px-5">
        اختر طريقتك في اللعب
      </h2>
      <div className="flex items-center gap-2.5 overflow-hidden text-white font-normal justify-center flex-row max-md:flex-wrap mt-2.5 p-2.5 max-w-full py-[36px]">
        <div className="items-center bg-[#21005D] self-stretch flex min-w-60 min-h-[694px] flex-col overflow-hidden w-[740px] my-auto pt-[71px] pb-3 px-2.5 rounded-[128px] max-md:max-w-full">
          <h3 className="text-[57px] leading-none tracking-[-0.25px] max-md:text-[40px]">
            بمفردك
          </h3>
          <div className="flex min-h-[3px] w-[272px] max-w-full mt-2.5" />
          <p className="text-4xl leading-none mt-2.5">
            اختبر معلوماتك وتحدَّ نفسك!
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/87112d60cf67fdf2d1aa5ba6870e1d42fae03bd7?placeholderIfAbsent=true"
            alt="Single player mode"
            className="aspect-[0.86] object-contain w-[376px] max-w-full mt-2.5"
          />
          <div className="flex min-h-6 w-[272px] max-w-full mt-2.5" />
        </div>
        <div className="items-center bg-[#F9A83C] self-stretch flex min-w-60 min-h-[694px] flex-col overflow-hidden w-[740px] my-auto px-2.5 py-16 rounded-[128px] max-md:max-w-full">
          <h3 className="text-[57px] leading-none tracking-[-0.25px] max-md:max-w-full max-md:text-[40px]">
            {" "}
            ضد لاعبين من حول العالم
          </h3>
          <div className="flex min-h-3 w-[272px] max-w-full mt-[11px]" />
          <p className="text-4xl leading-none mt-[11px] max-md:max-w-full">
            نافس أصدقاءك واستمتع بالتحدي!
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/9a8e2a6111176da64119755eb124fdd7b694409c?placeholderIfAbsent=true"
            alt="Multiplayer mode"
            className="aspect-[1.2] object-contain w-[496px] max-w-full mt-[11px]"
          />
        </div>
      </div>
    </section>
  );
};
