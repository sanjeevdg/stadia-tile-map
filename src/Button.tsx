import React from "react";

type Props = {
  label: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ label, onClick }) => {
  return (
    <button
      style={{ padding: "8px 16px", background: "#6200ea", color: "#fff", borderRadius: "6px" }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

