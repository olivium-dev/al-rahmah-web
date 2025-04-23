import React, { useState, useEffect } from "react";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Ensure menu is closed on larger screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-transparent flex flex-wrap items-center justify-between w-full text-white font-light leading-[53px] px-5 py-3 relative">
      <div className="flex items-center justify-between w-full">
        {isSmallScreen && (
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
        <nav
          className={`${
            isMenuOpen || !isSmallScreen ? "flex" : "hidden"
          } flex-col md:flex-row items-center w-full md:w-auto mt-3 md:mt-0 absolute top-full left-0 bg-transparent md:static md:flex-row md:justify-center`}
          style={{
            // Set the background color to blue color
            backgroundColor: `${isSmallScreen? "var(--M3-sys-light-background, rgb(232, 250, 255))" : "transparent"}`,
            padding: `${isSmallScreen? "10px" : "0px"}`,
            borderRadius: `${isSmallScreen? "8px" : "0px"}`,
            borderColor: `${isSmallScreen? "var(--M3-sys-light-outline,rgb(124, 121, 121))": 'transparent'}`,
            borderWidth: `${isSmallScreen? "1px" : "0px"}`,
          }}
        >
          <a
            href="#competitions"
            className="self-stretch w-auto my-auto hover:text-opacity-80 transition-colors text-lg font-medium md:mx-4"
            style={{
              color: `"var(--M3-sys-light-background,${isSmallScreen? '#45BAD8' : '#FEF7FF'})"`,
              textAlign: "right",
              fontFamily: "Roboto",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "44px",
            }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#competitions")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            المسابقات
          </a>
          <a
            href="#leaderboard"
            className="self-stretch w-auto my-auto hover:text-opacity-80 transition-colors text-lg font-medium md:mx-4"
            style={{
              color: `"var(--M3-sys-light-background,${isSmallScreen? '#45BAD8' : '#FEF7FF'})"`,
              textAlign: "right",
              fontFamily: "Roboto",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "44px",
            }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#leaderboard")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            لوحة المتصدرين
          </a>
          <a
            href="#how-to-play"
            className="self-stretch w-auto my-auto hover:text-opacity-80 transition-colors text-lg font-medium md:mx-4"
            style={{
              color: `"var(--M3-sys-light-background,${isSmallScreen? '#45BAD8' : '#FEF7FF'})"`,
              textAlign: "right",
              fontFamily: "Roboto",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "44px",
            }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#how-to-play")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            طريقة اللعب
          </a>
        </nav>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/076504b1d3ea4311a21dce1976e534bb/837f800a1febd17ee1a677b8afe8fa71954019d6?placeholderIfAbsent=true"
          alt="Logo"
          className="aspect-[1.2] object-contain w-[120px] order-last md:ml-auto md:order-none"
        />
      </div>
    </header>
  );
};
