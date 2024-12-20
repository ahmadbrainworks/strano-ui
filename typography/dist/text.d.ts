import { ReactNode } from "react";
export type TextProps = {
    fontSize?: number;
    textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
    textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "initial" | "inherit";
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
    fontStyle?: string;
    lineHeight?: string;
    letterSpacing?: string;
    wordSpacing?: string;
    textOverflow?: string;
    direction?: "ltr" | "rtl" | "initial" | "inherit";
    unicodeBidi?: "normal" | "embed" | "bidi-override" | "initial" | "inherit";
    fontVariant?: string;
    verticalAlign?: string;
    children?: ReactNode;
};
export declare const Text: ({ fontSize, textAlign, textTransform, textDecoration, fontWeight, color, shadow, margin, padding, fontFamily, background, WebkitBackgroundClip, WebkitTextFillColor, whiteSpace, fontStyle, lineHeight, letterSpacing, wordSpacing, textOverflow, direction, unicodeBidi, fontVariant, verticalAlign, className, children, }: TextProps) => any;
//# sourceMappingURL=text.d.ts.map