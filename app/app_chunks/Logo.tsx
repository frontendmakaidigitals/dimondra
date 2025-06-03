"use client";
import clsx from "clsx";
const Logo = ({ className }: { className?: string }) => {
  return (
    <>
      <img
        alt="logo"
        className={clsx(`w-44`, className)}
        src={"Logo/Logo.png"}
      />
    </>
  );
};

export default Logo;
