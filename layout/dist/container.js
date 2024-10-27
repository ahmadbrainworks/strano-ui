var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
export function Container(_a) {
    var { background, 
    // color,
    padding, children, className } = _a, props = __rest(_a, ["background", "padding", "children", "className"]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: "container_parent", className: className || "" },
            React.createElement("div", Object.assign({ id: "container" }, props, { className: className || "", style: {
                    background: background || "transparent",
                    padding: padding ? `${padding}px` : "0",
                } }), children))));
}
