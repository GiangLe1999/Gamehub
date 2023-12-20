import { FC, ReactNode } from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import { Container } from "lucide-react";

interface Props {
  children: ReactNode;
}

const BrowseLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
