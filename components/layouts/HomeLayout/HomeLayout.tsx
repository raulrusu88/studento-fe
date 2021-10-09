import React from "react";
import Head from "next/head";
import NavigationLayout from "../components/LayoutNavigation";
import SearchSection from "../components/SearchSection";
import Sort from "../components/Sort";
const HomeLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Studento</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full h-full flex flex-col mb-5">
        <NavigationLayout />
        <SearchSection />
        <Sort />
        {children}
      </div>
      <footer className="bg-blue-700 flex items-center justify-center h-16 text-white font-semibold">
        Made with <span className="text-red-700 mx-2">♥</span> in Cluj-Napoca
      </footer>
    </div>
  );
};

export default HomeLayout;
