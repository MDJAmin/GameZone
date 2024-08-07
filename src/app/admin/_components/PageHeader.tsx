import React, { ReactNode } from "react";

export default function PageHeader({ children }: { children: ReactNode }) {
  return <h1 className=" opacity-0 text-4xl mb-4 text-white">{children}</h1>;
}
