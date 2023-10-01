import { ReactNode, createContext, useState } from "react";
import { initialState } from "../../redux/Razas/razas.state";

export interface IRazasContext {}

const RazasContext = createContext({});

export const RazasProvider = ({ children }: { children: ReactNode }) => {
  const storage: IRazasContext = {};

  return (
    <RazasContext.Provider value={storage}>{children}</RazasContext.Provider>
  );
};

export default RazasContext;
