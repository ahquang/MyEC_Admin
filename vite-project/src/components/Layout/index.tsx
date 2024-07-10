import React, { ReactNode } from "react";
import Header from "../Header";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className='flex flex-col items-center bg-bgColor w-full h-full'>{children}</div>
    </div>
  );
};

export default Layout;
