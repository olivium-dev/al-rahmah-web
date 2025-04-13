import React from "react";

export const LeaderboardSection: React.FC = () => {
  return (
    <section
      id="leaderboard"
      className="flex flex-col relative min-h-[899px] w-full max-w-full items-center gap-2.5 overflow-hidden text-right justify-center flex-wrap mt-[90px] px-2.5 py-[139px] max-md:mt-10 max-md:py-[100px]"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/37fd73655a70a9eed6df456ee73ce023108764e1?placeholderIfAbsent=true"
        alt="Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="flex flex-row max-md:flex-col items-center gap-4 max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/3ae30b146de024eb2aaf12709ab8a85a9b971eb1?placeholderIfAbsent=true"
          alt="Leaderboard illustration"
          className="aspect-[1.04] object-contain w-[643px] max-w-full self-stretch min-w-60 my-auto max-md:max-w-full"
        />
        <div className="relative self-stretch flex min-w-60 flex-col justify-center w-full max-w-[791px] my-auto max-md:max-w-full">
          <div className="max-w-full w-full">
            <h2 className="text-[#4F378B] text-[64px] font-semibold leading-none max-md:max-w-full max-md:text-[40px]">
              !تسلق القمة في كل مستوى
            </h2>
            <p className="text-[#49454F] text-[45px] font-normal leading-[52px] mt-[11px] max-md:max-w-full max-md:text-[40px] max-md:leading-[51px]">
              نافس اللاعبين، تقدم في المستويات، وكن في صدارة لوحة المتصدرين.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
