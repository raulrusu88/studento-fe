import React from "react";

export const ItemsContainer: React.FC = ({ children }) => (
  <div className="w-full h-full grid grid-cols-4 auto-rows-auto px-11 py-3 justify-items-center gap-y-5">
    {children}
  </div>
);
