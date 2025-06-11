"use client";
import clsx from "clsx";
import Link from "next/link";
const Logo = ({ className }: { className?: string }) => {
  return (
    <>
      <Link href={"/"}>
        <img
          alt="logo"
          className={clsx(`w-44`, className)}
          src={"/Logo/Logo.png"}
        />
      </Link>
    </>
  );
};

export default Logo;
