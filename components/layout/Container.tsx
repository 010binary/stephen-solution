import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="container mx-auto px-4 md:px-0">{children}</div>;
};

export default Container;
