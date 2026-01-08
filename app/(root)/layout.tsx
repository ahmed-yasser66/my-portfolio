import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function layout({children}:{children:ReactNode}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}
