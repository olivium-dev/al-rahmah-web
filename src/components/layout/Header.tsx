import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex gap-2.5 overflow-hidden text-4xl text-[#FEF7FF] font-normal text-right leading-none justify-center flex-wrap p-2.5 max-md:max-w-full">
      <nav className="flex min-w-60 items-center gap-8 flex-wrap max-md:max-w-full">
        <div className="self-stretch w-[199px] my-auto">المسابقات</div>
        <div className="self-stretch w-[291px] my-auto">لوحة المتصدرين</div>
        <div className="self-stretch w-[237px] my-auto">طريقة اللعب</div>
      </nav>
      <div className="flex min-w-60 w-[448px] shrink-0 h-[93px]" />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/837f800a1febd17ee1a677b8afe8fa71954019d6?placeholderIfAbsent=true"
        alt="Logo"
        className="aspect-[1.2] object-contain w-[113px] shrink-0"
      />
    </header>
  );
};
