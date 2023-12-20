import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }): JSX.Element => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <div
      className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
};

export default Container;
