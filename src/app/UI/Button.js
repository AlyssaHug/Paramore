"use client";
import React from "react";

export default function Button(href, value, target = "_self") {
    function handleClick() {
        if (href) {
            window.open(href, target);
            return;
        }
        if (onClick) {
            onClick();
        }
    }
    return (
        <button onClick={handleClick}>
            <p>To Da Band</p>
        </button>
    );
}
