import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const useFontInter = () => {
  return { inter: inter.className };
};

export default useFontInter;
