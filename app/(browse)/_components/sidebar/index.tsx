import { FC } from "react";
import Wrapper from "./wrapper";
import Toggle from "./toggle";

interface Props {}

const Sidebar: FC<Props> = (props): JSX.Element => {
  return (
    <Wrapper>
      <Toggle />
    </Wrapper>
  );
};

export default Sidebar;
