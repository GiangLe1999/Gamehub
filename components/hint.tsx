import { Tooltip, TooltipProvider } from "@radix-ui/react-tooltip";
import { FC, ReactNode } from "react";
import { TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface Props {
  label: string;
  children: ReactNode;
  asChild?: boolean;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}

const Hint: FC<Props> = ({
  label,
  children,
  asChild,
  side,
  align,
}): JSX.Element => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
        <TooltipContent
          className="text-black bg-white"
          side={side}
          align={align}
        >
          <p className="font-semibold">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;
