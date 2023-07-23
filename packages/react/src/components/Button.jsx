import React from "react";

import { useColorContext } from "../providers/ColorProvider";

const Button = () => {
  const { activeColor, onClick } = useColorContext();

  return (
    <button
      className="button text"
      onClick={onClick}
      style={{ backgroundColor: activeColor }}
    >
      {activeColor}
    </button>
  );
};

export default Button;
