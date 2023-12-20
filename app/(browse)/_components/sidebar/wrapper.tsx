"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Wrapper: FC<Props> = ({ children }): JSX.Element => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-0 flex-col w-60 h-full bg-background border-r border-[#2d2e35] z-50 transition-width",
        collapsed && "w-[70px] "
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
