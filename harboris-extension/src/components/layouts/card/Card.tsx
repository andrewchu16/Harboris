import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div
      style={{
        display: "flex",
        padding: "24px",
        flexDirection: "column",
        alignItems: "flex-start",
        alignSelf: "stretch",
        borderRadius: "16px",
        border: "0.5px solid #EBEBEB",
        background: "rgba(255, 255, 255, 0.60)",
        boxShadow: "0px 4px 4px 0px rgba(222, 222, 222, 0.25)",
        backdropFilter: "blur(25px)",
      }}
    >
      {children}
    </div>
  );
}
