"use client";
import React from "react";

type FocusBlurTestProps = {};

const FocusBlurTest: React.FC<FocusBlurTestProps> = () => {
  // divs do not receive onBlur and onFocus unless they contain input element
  return (
    <div>
      <div
        className="border border-red-500 relative"
        onClick={() => console.log("Click parent")}
        onBlur={() => console.log("Blur parent")}
        onFocus={() => console.log("Focus parent")}
      >
        Parent
        <div
          className="border border-purple-500"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Click good coding");
          }}
        >
          Have a good coding
        </div>
        <input
          type="text"
          placeholder="search"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Click input");
          }}
          onBlur={(e) => {
            e.stopPropagation();
            console.log("Blur input");
          }}
          onFocus={(e) => {
            e.stopPropagation();
            console.log("Focus input");
          }}
        />
        <div
          className="absolute top-24 border border-green-500"
          onClick={(e) => {
            // e.stopPropagation();
            console.log("Click Far off");
          }}
        >
          Far off
        </div>
      </div>
    </div>
  );
};
export default FocusBlurTest;
