import React from "react";

interface DownloadButtonProps {
  store: "apple" | "play";
  icon: string;
  className?: string; // Added className property
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  store,
  icon,
  className, // Destructure className
}) => {
  const storeName = store === "apple" ? "Apple Store" : "Play Store";

  return (
    <div
      className={`items-center bg-[#F9A83C] flex min-w-60 min-h-[100px] gap-2.5 overflow-hidden grow shrink w-52 pl-4 pr-8 rounded-[124px] max-md:pr-6 ${className || ""}`} // Adjusted padding
    >
      <div className="self-stretch flex min-h-[68px] flex-col overflow-visible items-stretch justify-center w-[168px] my-auto px-2.5">
        <div className="text-base font-medium tracking-[0.15px] whitespace-nowrap mr-2"> {/* Ensure single line */}
          Download now from
        </div>
        <div className="text-2xl font-normal leading-none mt-1.5">
          {storeName}
        </div>
      </div>
      {typeof icon === "string" ? (
        <img
          src={icon}
          alt={`${storeName} icon`}
          className={"aspect-[1.04] w-[50px] object-contain self-stretch shrink-0 my-auto"}
        />
      ) : (
        <div className="rotate-[-1.224648970167536e-16rad] self-stretch flex w-12 shrink-0 h-12 my-auto" />
      )}
    </div>
  );
};
