import React from "react";

import { useColorContext } from "../providers/ColorProvider";

const Button = () => {
  const { color, onClick } = useColorContext();

  return (
    <button
      className="button text"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
};

export default Button;
