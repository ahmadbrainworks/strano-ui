import React, { ReactNode } from "react";

export interface ContainerProps {
  background?: string;
  // color?: string;
  height?: string;
  width?: string;
  padding?: number;
  children?: ReactNode;
  className?: string;
}

export function Container({
  background,
  // color,
  padding,
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <>
      <div id="container_parent" className={className || ""}>
        <div
          id="container"
          {...props}
          className={className || ""}
          style={{
            background: background || "transparent",
            padding: padding ? `${padding}px` : "0",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
