import React, { ReactNode } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

interface ContactProps {
  children: ReactNode;
}

const Layout: React.FC<ContactProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
