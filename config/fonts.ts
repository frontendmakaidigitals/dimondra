import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Grand_Hotel,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const grandHotel = Grand_Hotel({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-grand-hotel",
});
