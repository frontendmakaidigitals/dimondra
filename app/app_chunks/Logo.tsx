import clsx from "clsx";

const Logo = ({ className }: { className?: string }) => {
  return (
    <>
      <img className={clsx(`w-44`, className)} src={"Logo/Logo.png"} />
    </>
  );
};

export default Logo;
