"use client";
import { FC, ReactNode } from "react";

import { RecoilRoot } from "recoil";

type RecoilRootProviderProps = {
  children: ReactNode;
};

const RecoilRootProvider: FC<RecoilRootProviderProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootProvider;
