import React from "react";
export const Text = ({ fontSize, textAlign, textTransform, textDecoration, fontWeight, color, shadow, margin, padding, fontFamily, background, WebkitBackgroundClip, WebkitTextFillColor, whiteSpace, fontStyle, lineHeight, letterSpacing, wordSpacing, textOverflow, direction, unicodeBidi, fontVariant, verticalAlign, className, children, }) => {
    return (React.createElement("div", { className: className, style: {
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
        } }, children));
};
