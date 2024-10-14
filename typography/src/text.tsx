import React from "react";
import { ReactNode } from "react";

export type TextProps = {
  fontSize?: number;
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
  textTransform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "initial"
    | "inherit";
  textDecoration?: string;
  fontWeight?: string;
  color?: string;
  shadow?: number;
  margin?: [number, number, number, number];
  padding?: [number, number, number, number];
  fontFamily?: string;
  background?: string;
  WebkitBackgroundClip?: string;
  WebkitTextFillColor?: string;
  whiteSpace?: string;
  className?: string;

  // Optional additional properties
  fontStyle?: string;
  lineHeight?: string;
  letterSpacing?: string;
  wordSpacing?: string;
  textOverflow?: string;
  direction?: "ltr" | "rtl" | "initial" | "inherit";
  unicodeBidi?: "normal" | "embed" | "bidi-override" | "initial" | "inherit";
  fontVariant?: string;
  verticalAlign?: string;
  children?: ReactNode; // The content inside <Text>...</Text>
};

export const Text = ({
  fontSize,
  textAlign,
  textTransform,
  textDecoration,
  fontWeight,
  color,
  shadow,
  margin,
  padding,
  fontFamily,
  background,
  WebkitBackgroundClip,
  WebkitTextFillColor,
  whiteSpace,
  fontStyle,
  lineHeight,
  letterSpacing,
  wordSpacing,
  textOverflow,
  direction,
  unicodeBidi,
  fontVariant,
  verticalAlign,
  className,
  children,
}: TextProps) => {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        margin: margin
          ? `${margin[0]}rem ${margin[1]}rem ${margin[2]}rem ${margin[3]}rem`
          : undefined,
        color: color || "inherit",
        fontSize: fontSize ? `${fontSize}rem` : "inherit",
        textShadow: shadow
          ? `0px 0px 2px rgba(0,0,0,${shadow / 100})`
          : undefined,
        fontWeight: fontWeight || "inherit",
        textTransform: textTransform || "none",
        textDecoration: textDecoration || "none",
        textAlign: textAlign || "inherit",
        padding: padding
          ? `${padding[0]}rem ${padding[1]}rem ${padding[2]}rem ${padding[3]}rem`
          : undefined,
        fontFamily: fontFamily || "inherit",
        background: background || "none",
        WebkitBackgroundClip: WebkitBackgroundClip || "text",
        WebkitTextFillColor: WebkitTextFillColor || "inherit",
        whiteSpace: whiteSpace || "normal",
        fontStyle: fontStyle || "normal",
        lineHeight: lineHeight || "normal",
        letterSpacing: letterSpacing || "normal",
        wordSpacing: wordSpacing || "normal",
        textOverflow: textOverflow || "clip",
        direction: direction || "ltr",
        unicodeBidi: unicodeBidi || "normal",
        fontVariant: fontVariant || "normal",
        verticalAlign: verticalAlign || "baseline",
      }}
    >
      {children}
    </div>
  );
};
