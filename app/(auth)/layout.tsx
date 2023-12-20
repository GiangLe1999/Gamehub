import { FC, ReactNode } from "react";
import Logo from "./_components/logo";

interface Props {
  children: ReactNode;
}

const AuthLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-6">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
