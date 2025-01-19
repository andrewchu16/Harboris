import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return (
    <section
      style={{
        paddingTop: "24px",
        width: "100%",
      }}
    >
      {children}
    </section>
  );
}
