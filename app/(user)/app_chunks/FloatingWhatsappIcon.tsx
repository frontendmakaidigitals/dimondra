import React from "react";
import Link from "next/link";

const FloatingWhatsappIcon = () => {
  const number = "+971562787553";

  return (
    <Link
      href={`https://wa.me/${number.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-50 group"
    >
      <div className="relative w-14 h-14">
        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ripple group-hover:animate-ripple-fast" />

        {/* WhatsApp icon with hover scaling */}
        <div className="relative z-10 flex items-center justify-center w-full h-full bg-[#212121] rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
          <img src="/icon/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
        </div>
      </div>
    </Link>
  );
};

export default FloatingWhatsappIcon;
