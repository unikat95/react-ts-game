import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center relative">
      {children}
    </div>
  );
}
