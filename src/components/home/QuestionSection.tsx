import React from "react";

export const QuestionSection: React.FC = () => {
  return (
    <section className="bg-white flex items-center gap-2.5 overflow-hidden justify-center flex-wrap mt-[90px] px-[46px] py-2.5 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/b97716e6e96dfd7ead80e2c0b73c16c886b6f27d?placeholderIfAbsent=true"
        alt="Questions illustration"
        className="aspect-[1.02] object-contain w-[624px] self-stretch min-w-60 my-auto max-md:max-w-full"
      />
      <div className="self-stretch flex w-[227px] shrink-0 h-[131px] my-auto" />
      <div className="self-stretch flex min-w-60 flex-col items-stretch w-[697px] my-auto max-md:max-w-full">
        <h2 className="text-[#4F378B] text-center text-[57px] font-bold leading-[83px] tracking-[-0.25px] self-center max-md:max-w-full max-md:text-[40px] max-md:leading-[65px]">
          جاهز للتحدي؟ أكثر من 1000 سؤال في 20 فئة بانتظارك!
        </h2>
        <p className="text-[#322F35] text-right text-[45px] font-normal leading-[52px] mt-[11px] max-md:max-w-full max-md:text-[40px] max-md:leading-[51px]">
          اختبر معلوماتك واستمتع بالإجابة على أسئلة ممتعة ومتنوعة! من الرياضة
          والتاريخ إلى العلوم والثقافة العامة—أي مجال ستتفوّق فيه.
        </p>
      </div>
    </section>
  );
};
